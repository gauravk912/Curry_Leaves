const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post("/creatuser", async(req,res)=>{
    try {
        await User.create({
            name:'Sham Das',
            password:"123455",
            email:"shamdas12@gmail.com",
            location:"afsd"
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        es.json({success:false});
    }
})

module.exports = router;