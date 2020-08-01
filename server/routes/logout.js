const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = require('../server');

const User = require('../models/User');

router.get('/', (req, res) => {
    console.log('DeAuthenticating');
    req.session.destroy();
    return app.render(req, res, '/', req.query);
});

module.exports = router;