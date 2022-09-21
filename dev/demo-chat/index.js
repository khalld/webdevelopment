const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

const express = require('express');
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.use(express.static('static'));

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

// NOTA BENE: Questa porta deve essere un server HTTP, usiamo express per gestirli con i middleware ma altrimenti non funziona!
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
