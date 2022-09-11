const EventEmitter = require("events");

// custom event emitter
const customEmitter = new EventEmitter();

// listen specific event
customEmitter.on("response", (name, age) => {
    console.log("data received " + name + " " + age);
})

// can have multiple callbacks for the same event
customEmitter.on("response", () => {
    console.log("other logic")
});

// the order MATTER

// emit specific event

customEmitter.emit("response", "Mario", 35);