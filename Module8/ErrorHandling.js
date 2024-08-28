// Error handling with try/catch and promises
// Error handling is a MUST in asynchronous code

// 1. try/catch block: same concept as in Java

import fs from 'node:fs/promises';

try{
    const rawData = await fs.readFile("./data.json");
    const dataObj = JSON.parse(rawData);
} catch(err){                                                               // error which occurs in the try block is caught as the error object in the catch block
    console.log(`Error Name: ${err.name}`);                                 // The error object has 3 properties: name, message, stack
    console.log(`Error Message: ${err.message}`);
}

// 2. error handling with promises

fs.readFile("./data.json")
  .then(rawData => {return JSON.parse(rawData);})              // execute this on successful promise resolution
  .catch(err => {                                              // execute this on failure of promise .catch() is a method of the Promise object
    console.log(`Error Name: ${err.name}`);
    console.log(`Error Message: ${err.message}`);
    });


// throw keyword
// the throw statement throws a user-defined exception. Execution of the current function will stop(the statements after throw won't be executed),
// and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.