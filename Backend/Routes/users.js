const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('user home');
})
router.get('/new', (req,res)=>{
    res.send('new user')
})
router.get('/data', (req,res)=>{
    res.send('user data')
})
router.post('/', (req,res)=>{
    res.send('user home post data');
})
router.get('/:id', (req,res)=>{         //any paramter after colon is dynamic & we can access it 
    
    res.send(`get user with id ${req.params.id}`);
})

module.exports = router;