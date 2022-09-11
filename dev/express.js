const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
})

app.listen(8080, () => {
    console.log("Server listen on port 8080");
})