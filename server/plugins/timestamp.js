// const { default: next } = require("next");



module.exports = function timestamp(schema, next) {
    schema.add({
        addedAt: Date
    });

    schema.pre('save', function(next) {
        this.addedAt = Date.now();
    })

    next();

}