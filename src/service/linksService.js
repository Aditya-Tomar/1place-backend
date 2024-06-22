const { redisClient } = require('../../dbConnection/redis');
const { getLinksData } = require('../repository/links');

async function getLinksForUser(req, res) {
    const data = await getLinksData();
    res.json({ data });
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

module.exports = {
    getLinksForUser,
    getLinksForUserCustomer,

    createLinks,
    updateLinks,
    deleteLinks
}
