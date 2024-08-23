// 2 ways to create JS object 
// 1. Create an Object with an object literal i.e, {} (preferred)
let obj1 = {};

// 2. Create an Object using a constructor (using the new keyword more specifically new Object())
let obj2 = new Object();


// Populate properties of an object
// Method 1: using . operator
obj1.firstName = "Niranjan";
obj1.lastName = "G C";
obj1.isActive = true;
obj1.startDate = new Date("2022-01-22");
console.log(obj1);
console.log();

// Method 2: populating an object on creation with the object literal syntax
let obj3 = {
    firstName: "Niranjan",
    lastName: "G C",
    isActive: true,
    startDate: new Date("2022-01-22")
}                                                               //Note: all property names are string literals
console.log(obj3);
console.log();

// Accessing properties from an object
console.log(`First Name: ${obj3.firstName}`);           //access an object's property using either the . operator or
console.log(`Last Name: ${obj3["lastName"]}`);          //using the []
console.log();

// Deleting properties from an object
delete obj3.firstName;
console.log(obj3);
console.log();

// Accessing non-existant properties from an object
console.log(`Non-existent value: ${obj3.middleName}`);           // It outputs undefined, rather than throwing an error. This is only the case with objects.
console.log();


// Objects are passed by reference, not value
// An object varaible holds the reference to some block of memory
let obj4 = obj3;
obj4.lastName = "Gaonkar";
console.log(`Last Name (obj3): ${obj3.lastName}`);         // The output will be Gaonkar, instead of G C,
                                                           // Since objects are passed by reference, both obj3 and obj4 point to the same object in the memory