const { MongoClient } = require('mongodb');

const dbUsr = "admin"
const dbPwd = "admin"
const deployDb = "mongo01"

// Connection URI
const uri = `mongodb+srv://${dbUsr}:${dbPwd}@${deployDb}.nrnquyl.mongodb.net/?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(uri);

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db ){
                return callback(err);
            }

            const dbName = "sample_restaurants" // "sample-personal-db"

            dbConnection = db.db(dbName);
            console.log(`Successfully connected to ${deployDb}, database name: ${dbName}`);

            return callback();
        });
    },

    getDb: function() {
        return dbConnection;
    }
}