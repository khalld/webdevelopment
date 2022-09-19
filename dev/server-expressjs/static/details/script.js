const pathname = window.location.pathname;
const id = pathname.substring(pathname.lastIndexOf('/') + 1)
var spanId = document.getElementById('userid')
spanId.innerHTML = id;
spanId.style.color = 'red';
var respDiv = document.getElementById("response-div")
var myForm = document.getElementById("edit-user-info")
var usernameInput = myForm.elements['username'];
var passwordInput = myForm.elements['password'];
var submitBtn = document.getElementById("submit-btn");

if (usernameInput.value !== null || usernameInput.value !== "" && passwordInput.value !== null || passwordInput.value !== "" ){
    submitBtn.disabled = false;
}


usernameInput.addEventListener('input', (event) => {
    event.preventDefault();

    if(myForm.elements['username'].value === '' || myForm.elements['username'].length == 0){
        document.getElementById("submit-btn").disabled = true;
    } else {
        document.getElementById("submit-btn").disabled = false;
    }
})


passwordInput.addEventListener('input', (event) => {
    event.preventDefault();

    if(myForm.elements['password'].value === '' || myForm.elements['password'].length == 0){
        submitBtn.disabled = true;
    }else {
        document.getElementById("submit-btn").disabled = false;
    }
})


myForm.addEventListener('submit', async(event) => {
    event.preventDefault()

    // RICORDA!! È necessario rifare la selezione per poter prendere tutti gli aggiornamenti
    usernameInput = myForm.elements['username'];
    passwordInput = myForm.elements['password'];

    fetch(`/users/${id}/update`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name: usernameInput.value,
            password: passwordInput.value
        })
    }).then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error("error " + error);
    })
    
})


fetch(`/users/${id}/details`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
    },
}).then(resp => resp.json())
.then(data => {
    console.log(data)

    document.getElementsByClassName("header")[0].innerHTML = data._id;
    document.getElementsByClassName("sx")[0].innerHTML = "Useful info:";
    console.log(document.getElementsByClassName("centro"))
    document.getElementsByClassName("centro")[0].value = data.name;
    document.getElementsByClassName("dx")[0].value = data.password;
    document.getElementsByClassName("footer")[0].innerHTML = "Element founded on MongoDb!";
})
.catch(err => {
    respDiv.innerHTML = "Something wrong happened!!"
    spanId.innerHTML = "error"
})
