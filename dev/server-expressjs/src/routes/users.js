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


// ritorno il semplice oggetto router
module.exports = router;