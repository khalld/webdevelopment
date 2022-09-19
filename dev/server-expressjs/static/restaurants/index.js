
// require non esiste a livello di front-end!
// const db = require("../../src/config/config.js")

let datas = [];

window.onload = async () => {

    await fetch('http://localhost:8081/api/restaurants/')
        .then((response) => response.json())
        .then((data) => {
            datas = data;
            console.log(data)
        });

    // TODO: differenze tra let e var!!!
    console.log(datas.length)
    if (datas.length > 0) {

        // let block scope variable
        let mainDiv = document.getElementById("main-div");
        mainDiv.removeChild(document.getElementById("loading-p"))

        for (let i = 0; i < datas.length; i++) {
            var p = document.createElement("p")
            p.innerHTML = `<b>Restarant cousine</b>: ${datas[i]['cuisine']}`
            mainDiv.appendChild(p);
        }
    }
}


