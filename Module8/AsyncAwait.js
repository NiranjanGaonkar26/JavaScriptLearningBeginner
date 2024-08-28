// The async function declaration declares an async function where the await keyword is permitted within the function body.
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

// await operator: The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.
// await is usually used to unwrap promises by passing a Promise as the expression. Using await pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). 
// if the expression(i.e, promise) passed to the await operator resolves then the next statement inside that async function executes. If the promise is rejected, the await expression throws the rejected value.

// Import Node Filesystem module (the promises version)
import fs from "node:fs/promises";

async function loadData(){                                                      // An async function should return a Promise object (like in the promises.js)
    try{
        const data = await fs.readFile('./data.json', 'utf8');                      //  the await implicitly does that
        console.log("File read 1");
        await fs.readFile('./data.json', 'utf8');
        console.log("File read 2");
        await fs.readFile('./data.json', 'utf8');
        console.log("File read 3");
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete");
    } catch(err){
        console.log("Could not load and parse file");
        throw err;
    }
}

loadData().then(() => console.log("Promise completed"));


// Top level Await: you can execute await outside of an async function if you are using in it in a JS module