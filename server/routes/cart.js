const tokenVerify = require('../helpers/verifyToken');
const express = require('express');
const router = express.Router();
const app = require('../server');

router.get('/', (req, res) => {
    console.log('Authenticated');
    return app.render(req, res, '/cart', {flashMessage: 'Cart'})
})


module.exports = router;