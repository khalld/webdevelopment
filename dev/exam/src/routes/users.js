const express = require("express");
const router = express.Router();
const env = require("../config/config.js");
const axios = require('axios').default;

// get all users
router.get('', async (req, res) => {
    axios.get(`${env.fetchUri}/users/`)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
})

// get single user info
router.get('/:id', async (req, res) => {
    const requestedId = req.params.id;

    axios.get(`${env.fetchUri}/users/${requestedId}`)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
})

router.get('/login/:email', async (req, res) => {

    const email = req.params.email;
    var users = [];
    // lista di tutti gli utenti
    await axios.get(`${env.fetchUri}/users/`)
        .then(function (response) {
            users = response.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        
    const found = users.find(element => element.email == email);
    if (found != undefined) {
        res.json(found).status(200)
    } else {
        res.send({message: "User not founded!"}).status(404)
    }

})

// TODO: Registrazione ?????
router.post('/register', async (req, res) => {

    var users = [];
    const email = req.body.email;
    const name = req.body.name;
    const surname = req.body.surname;

    await axios.get(`${env.fetchUri}/users`)
    .then(function (response) {
        users = response.data;
    })
    .catch(function (error) {
        console.log(error);
        res.send(`Something wrong happened ${error}`)
        res.sendStatus(500);
    })

    const found = users.find(element => element.email == email);

    const id = users[users.length - 1]['id'] + 1;

    const newUser = {
        id: id,
        name: name,
        email: email,
        surname: surname,
    }

    if (found != undefined) {
        res.json({message: `User with that email already exist!`})
        res.sendStatus(404);
    } else {
        await axios.post(`${env.fetchUri}/users`, newUser)
        .then(function (response) {
            if (response.status == 201){
                res.json(newUser)
                res.sendStatus(201)
            }
        })
        .catch(function (error) {
            // res.send(`Something wrong happened ${error}`)
            res.json({message: `Something wrong happened ${error}`})
            res.sendStatus(500);
        })
    }
})

// TODO: Cancellazione ?? Qual è la firma?


// ritorno il semplice oggetto router
module.exports = router;