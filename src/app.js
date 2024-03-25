const express = require('express');
const router = require('./router/index');
const app = express();
const  bodyParser = require('body-parser');

export default async () => {
        
    app.use(bodyParser.json({limit: '5mb'}));
    // app.use(cors());

    app.use('/api/v1', router);

    app.listen(3000, () => {
        console.log('node server started');
    })
};