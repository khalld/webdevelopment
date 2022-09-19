const form = document.getElementById("register");
var canRegister = false;

// Esempio di due API dipendenti l'una dall'altro
// per registrare un utente è necessaio, prima, controllare a db l'esistenza di un utente con lo stesso nome
// e dopo registrarlo, se possibile! Eventualmente la richiesta dovrà essere bloccata!
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = form.elements["username"].value;
    const password = form.elements["password"].value;

    try {
        const response1 = await fetch(`/users/${username}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        // .then(response => response.json())
        // .then(data => {
        //     if(data.length > 0){
        //         // non ha senso mettere tutta la fetch dentro un try/catch perché tanto c'è l'istruzione di sotto che fa il catch !
        //         throw "Cannot do!";
        //     }
        //     canRegistr = true;
        //     console.log(data.length)
        // })
        // .then()
        // .catch(err => alert(err))

        const data1 = await response1.json();

        if (data1.length === 0) {
            const response2 = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: username,
                    password: password,
                }),
            });
            // .then(response => response.json())
            // .then(data => {
            //     console.log(`Data: ${data}`)
            // })
            // .catch(err => console.log("Something wrong happened!"))
            if (response2.status === 204) {
                alert("Utente registrato correttamente!");
                // The problem might not lie with the backend, but with the frontend. If you are using AJAX to send the POST request, it is specifically designed to not change your url.
                // Use window.location.href after AJAX's request has completed (in the .done()) to update the URL with the desired path, or use JQuery: $('body').replaceWith(data) when you receive the HTML back from the request.
                window.location.href = "/login";
            }
        } else {
            throw "Cannot do! User already exist!";
        }
    } catch (error) {
        alert(error);
    }
});
