// Though JS is dynamically typed, we should know type conversions
// Possible use cases for Type conversion
// 1. Joining a non-string value with a string
// 2. Formatting a number (into a string) to be displayed as currency
// 3. Formatting an object, such as Date, for display
// 4. Exporting an object to a portable format
// 5. Evaluating an expression to a boolean value

//Using the typeof function
let strValue = "Hi";
console.log(typeof(strValue));
let numValue = 1;
console.log(typeof(numValue));
let boolValue = true;
console.log(typeof(boolValue));
console.log();

// 1. Joining a non-string value with a string
let age = 10;
let firstName = "abc";
let description = `${firstName} is ${age} years old`;          //Here age is first converted to a string and then concatinated with other strings
console.log(description);

// Converting a string to a number
let ageString = "15";
let ageNum = Number(ageString);      //Explicitly converting a string to a number using the Number() function.
console.log(typeof(ageNum));
let ageNewNum = new Number(ageString);      //DON'T DO THIS for type conversion.
console.log(typeof(ageNewNum));         //Because new Number() returns an "object" type

let ageString2 = "Fifteen";
let ageNum2 = Number(ageString2);          //Cannot actually parse the string "Fifteen" into a Number
console.log(typeof(ageNum2));              // so this will output NaN i.e, Not a Number
console.log(`"Fifteen" is NaN: ${isNaN(ageNum2)}`);
console.log();

// Converting a value to a boolean
let num1 = 55;
let num2 = 0;
let str1 = "Hello";
let str2;
let str3 = null;

let bool1 = Boolean(num1);           //Any non 0 number is true
let bool2 = Boolean(num2);           //0 is false
let bool3 = Boolean(str1);           //Any string is true
let bool4 = Boolean(str2);           //undefined is false
let bool5 = Boolean(str3);           //null is false

console.log(`bool1: ${bool1}\tbool2: ${bool2}\tbool3: ${bool3}\tbool4: ${bool4}\tbool5: ${bool5}\n`);

//Converting a boolean to a string
let bool6 = true;
let str4 = String(bool6);
console.log(`${str4}`);











