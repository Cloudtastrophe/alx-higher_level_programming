#!/usr/bin/node
// The above line is called a shebang. It tells the operating system to use the Node.js interpreter to run this script.

const request = require('request');
// Import the 'request' module, which is used to make HTTP requests.

request.get(process.argv[2])
// Use the 'request.get' method to perform an HTTP GET request to the URL specified by the third command-line argument (process.argv[2]).

  .on('response', function (response) {
    // Set up an event listener for the 'response' event emitted by the HTTP request.
    // This event listener is called when a response is received from the server.

    console.log(`code: ${response.statusCode}`);
    // Log the HTTP status code of the response to the console.
  });
