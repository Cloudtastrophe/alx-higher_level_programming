#!/usr/bin/node
// The above line is called a shebang. It tells the operating system to use the Node.js interpreter to run this script.

const fs = require('fs');
// Import the built-in Node.js 'fs' (file system) module to enable file system operations.

fs.readFile(process.argv[2], 'utf8', function (error, content) {
  // Use the 'fs.readFile' method to read the contents of a file.
  // 'process.argv[2]' accesses the third command-line argument, which should be the path to the file.
  // 'utf8' specifies the character encoding to use when reading the file.
  // The function provided as the third argument is a callback that gets executed when the file read operation is complete.

  if (error) {
    // If an error occurs during the file read operation, the 'error' parameter will contain an error object.
    console.error('Error reading the file:', error);
    // Log the error message to the console.

  } else {
    // If the file is read successfully, the 'content' parameter will contain the contents of the file as a string.
    console.log(content);
    // Log the contents of the file to the console.
  }
});
