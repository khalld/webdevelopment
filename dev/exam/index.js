const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const usersRouter = require("./src/routes/users");
const env = require("./src/config/config.js");

app.use(express.static('static'));
// allow to use post and body
app.use(express.urlencoded({ extent: false }));
app.use(express.json());

app.use("/user", usersRouter);

var users = []

io.on('connection', (socket) => {
    socket.on('setUsername', (data) => {

        // se l'utente esiste ritorna errore
        if (users.indexOf(data) > -1) {
            socket.emit('userExist', null) // non me ne frega un cazzo...
        } else {
            users.push(data)
            socket.emit('userSetted', { username: data });
        }
    })

    // la socket resta in ascolto su message
    socket.on('msg', (msg) => {
        // io emette un messaggio a tutte le socket ..
        io.emit('newmsg', msg);
    });

});

http.listen(env.port, () => {
    console.log(`Socket.IO server running at http://localhost:${env.port}/`);
});
