// function declaration 3 ways
// 1. Standard function declaration
// 2. Function Expressions
// 3. Arrow Functions

// 1. Standard function declaration
function functionName(parameter1, parameter2)
{
    //body of the function
    //return only_one_thing                                //In python you can return multiple values
}


// 2. function expressions
// A function expression is very similar to, and has almost the same syntax as, a function declaration. 
// The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
// Function expressions in JavaScript are not hoisted, unlike function declarations. You CANNOT USE FUNCTION EXPRESSIONS BEFORE YOU CREATE THEM:
const getRectArea = function (width, height) {
    return width * height;
  };
  
console.log(getRectArea(3, 4));
// Expected output: 12


// 3. Arrow Functions
const isDavid = function (input) {            // this is a function expression
    return (input === "David");
}
//console.log(isDavid("David"));

const isDavid1 = (input) => {                // Multiline arrow function
    console.log("Hi");
    return (input === "David"); 
}
//console.log(isDavid1("David"));

const printDavid = (input) => console.log(input);           //Single line arrow function with a parameter and no return value             
//console.log(printDavid("David"));

const isDavid3 = (input) => input === "David";          //If the return statement is the only statement, then no need of mentioning return.
//console.log(isDavid3("David"));

const lineBreak = () => console.log("Print something");                  //Single line arrow function with no parameters
lineBreak();

const logArray = (item, index) => console.log(`${index}: ${item}`);
//console.log(logArray("Hi", 2));


// Higher Order Functions
// In JS, a higher-order function takes one or more parameters and returns another function as its return value
