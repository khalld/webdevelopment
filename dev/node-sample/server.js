// ----- Example of an express.js server -------

const db = require("./assets/js/db.js")
const express = require('express'); //Import the express dependency
const { ObjectId } = require("mongodb");
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 8081;                  //Save the port number where your server will be listening

// console.log(__dirname);

// performs database connection when the server starts
db.connectToServer(function(err) {
    if (err){
        console.error(error)
        process.exit()
    }
})

// --- Necessari per fare funzionare express con il Body!
app.use(express.urlencoded({extent: false}));
app.use(express.json());

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

app.get('/restaurants', async (req, res) => {

    const dbConnection = db.getDb();
    
    dbConnection
        .collection("restaurants")
        .find({})
        .limit(50)
        .toArray(function (err, result){
            if (err){
                res
                    .status(400)
                    .send("Error fetch list! " + err)
            } else {
                res.status(200).json(result)                
            }
        })
})

// get single element by single element!
app.get('/restaurants/:id', async (req, res) => {
    const dbConnection = db.getDb();
    const id = req.params.id;

    const query = {_id: ObjectId(`${id}`)};

    try {
        const restaurant = await dbConnection.collection("restaurants").findOne(query)
    
        if (restaurant == null){
            res.status(400).send(`No restaurant wit _id ${id} founded`)
        } else {
            res.json(restaurant)
        }

    } catch (error) {
        console.error(error)
    }

})

// create a new element!
app.post('/restaurants', async (req, res) => {
    const dbConnection = db.getDb();
    
    await dbConnection
        .collection("restaurants")
        .insertOne(req.body, function(err, result) {
            if (err) {
                res.status(400).send("Error inserting restaurant!");
            } else {
                // TODO: il result ritorna un elemento utile per verificato se hai modificato qualcosa, quindi potresti prendere info da lì per migliorare la risposta!
                console.log(`Added new restaurant with name ${req.body.name} and id ${req.body._id}`)
                res.status(204).send();
            }
        })
})


// edit an existing element from Id!
app.post('/restaurants/:id', async (req, res) => {
    const dbConnection = db.getDb();
    
    const query = {_id: ObjectId(`${req.params.id}`)};
    const updates = {
        $set: {
            name: req.body.name
        }
    }
    await dbConnection
        .collection("restaurants")
        .updateOne(query, updates, function(err, result)  {
            if (err) {
                res.status(400).send(`Error updating restaurant with id ${query._id}`);
            } else {
                // TODO: il result ritorna un elemento utile per verificato se hai modificato qualcosa, quindi potresti prendere info da lì per migliorare la risposta!
                console.log(`Edit restaurant with id  ${query._id} with name ${req.body.name}`)
                res.status(204).send();
            }
        })
})