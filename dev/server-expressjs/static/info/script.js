
let myForm = document.getElementById("search-by-name")

myForm.addEventListener('submit', async (event) => {
    // NECESSARIO!!
    event.preventDefault()

    const nameToSearch = myForm.elements["name"].value;
    var responseDiv = document.getElementById("response-div")
    responseDiv.innerHTML = "<p>Loading...</p>"

    // TODO: fetch per prendere info
    fetch(`/users/${nameToSearch}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        if(data.length === 0){
            responseDiv.innerHTML = "<p>Nothing founded</p>"
        } else {
            responseDiv.innerHTML = "<p>Something founded! Loading ...</p>"
            let usersList = "";
            for (let i = 0; i < data.length; i++){
                usersList += `<li><a href="/details/${data[i]._id}">${data[i].name}</a></li>`
            }

            responseDiv.innerHTML = "<ul>" + usersList + "</ul>";

        }
    })
    .catch(err => {
        responseDiv.innerHTML = `<p id="error-p">Something wrong happened! ${err}</p>`
        let responseErrorDiv = document.getElementById("error-p")
        responseErrorDiv.style.color = "red";
        responseErrorDiv.style.fontWeight = "bold";
        // c'è anche setAttribute ....

    })

    console.log(nameToSearch);

    console.log(event);


})



// TODO: crea un info dell'utente!


// TODO: fetch per PUT!!!