const http = require("http")

// TODO:

const server = http.createServer();

server.on("request", (req, res) => {

    res.send("Welcome");
})

server.listen(8180)