const { ObjectId } = require('mongodb');
const { getConnection } = require('../../dbConnection/mongo');
const { dbName, users_collection } = require('config').get('MongoDb');

async function getUsersCollectionCon() {
    const conn = await getConnection();
    const db = conn.db(dbName);
    return db.collection(users_collection);
}


async function getUserDetails(userId) {
    const db = await getUsersCollectionCon();
    return db.find({ _id: new ObjectId(userId) }).toArray();
}

async function createUserDetails(userDetails) {
    try {
        const db = await getUsersCollectionCon();
        return db.insertOne(userDetails);
    } catch (e) {
        console.log('Error while inserting user data in db ', e);
        throw err;
    }
}

module.exports = {
    getUserDetails,
    createUserDetails
}