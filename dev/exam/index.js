const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const usersRouter = require("./src/routes/users");
const env = require("./src/config/config.js");
const axios = require('axios').default;

app.use(express.static('static'));
// allow to use post and body
app.use(express.urlencoded({ extent: false }));
app.use(express.json());

app.use("/user", usersRouter);

// NOTA BENE: Questa porta deve essere un server HTTP, usiamo express per gestirli con i middleware ma altrimenti non funziona!
http.listen(env.port, () => {
    console.log(`Socket.IO server running at http://localhost:${env.port}/`);
});
