<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/creatuser",
  [
    body("email").isEmail(),
    body("password","Incorrect Password").isLength({ min: 5 }),
    body("name").isLength({ min: 2 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
      await User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        location:req.body.location
      }),
        res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
=======
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
>>>>>>> 7577f1458565af80e7515bd558cb7c08ae2bebbb
