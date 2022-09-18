const { MongoClient } = require('mongodb');
const credentials = require('./credentials.js');
// Connection URI
const uri = `mongodb+srv://${credentials.dbUsr}:${credentials.dbPwd}@${credentials.deployDb}.nrnquyl.mongodb.net/?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(uri);

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db ){
                return callback(err);
            }
            dbConnection = db.db(credentials.dbName);
            console.log(`Successfully connected to ${credentials.deployDb}, database name: ${credentials.dbName}`);
            return callback();
        });
    },

    getDb: function() {
        return dbConnection;
    }
}