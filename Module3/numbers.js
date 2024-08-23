// Defining big and small numbers
let num1 = 1560000000000000000000000000;
let num2 = -0.00000000000000000021;
console.log(num1+"\n"+num2);

//Creating numbers with the e-notation
let num3 = 1.2e+10;
console.log(num3);

//Maximum and Minimum values with the Number type
console.log(`Minimum Value: ${Number.MIN_VALUE}`);
console.log(`Minimum Safe Integer: ${Number.MIN_SAFE_INTEGER}`);
console.log(`Maximum Value: ${Number.MAX_VALUE}`);
console.log(`Maximum Safe Integer: ${Number.MAX_SAFE_INTEGER}`);

//Creating BigInt's
//BigInt values represent numeric values that are too large to be represented by the Number primitive. It is created by appending n to the end of an integer literal, or by calling BigInt() function.
//Note: ALWAYS use Number (unless BigInt is specifically required)

let num4 = 1_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000n;
let num5 = 1n;
console.log(num4+"\n"+num5);
