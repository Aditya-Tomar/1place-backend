const { MongoClient } = require('mongodb');
const config = require('config');
const { uri } = config.get('MongoDb');
let mongoConn;

async function createConnection() {
    try {
        let mongoClient = new MongoClient(uri);
        mongoConn = await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoConn;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
}

async function getConnection() {
    if(mongoConn)
    return mongoConn;

    return await createConnection();
}

module.exports = {
    getConnection,
    createConnection
};