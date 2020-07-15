const express = require('express');
const router = express.Router();
var app = require('../server');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const { registerValidation } = require('../helpers/validation');


router.post('/', async (req, res) => {
    //Check if passwords match
    if(req.body.password != req.body.retypePassword) {
        return app.render(req, res, '/register', {flashMessage: "Passwords do not match"});
    }

    //Check validation schema
    const {error} = registerValidation(req.body);    
    if (error) return app.render(req, res, '/register', {flashMessage: error.details[0].message})
     

    //Check if user already registered
    const alreadyRegistered = await User.findOne({email: req.body.email});
    if (alreadyRegistered) return app.render(req, res, '/register', {flashMessage: "Email already registered to an account"});
    
    //Hash passwords
    console.log(req.body.password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        return app.render(req, res, '/index', { savedUser })
    }
    catch (err){
        console.log('');
        return app.render(req, res, '/register', {flashMessage: err});
    }
});

router.get('/', (req, res) => {
    return app.render(req, res, '/register', req.query);
});
    

module.exports = router;