const express =  require('express');
const app = express();
const connectDB = require('./mongodb');
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT;        
const url = process.env.MONGO_URL;        
app.use(express.json())              //middleware to convert chunks data to json format; to avoid data+=chunk in node
app.use(express.urlencoded({extended: true}));
app.use(cors())
const User = require('./models/userSchema');

connectDB()


// Handle POST request to create a new user
app.post('/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    console.log(newUser);
    res.status(200).json("Ok")
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Handle GET request to fetch all users
app.get('/',(req,res)=>{
  res.send('server started')
})
app.get('/dashboard', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/signin', async (req, res) => {
  try {
    const users = await User.find({email:req.query.email, password:req.query.password});
    if(users.length > 0) { 
      res.json(true);
    }
    else{
      res.json(false);
    }
  } catch (error) {
    res.status(400).json({ error: 'Internal Server Error' });
  }
});



app.listen(port || 5003,()=>{
  console.log('server started on port', port)
});
// app.listen(5001);