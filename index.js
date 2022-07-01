// Dependencies
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '.env')});
const express = require('express');
const cors = require('cors');
const router = require('#routes/index.js');
const app = express();
const { errorHandler } = require('#middlewares/errorHandler.js');

// Database
const connection = require('./db/connection');

// Cors
const corsOption = {
    origin: ['http://localhost:3000', 'https://www.nfthost.app'],
    optionsSuccessStatus: 200
}
app.options(cors(corsOption));
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if(corsOption.origin.includes(origin)){
        res.header("Access-Control-Allow-Origin", origin);
    }        
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header("Access-Control-Allow-Methods", 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.status(200);
    }
    next();
})

// Express Config
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

// Connection
connection.once('open', () => {
    console.log("[NFTHost] Connected to MongoDB")
    app.listen(8080, () => {
        console.log(`[NFTHost] listening at http://localhost:${8080}`)
    })
});

module.exports = app;

// const { generateThirdPartyToken } = require('../middlewares/jwt');
// console.log(generateThirdPartyToken({ origin: 'https://www.nfthost.app/' }))