
const { checkConnection } = require('./src/dbConnection/index');
const initApp = require('./src/app');

async function init(){
    checkConnection().then(() => {
        initApp();
    }) ;
}

init();




