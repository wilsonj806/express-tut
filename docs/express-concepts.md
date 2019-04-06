# Express Basic Concepts

## Basic Syntax

This doc assumes knowledge of NPM and how to import modules into your JavaScript files.

To get started, we need to import in Express and then initialize it somewhere.
```js
const express = require('express');

// Initialize Express
const app = express();

// Create endpoints/ route handlers

app.get('/', (res, req) => res.send('Hello'));

// listen on a port, this is pretty much like Node syntax iirc
app.listen(5000);
```

## Basic Route Handling

Express exposes several convenient methods for handling requests/ routes.
  ```js
    app.get('/', (req, res) => {
      // Fetch data from a database
      // Load pages
      // Return JSON
      // Express gives full access to both the request object and response object
    })
  ```

- `app.get()`
- `app.post()`
- `app.put()`
- `app.delete()`
- etc

The Request object represents any HTTP request object for stuff like, params, query strings, url parts, data sent in the body of the request and such.

You're also allowed to create things called Middleware which can change or add things to the Request object.

The Response object responds the Response object, which is the object that the server sends back once the request has been parsed.
  - e.g:
    - return JSON data
    - render a template

Said middleware can be dumped into different files as Express has a router built in.

We can also parse any incoming data from the Request object with the built in Body parser.

## Express Middleware

Middleware functions are functions that have accesss to the request and response object. Express has built in middleware but middleware also comes from third party packages as well as custom middleware.

Middleware lets us do the below:
- Execute any code
- Make changes to the request/ response object
- End the response cycle
- Call the next middleware function in the stack
- Other stuff

Middleware more or less can be viewed as a "stack" of functions that calls the next function in the stack once the current one completes.

It looks kind of like the below:

```js
(req, res, nextFn) => {
  doStuff();
  // execute the next function on the stack
  nextFn();
}
```