
const { getConnection } = require('./dbConnection/mongo');
const initApp = require('./src/app');

async function init(){
    getConnection().then(() => {
        initApp();
    }) ;
}

init();




