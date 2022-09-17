// ---- Examples of HTTP Requests -----

// Ajax traditional way to make asynchronous HTTP Request

const xhr = new XMLHttpRequest();

const url1 = 'https://reqres.in/api/users?page=1';

// ----------------- Esempio di GET --------------
xhr.open("GET", url1);

xhr.onreadystatechange = function(e){
    if (this.readyState == 4 && this.status == 200){
        console.log(xhr.responseText);
    }
}

xhr.send();

// ----------------- Esempio di POST --------------

let postObj = {
    "name": "morpheus",
    "job": "leader"
}

const url2 = 'https://reqres.in/api/users'

let postJson = JSON.stringify(postObj);

xhr.open('POST', url2, true)
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
xhr.send(postJson);

xhr.onload = function() {
    if(xhr.status == 201){
        console.log("Post successfully created!")
    }
}