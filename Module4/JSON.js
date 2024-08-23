// VERY IMPORTANT
// JSON allows to convert a JS object into a string.
// JSON has a lot of applications: This string can be passed between applications, stored on the local file system, loaded at runtime etc

// JSON characteristics
// 1. It is very similar to the object literal syntax
// 2. Requires double quotes for property names. (this is not the case in an object literal syntax)
// 3. Requires any string values to be in double quotes.
// 4. Won't include undefined properties or functions.
// 5. JS has methods for converting an object to JSON and from JSON to object

// An example object
let employee = {
    firstName: "abc",
    lastName: "xyz",
    birthdate: new Date("January 1, 1991"),
    numYearsEmployment: 7,
    title: "CEO",
    isActive: true,
    salary: 100000
};

// Convert an object to JSON string using the JSON.stringify() method.
let employeeJsonStr = JSON.stringify(employee);      //takes in an object and returns the corresponding JSON string.  
console.log(employeeJsonStr);
console.log(typeof(employeeJsonStr));
console.log();

employeeJsonStr = JSON.stringify(employee, null, 2);        // 2 just adds 2 spaces per indentation level, making it easy to read the JSON string
console.log(employeeJsonStr);
console.log();

//Convert a JSON string into an object using JSON.parse() method
let newEmployee = JSON.parse(employeeJsonStr);     //takes in a JSON string and returns the corresponding object.
console.log(newEmployee);
console.log(typeof(newEmployee));
console.log();

// Writing JSON directly
let jsonString = `{
"firstName": "abc",
"lastName": "xyz"
}` ; 

let obj = JSON.parse(jsonString);
console.log(obj);
console.log(typeof(obj));
console.log();

// Trying to convert incorrect JSON string into an object
let notJsonStr = "Hello";
console.log(JSON.parse(notJsonStr));      //Error