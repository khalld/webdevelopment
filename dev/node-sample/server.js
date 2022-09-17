const { MongoClient } = require('mongodb');
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 8081;                  //Save the port number where your server will be listening

const dbUsr = "admin"
const dbPwd = "admin"

// Connection URI
const uri = `mongodb+srv://${dbUsr}:${dbPwd}@mongo01.nrnquyl.mongodb.net/?retryWrites=true&w=majority`;

// Create a new MongoClient
const client = new MongoClient(uri);

// console.log(__dirname);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

//Idiomatic expression in express to route and respond to a client request
//get requests to the root ("/") will route here
app.get('/', (req, res) => {
    //server responds by sending the index.html file to the client's browser
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
    res.sendFile('index.html', {root: __dirname });
    
});


app.get('/comments', async (req, res) => {

    try {
        await client.db("mongo01").collection("sample_mflix.comments")
            .findOne({}, async function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    await client.close();
            });
    } catch (error) {
        console.log(error);
    }

    // res.send("This is a GET!")

})

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Establish and verify connection
        await client.db("mongo01").command({ ping: 1 });
        console.log("Connected successfully to server");
    } finally {
        // Ensures that the client will close when you finish/error
        console.log("pippo!")
        // await client.close();
    }
}

// TODO: una GET

// TODO: una PUT

// TODO: una POST

run().catch(console.dir);

