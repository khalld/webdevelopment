// Middlewares are functions that execute during the request to the server.
// Each middleware function has access to request and response objects (and more stuff).
// In express everything is a middleware, it is the heart of express.
// req => middleware => response
const logger = (request, response, next) => {
    // log the request
    console.log("-- Inside logger middleware --")
    console.log(request.method, request.url);
    // go to the next middleware
    next();
}

module.exports = { logger }