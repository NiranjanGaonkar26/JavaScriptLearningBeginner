//Equality
// 2 types 1. Strict Equality and 2. Standard Equality

// 1. Strict Equality (===   !==) (both type and the value of the 2 operands should match)
let val1 = (3===3)
console.log(`val1: ${val1}`);

let val2 = (true === false)
console.log(`val2: ${val2}`);

let val3 = ("Hi" !== "hi");
console.log(`val3: ${val3}`);

// === on primitives (passed by value)
let str1 = "Hello";
let str2 = "Hello";
let val4 = (str1 === str2);
console.log(`val4: ${val4}`);

// === on objects (passed by reference)
let obj1 = {};
let obj2 = {};
let val5 = (obj1 === obj2);            // false since obj1 and obj2 are pointing to 2 different blocks of memory;
console.log(`val5: ${val5}`);

let obj3 = obj2;
let val6 = (obj2 === obj3);
console.log(`val6: ${val6}`);


//Strict equality vs Standard equality
let num1Str = '42';
let num1 = 42; 
let val7 = (num1Str == num1);                           //This returns true, because num1 is converted to a string implicitly
let val8 = (num1Str === num1);                          //false because the types do not match
console.log(`val7: ${val7}, val8: ${val8}`);

let x;                 //x is undefined
let y = null;
let val9 = (x == y);                                    //true, because both undefined and null represent an empty value
let val10 = (x === y);                                  //false, because the types are different
console.log(`val9: ${val9}, val10: ${val10}`);

//NOTE: ALWAYS USE === unless you truly understand how to use ==