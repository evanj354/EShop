const jwt = require('jsonwebtoken');
const app = require('../server');


module.exports = function(req, res, next) {
    const user = req.session.userID;
    
}

module.exports = function(req, res, next){
    const token = req.session.userID;
    console.log('token: ', token);
    if (!token) return app.render(req, res, '/login', {flashMessage: 'Login Required to view page'});

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch (err) {
        return app.render(req, res, '/login', {flashMessage: 'Login Required to view page'});
    }
}
