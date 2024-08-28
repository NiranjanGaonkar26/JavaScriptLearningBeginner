// Synchronous vs Asynchronous programming

// Synchronous execution: code which executes the instant it runs eg: defining a variable 
// Asynchronous execution: code which may need to perform some other task and report back before it can execute it's intended operation
// Asynchronous code use case examples:
//      1. Asking for user input
//      2. Calling an API
//      3. Reading and writing files to the filesystem
//      4. Uploading and downloading files
//      5. interacting with a database
//      6. Interacting with an external service

// 3 primary ways to deal with asynchronous code in JS
// 1. callbacks
// 2. promises
// 3. Async await

// 1. callbacks:
import fs from 'node:fs';

const fileWriteCompleted = () => {               //This is a normal function expression which we are going to use as a callback function
    console.log("File written");
};

const data = JSON.stringify({});
fs.writeFile("./data.json", data, fileWriteCompleted);          //This says execute the callback function (passed in as the 3rd argument) once the data is written to the file.


// 2. promises: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// With promises you can write logic which gets executed when the promise is fulfilled or rejected (Rejection happens when an error occurs during asynchronous execution)
// one advantage with promises is that you can chain multiple promises together.
import fs from 'node:fs/promises';

fs.writeFile("./file1.json", data).then(() => {console.log("File Written")});        // the code in the then() represents the promise

// 3. Async Await - This is what is primarily used now
// This method uses promises behind the scene. It is really just a different syntax for working with promises
// use of await equivalent to the promise example above is as follows

await fs.writeFile("./file1.json", data);       // the await keyword waits for the underlying promise to resolve 
console.log("File Written");                    //  and then proceeds to this line