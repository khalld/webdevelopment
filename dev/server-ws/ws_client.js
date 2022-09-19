
const Ws = require('ws')

const ws = new Ws.WebSocket('ws://localhost:8080');

ws.on('open', function open() {
  ws.send('something from client!');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});

ws.on('error', (error) => {
    console.log(error)
})