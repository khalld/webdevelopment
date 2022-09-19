// Router allows the developers to group the request routes by some logic. Also,
// they are used typically in the MVC pattern.

const express = require("express");
const router = express.Router();
const db = require('../db/connection.js');
const { ObjectId } = require("mongodb");

// create a new element!
router.post('/register', async (req, res) => {
    const dbConnection = db.getDb();
    
    await dbConnection
        .collection("users")
        .insertOne(req.body, function(err, result) {
            if (err) {
                res.status(400).send("Error inserting user!");
            } else {
                console.log(`Registered new user: ${req.body.name}`)
                // Non funziona perché viene utilizzata una POST!
                // res.redirect(204, '/login');1
                res.status(204).send();
            }
        })
})

router.get('/users/:id/details', async(req, res) => {
    const dbConnection = db.getDb();
    const id = req.params.id;

    const query = {_id: ObjectId(`${id}`)}

    const user = await dbConnection
        .collection("users")
        .findOne(query)

    if (user == null){
        res.status(400).send(`No user wit _id ${id} founded`)
    } else {
        res.json(user)
    }
})

router.put('/users/:id/update', async(req, res) => {
    const dbConnection = db.getDb();
    const id = req.params.id;

    const query = {_id: ObjectId(`${id}`)}

    const updates = {
        $set: {
            name: req.body.name,
            password: req.body.password
        },
    }

    console.log(updates);

    await dbConnection
        .collection("users")
        .updateOne(query, updates, function(err, result)  {
            if (err) {
                res.status(400);
                res.send(`Error updating user with id ${query._id}`);
            } else {
                // TODO: il result ritorna un elemento utile per verificato se hai modificato qualcosa, quindi potresti prendere info da lì per migliorare la risposta!
                console.info(`Edited successfully user credentials!`)
                // invece di ritornare un 204 NO-content ritorno le informazioni della result!
                // ricorda che json() permette di ritornare un json direttamente!
                res.status(200);
                res.json(result);

            }
        })
        
})

router.get('/users/:name', async(req, res) => {
    const dbConnection = db.getDb();
    const name = req.params.name;

    const query = {name: name}

    await dbConnection
        .collection("users")
        // TODO: find one or more!
        .find(query)
        .limit(10)
        .toArray(function (err, result){
            if (err){
                res
                    .status(400)
                    .send("Error fetching list! " + err)
            } else {
                res.status(200).json(result)                
            }
        })
})


// ritorno il semplice oggetto router
module.exports = router;