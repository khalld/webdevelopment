const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

const express = require('express');

var users = []

app.use(express.static('static'));
// allow to use post and body
app.use(express.urlencoded({extent: false}));
app.use(express.json());

io.on('connection', (socket) => {
  // la socket del server è in ascolto su setUsername..
  socket.on('setUsername', (data) => {
    
    // se l'utente esiste ritorna errore
    if (users.indexOf(data) > -1){
      socket.emit('userExist', null) // non me ne frega un cazzo...
    } else {
      users.push(data)
      socket.emit('userSetted', {username: data});
    }
  })

  // la socket resta in ascolto su message
  socket.on('msg', (msg) => {
    // io emette un messaggio a tutte le socket ..
    io.emit('newmsg', msg);
  });

});


// NOTA BENE: Questa porta deve essere un server HTTP, usiamo express per gestirli con i middleware ma altrimenti non funziona!
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
