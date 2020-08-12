const app = require('../server');

module.exports = function(req, res, next) {
    console.log(req.session.userID);
    if (!req.session.userID) {
        return app.render(req, res, '/login', {flashMessage: 'Login Required to view page'});
    }
    else {
        next();
    }
};