const url1 = 'https://reqres.in/api/users?page=1';

// Fetch is a better alternative to use XMLHttpRequest. Può essere usata da
// altre tecnologie come i Service Workers. 

// The simplest use of fetch() takes one argument, the path to the resource you want to fetch, and returns a promise containing the response (a Response object).
fetch(url1)
    .then(resp => resp.json())
    .then(data => console.log(data))

let myPost = (url) => {
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({"name": "morpheus","job": "leader"})
    }).then(resp => {
        if (resp.ok) {
            return resp.json()
        }
        throw new Error('Something wrong happened at ' + url + ' status: ' + resp.status)
    }).then(data => {
        console.log('Response of ' + url + " :")
        console.log(data);
    }).catch((error) => {
        console.error("Something wrong happened!", error)
    })
}
// --- example of post

const url2 = 'https://reqres.in/api/users';

let obj1 = {"name": "morpheus","job": "leader"}

myPost(url2,obj1);


// --- examples of catch (post that return an error)


const url4 = 'https://reqres.in/api/register'

myPost(url4);


// --- example of catch (get that return error)

const url3 = 'https://reqres.in/api/unknown/23'

fetch(url3)
    .then(resp => {
        if(resp.ok){
            return resp.json();
        }
        throw new Error('Something wrong happened! Status: ' + resp.status)
    })
    .then(data => {
        console.log('GET success!', data)
    })
    .catch((error) => {
        console.error('Error:' , error)
    })
