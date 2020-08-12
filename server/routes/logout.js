const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = require('../server');

const User = require('../models/User');
const session = require('express-session');

router.get('/', (req, res) => {
    console.log('DeAuthenticating: ', req.sessionID);
    // req.session.destroy(function(err) {

    //     res.send(err);
    // });
    req.session.destroy();
    return res.send('Done');
});

module.exports = router;