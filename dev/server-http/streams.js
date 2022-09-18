const {createReadStream} = require("fs");
const stream = createReadStream("./bigfile.txt")
const http = require("http");
const fs = require("fs");

stream.on("data", (result) => {
    console.log("inside data");
    console.log(result);
})

stream.on("error", (err) => {
    console.error(err);
})

http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./bigfile.txt", "utf-8");
        fileStream.on("open", () => {
            fileStream.pipe(res);
        })
        fileStream.on("error", (err) => {res.end(err)})
}).listen(8081)