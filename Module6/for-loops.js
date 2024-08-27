// 3 types of for loop in JS
// 1. Standard for loop
// 2. for...of loop
// 3. for in loop


// Array of Data
const names = ["David", "Kim", "Steve", "Katie"];

// Use of standard for loop
for(let i=0; i<names.length; i++){
    console.log(`Name: ${names[i]}`);
}

console.log("--------------");

// Use of for...of loop
for(let name of names){
    console.log(`Name: ${name}`);
}

console.log("--------------");

// Use of for...in loop
// the for...in loop iterates over all the properties of an object
let employee = {
    "id": 0,
    "email": "lamb_mcclain@globomantics.com",
    "firstName": "Lamb",
    "lastName": "Mcclain",
    "dateBirth": "1988-08-01",
    "startDate": "2001-05-22",
    "isActive": false
};

for(let property in employee){
    console.log(`${property}: ${employee[property]}`);
}

console.log(`
-------------------
`);

import employees from './data.json' assert {type: 'json'}

for(employee of employees){
    console.log(`{`);
    for(let property in employee){
        console.log(`${property}: ${employee[property]}`);
    }
    console.log(`}`);
    console.log(`--`)
}