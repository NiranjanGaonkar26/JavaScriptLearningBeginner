const obj = {
    firstName: "David",
    lastName: "Tucker"
};
console.log(obj);

// Creating a Map
const map1 = new Map();                         // Create a map using the constructor
map1.set("firstName", "David");                 //set(): Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
map1.set("lastName", "Tucker");
console.log(map1);

// A map is a collection of key-value pairs similar to a JS object. Then what is the difference between a map and a map?
// A map allows the use of non-string keys
arrKey = [];
map1.set(new Date().getTime(), "Number as a Key");
map1.set([], "Array as a Key");
map1.set(arrKey, "Array as a key");
map1.set(() => "Hi", "Function as a key");
console.log(map1);

// Checking the size of the map
console.log(`Map1 size: ${map1.size}`);


// Accessing the values
console.log(map1.get("lastName"));         //get(key) returns the value corresponding to the key
console.log(map1.get([]));                 // this returns undefined though there is a [] key. Because an array is a object in JS => the same refernce needs to be provided.
console.log(map1.get(arrKey));             // this returns the expected output.

// Deleting a value
map1.delete("lastName");           // deletes the item corresponding the key specified
console.log(map1);             


//Sets
//Creating a set
const set1 = new Set();           //Create a set using the constructor
set1.add("David");                //add() - Appends a new element with a specified value to the end of the Set.
console.log(set1);

// Checking the set size
console.log(`Set size: ${set1.size}`);

// Trying to add the "same" value
set1.add("David");
console.log(set1);

// Adding in a complex type item to a set 
const team1 = new Set();
const emp1 = {
    firstName: "David",
    lastName: "Tucker"
};
team1.add(emp1)

// Detecting if a set has an object
console.log(`Does team1 have emp1: ${team1.has(emp1)}`);

// Deleting a value from a set
team1.delete(emp1);
console.log(team1);

// Remove all values from the set
team1.clear();
