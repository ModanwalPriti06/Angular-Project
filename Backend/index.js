const express =  require('express');
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT;        
const url = process.env.MONGO_URL;       

app.use(express.json())              //middleware to convert chunks data to json format; to avoid data+=chunk in node
app.use(express.urlencoded({extended: true}));

const mongoose = require("mongoose"); //importing mongoose module
mongoose.connect("mongodb://0.0.0.0/newdb"); //database link(local or online url)


const userRouter = require('./Routes/users');
app.use('',userRouter) //first argument is common path, i.e Any url that starts with /users add all of these routes to the end of it
app.listen(port);

// we did not use the path /user, /user/new & /user/data here because router understands that it's common & there's no need to repeat it.