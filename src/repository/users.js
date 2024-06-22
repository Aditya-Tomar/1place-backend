const { getConnection } = require('../../dbConnection/mongo');
const { dbName, users_collection } = require('config').get('MongoDb');

async function getUsersCollectionCon() {
    const conn = await getConnection();
    const db = conn.db(dbName);
    return db.collection(users_collection);
}

async function getUserDetails() {
    const db = await getUsersCollectionCon();
    return db.find().toArray();
}

async function createUserDetails() {
    const db = await getUsersCollectionCon();
    // return db.insert(userDetail);
}

module.exports = {
    getUserDetails,
    createUserDetails
}