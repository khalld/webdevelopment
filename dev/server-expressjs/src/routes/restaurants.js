// Router allows the developers to group the request routes by some logic. Also,
// they are used typically in the MVC pattern.

const express = require("express");
const router = express.Router();
const db = require('../db/connection.js');
const { ObjectId } = require("mongodb");

// import like es6. È un oggetto, quindi bisogna utilizzare il . per accedere alle variabili/funzioni
const mdws = require('../middleware/logger.js');

router.get('/restaurants', mdws.logger, async (req, res) => {

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
router.get('/restaurants/:id', async (req, res) => {
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
router.post('/restaurants', async (req, res) => {
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
router.post('/restaurants/:id', async (req, res) => {
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
                // invece di ritornare un 204 NO-content ritorno le informazioni della result!
                // ricorda che json() permette di ritornare un json direttamente!
                res.status(200).json(result);

            }
        })
})

// ritorno il semplice oggetto router
module.exports = router;