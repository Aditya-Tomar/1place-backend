const { getConnection } = require('../../dbConnection/mongo');
const { dbName, links_collection } = require('config').get('MongoDb');

async function getLinksCollectionCon() {
    const conn = await getConnection();
    const db = conn.db(dbName);
    return db.collection(links_collection);
}

async function getLinksData() {
    const db = await getLinksCollectionCon();
    return db.find().toArray();
}


module.exports = {
    getLinksData,
}