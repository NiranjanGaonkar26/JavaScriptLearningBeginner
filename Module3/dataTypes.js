//Stack and heap memory storage
//Primitive types vs objects

/* Primitives types are IMMUTABLE and are stored on the stack
Primitives are passed by value

objects are MUTABLE (i.e, their contents can be changed without creating a new object
objects are passed by reference and are stored on the heap*/ 

/*Primitive types                    Objects
1. Boolean                           1. plain objects
2. Number                            2. Functions
3. BigInt                            3. Collection types (Array, Map, Set)
4. String                            4. Dates
5. Symbol                            5. Class instances
6. Null                              6. Errors
7. Undefined                         7. Promises 
*/

let name = "Niranjan";
let upperCaseName = name.toUpperCase();