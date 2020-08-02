const tokenVerify = require('../helpers/verifyToken');
const express = require('express');
const router = express.Router();
const app = require('../server');
const db = require('../models');
const Item = require('../models/Item');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const redirect = require('../helpers/redirectAuth');


router.get('/', redirect, (req, res) => {
    console.log('Authenticated, ', req.session.userID);
    return app.render(req, res, '/cart', {flashMessage: 'Cart'})
})

const createItem = async function(userID, item) {
    const newItem = new db.Item({...item});
    console.log('NEW ITEM, ', newItem);
    await newItem.save();
    const userUpdate = await db.User.findByIdAndUpdate(
        userID,
        { $push: { items: newItem._id } },
        { new: true, useFindAndModify: false }
    )
    await userUpdate.save();
}

// const createItem = function(userId, item) {
//     return db.Item.create(item).then(newItem => {
//         return db.User.findByIdAndUpdate(
//             userId,
//             { $push: { items: newItem._id } },
//             { new: true, useFindAndModify: false }
//         )
//     })
// }

router.post('/add', (req, res) => {
    const item = req.body;
    console.log('Client Token, ', req.cookies.token);
    let user = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
    console.log('ITEM TO ADD ', {...item});
    createItem(user.id, {
        ...item
    });
    
});

router.post('/addAll', redirect, (req, res) => {
    const items = req.body.items;
    const user = req.session.userID;
    console.log('ITEMS, ', items);
    console.log('USER, ', user);
    if(user) {
        items.forEach(item => {
            createItem(user, {...item})
        })
    }

    return app.render(req, res, '/cart', {flashMessage: `${items.length} items saved to cart`})
})

module.exports = router;