const http = require("http")

// TODO:

const server = http.createServer((req, res) => {
    console.log("Server listening 8180")
    if(req.url === "/"){
        res.end("Home Page");
    }
    if(req.url === "/about"){
        res.end("About");
    }
    res.end("<h1>About</h1>");
});

server.on("request", (req, res) => {
    res.send("Welcome");
})

server.listen(8180)