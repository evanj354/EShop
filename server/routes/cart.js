const tokenVerify = require('../helpers/verifyToken');
const express = require('express');
const router = express.Router();
const app = require('../server');
const db = require('../models');
const User = require('../models/User');
const Item = require('../models/Item');
const jwt = require('jsonwebtoken');
const redirect = require('../helpers/redirectAuth');


router.get('/', redirect, (req, res) => {
    console.log('Authenticated, ', req.session.userID);
    return app.render(req, res, '/cart', {flashMessage: 'Cart'})
})

const createItem = async function(userID, item) {
    const newItem = new db.Item({...item});
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
    createItem(user.id, {
        ...item
    });
    
});

router.post('/addAll', redirect, (req, res) => {
    const items = req.body.items;
    const user = req.session.userID;
    if(user) {
        items.forEach(item => {
            createItem(user, {...item})
        })
    }

    return app.render(req, res, '/cart', {flashMessage: `${items.length} items saved to cart`})
});

router.get('/getAll', redirect, (req, res) => {
    console.log("SESSIONID: ", req.session.userID);
    User
        .findOne({ _id: req.session.userID })
        .populate('items')
        .exec( function(err, user) {
            if (err) return err;
            res.send({items: user.items});
        });

    
}) 

module.exports = router;