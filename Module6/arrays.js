// Creating arrays
let arr1 = [];                                  //empty array
let arr2 = ["Item1", "Item2"];                  //initializing the array while creating it.
let arr3 = new Array();                         //Creating a array using a constructor
let arr4 = new Array("Item1", "Item2");         //Populating an array using the constructor itself.

console.log(arr1+" "+typeof(arr1));
console.log(arr2+" "+typeof(arr2));
console.log(arr3+" "+typeof(arr3));
console.log(arr4+" "+typeof(arr4));

// Accessing values
let names = ["David", "Kim", "Steve", "Katie"];
console.log(`Names Length: ${names.length}`);
console.log(`First Name: ${names[0]}`);
console.log(`Second Name: ${names[1]}`);
console.log(`Tenth Name: ${names[10]}`);            //In JS this doesn't cause any error, instead it simply returns undefined.

// Searching for values
const includesKim = names.includes("Kim");             //Returns true, if the search item is present in the array
const includesRamsay = names.includes("Ramsay");       //Returns false otherwise
console.log(`Includes Kim: ${includesKim}`);
console.log(`Includes Ramsay: ${includesRamsay}`);

const kimIndex = names.indexOf("Kim");                  //Returns the index of the 1st occurence of the element in the array
const RamsayIndex = names.indexOf("Ramsay");            //Returns -1 if the element is not present in the array
console.log(`Kim index: ${kimIndex}`);
console.log(`Ramsay Index: ${RamsayIndex}`);

// Adding a value
// at the end - push() method
names.push("Shannon");
console.log(names);

// at the beginning - unshift() method
names.unshift("Sarah");
console.log(names);

// at a specific index - splice() method: The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
names.splice(1, 0, "William");
console.log(names);


// Removing a value
// at the beginning - shift() method
names.shift();
console.log(names);

// at a specific index - splice() method
names.splice(4, 2);
console.log(names);

// Arrays and objects:

const obj1 = {
    firstName: "Niranjan",
    lastName: "G C"
};

const obj2 = {
    firstName: "abc",
    lastName: "xyz"
};

const obj3 = {
    firstName: "Niranjan",
    lastName: "G C"
};

const employeeArray = [obj1, obj2];
console.log(employeeArray);
console.log(`Is identical object in array: ${employeeArray.includes(obj3)}`);          // returns false -> though obj1 and obj3 are indentical, they point to different blocks of memory
console.log(`Is same object in array: ${employeeArray.includes(obj1)}`);               // returns true.