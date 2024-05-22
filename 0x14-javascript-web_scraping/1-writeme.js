#!/usr/bin/node
// The above line is called a shebang. It tells the operating system to use the Node.js interpreter to run this script.

const fs = require('fs');
// Import the built-in Node.js 'fs' (file system) module to enable file system operations.

fs.writeFile(process.argv[2], process.argv[3], 'utf8', error => {
  // Use the 'fs.writeFile' method to write data to a file.
  // 'process.argv[2]' accesses the third command-line argument, which should be the path to the file.
  // 'process.argv[3]' accesses the fourth command-line argument, which is the data to be written to the file.
  // 'utf8' specifies the character encoding to use when writing the file.
  // The function provided as the fourth argument is a callback that gets executed when the file write operation is complete.

  if (error) {
    // If an error occurs during the write operation, the 'error' parameter will contain an error object.
    console.error(error);
    // Log the error message to the console.
  }
});
