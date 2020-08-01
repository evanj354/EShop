const tokenVerify = require('../helpers/verifyToken');
const express = require('express');
const router = express.Router();
const app = require('../server');
const db = require('../models');
const Item = require('../models/Item');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


router.get('/', tokenVerify, (req, res) => {
    console.log('Authenticated');
    return app.render(req, res, '/cart', {flashMessage: 'Cart'})
})



const createItem = function(userId, item) {
    return db.Item.create(item).then(newItem => {
        return db.User.findByIdAndUpdate(
            userId,
            { $push: { items: newItem._id } },
            { new: true, useFindAndModify: false }
        )
    })
}

router.post('/add', (req, res) => {
    const item = req.body;
    console.log('Client Token, ', req.cookies.token);
    let user = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
    console.log('ITEM TO ADD ', {...item});
    createItem(user.id, {
        ...item
    });
    
});

router.post('/addAll', (req, res) => {
    const items = req.body.items;
    console.log('ITEMS ALL: ', items);
    let user = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
    if(user) {
        items.forEach(item => {
            createItem(user.id, {...item})
        })
    }
})

module.exports = router;