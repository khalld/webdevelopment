const { EventEmitter } = require("stream");
const customEmitter = new EventEmitter();


customEmitter.on("request", (name, age) => {
    // res.send("Welcome");
    console.log("HTTP with events handling! Request");
    console.log(name);
    console.log(age);
    customEmitter.emit("response", "OK, everything fine!")
})

customEmitter.on("response", (result) => {
    // res.send("Welcome");
    console.log("HTTP with events handling! Response");
    console.log(result);
})

customEmitter.emit("request", "Pluto", 11)