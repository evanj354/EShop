const mongoose = require('mongoose');
const timestampPlugin = require('../plugins/timestamp');

const ItemSchema = mongoose.Schema({
    name: String,
    url: String,
    price: String,
    imgurl: String,
    createdAt: Date
});


ItemSchema.pre('save', function(next) {
    this.createdAt = Date.now();
    next();
})
// ItemSchema.plugin(timestampPlugin);

module.exports = mongoose.model('Item', ItemSchema);