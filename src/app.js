const express = require('express');
const router = require('./router/index');
const app = express();
const  bodyParser = require('body-parser');
const {redisClient} = require('../dbConnection/redis');

module.exports = async () => {
        
    app.use(bodyParser.json({limit: '5mb'}));
    // app.use(cors());

    app.use('/api/v1', router);

    app.listen(3001, async () => {
        // console.log('redisClient', redisClient, redisClient.set('A', 10));
        // console.log('get ', await redisClient.get("A"), await redisClient.ping());
        console.log('node server started');
    })
};