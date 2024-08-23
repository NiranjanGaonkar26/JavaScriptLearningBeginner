// Undefined: A variable that has not been assigned anything is of type undefined.
let y = "Hi";
console.log(typeof(y));

let x;
console.log(x);
console.log(typeof(x));

// null: set a variable to a purposefully empty value
let z = null;
console.log(z);
console.log(typeof(z));          //This prints out object rather than null, this is beacuse JS is backwards compatible and this is how it was at the first.

