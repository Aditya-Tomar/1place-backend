const { redisClient } = require('../dbConnection/index');


function getLinksForUser(req, res, next) {
    // redisClient.get();
}

function getLinksForUserCustomer(req, res, next){
   // redisClient.get();
}



function createLinks(req, res, next) {

}

function updateLinks(req, res, next) {

}

function deleteLinks(req, res, next) {

}

export {
    getLinksForUser,
    getLinksForUserCustomer,

    createLinks,
    updateLinks,
    deleteLinks
}
