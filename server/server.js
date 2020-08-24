const express = require('express');
const next = require('next');
const flash = require('express-flash-messages');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const reactViews = require('express-react-views');
const axios = require('axios').default;
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST
});
require('dotenv/config');

const port = parseInt(process.env.POST, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = module.exports = next({ dev });
const handle = app.getRequestHandler();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
const stripe = require('stripe')(stripeSecretKey);


const { login, logout, register, search, cart } = require('./routes/index');


app.prepare().then(() => {
    const server = express();
    console.log("REDIS HOST: ", process.env.REDIS_HOST);

    server.set('views', __dirname+'/../pages');
    server.set('view engine', 'js');
    server.engine('js', reactViews.createEngine());

    server.use(cors());
    server.use(express.urlencoded({extended: true}));
    server.use(express.json());
    server.use(cookieParser());    

    server.use(session({
        store: new redisStore({ host: process.env.REDIS_HOST, client: redisClient, port: 6379 }),
        secret: process.env.SESSION_SECRET,
        cookie: {
            maxAge: 600000
        },
        name: 'redis_session_id'
    }));

    server.use('/login', login);

    server.use('/logout', logout);
    
    server.use('/register', register);

    server.use('/search', search);
    
    server.use('/cart', cart);

    server.post('/checkout', async (req, res) => {
        try {
            console.log('BODY: ', req.body);
            const amount = req.body.amount; 
            console.log('AMOUNT: ', amount);
       
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: "usd"
            });
        

            console.log('PASSED');
            res.send(paymentIntent.client_secret);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
       
    })
    

    server.all('*', (req, res) => {
        return handle(req, res);
    })

    mongoose.connect(
        process.env.MONGOAUTH, 
        { useNewUrlParser: true, useUnifiedTopology: true }, 
        () => {
           console.log('connected to the Mongo DB');}
    )

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`Server running on http://localhost:${port}`);
    })
})

