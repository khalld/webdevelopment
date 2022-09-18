const http = require("http");
const hostname = '127.0.0.1'

const port = 8081;

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Home Page");
    }
    if(req.url === "/about"){
        res.end("About");
    }
    if (req.url == '/now') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ now: new Date() }));
        res.end();
    }
    
    res.end("<h1>404</h1>");
});

// The http modules create a server that is an EventEmitter instance and
// it has its events, such as request event that is fired when a user make a
// request to our server.


server.on("request", (req, res) => {
    console.log("This is an example of Events combined with HTTP!")
    console.log(`Method: ${req.method} URL ${req.url}`)
    // console.log(res);
})


server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname} on port ${port}`)
})