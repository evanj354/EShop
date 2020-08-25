const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = require('../server');
const { loginValidation } = require('../helpers/validation');

const User = require('../models/User');

router.get('/', (req, res) => {
    return app.render(req, res, '/login', req.query);
});

router.post('/', (req, res) => {
    //Validate Schema
    console.log('IN LOGIN');
    const { err } = loginValidation(req.body);
    if (err) return app.render(req, res, '/login', { flashMessage: err });
    console.log('PAST FIRST BREAK');
    //Query Database
    const user = User.findOne({email: req.body.email}, async function (err, user) {
        if (err) return app.render(req, res, '/login', {flashMessage: err});
        if (!user) return app.render(req, res, '/login', {flashMessage: `${req.body.email} is not registered for an account`});
        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            return app.render(req, res, '/login', {flashMessage: `Password is incorrect`});
        }
        //Send JSON web token
        const token = jwt.sign({id: user._id, sid: req.session.id}, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        });
        console.log('GOT USER');
        req.session.userID = user._id;
        req.session.username = user.email;
        return app.render(req, res, '/cart', {flashMessage: `Welcome ${user.email}`, authToken: token});
    });

    
});

module.exports = router;