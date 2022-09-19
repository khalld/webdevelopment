// Router allows the developers to group the request routes by some logic. Also,
// they are used typically in the MVC pattern.

const express = require("express");
const router = express.Router();
const db = require('../db/connection.js');
const { ObjectId } = require("mongodb");

// create a new element!
router.post('/register', async (req, res) => {
    const dbConnection = db.getDb();
    
    console.log(req.body)

    await dbConnection
        .collection("users")
        .insertOne(req.body, function(err, result) {
            if (err) {
                res.status(400).send("Error inserting user!");
            } else {
                console.log(`Registered new user: ${req.body.username}`)
                res.status(204)
                res.send();
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