// ----- Example of an express.js server -------

const db = require("./src/db/connection.js")
const env = require("./src/config/config.js");
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server

const restaurantRouter = require("./src/routes/restaurants");

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

// load Express.js router
// per interrogare l'API è necessario anteporre /api a tutto il path dentro restaurantRouter
// possibile anche passare "", la best practice sarebbe dare solo i params al router ed assegnare qui il path
app.use("/api", restaurantRouter);

app.listen(env.port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${env.port}`); 
});
