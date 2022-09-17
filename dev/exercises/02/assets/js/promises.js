// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => { // (*)
//     results.forEach((result, num) => {
//         if (result.status == "fulfilled") {
//             alert(`${urls[num]}: ${result.value.status}`);
//         }
//         if (result.status == "rejected") {
//             alert(`${urls[num]}: ${result.reason}`);
//         }
//     });
// });

// --------- example resolve / reject

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
// });

//   // resolve runs the first function in .then
// promise.then(
//   result => alert(result), // shows "done!" after 1 second
//   error => alert(error) // doesn't run
// );

// let promiseErr = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

//   // reject runs the second function in .then
// promiseErr.then(
//     result => alert(result), // doesn't run
//     error => alert(error) // shows "Error: Whoops!" after 1 second
// );

// ------------- example async await

async function hello() { return "Hello" };

async function hello2(){
    return greeting = await Promise.resolve("Ciao bambolo!")
}

hello().then((data) => {console.log("Returns: " + data)});

hello2().then((data) => console.log("Returns: " + data))