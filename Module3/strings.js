// Creating single-line strings
let firstName = "Niranjan";        //Double quotes can be used to indicate a string
let lastName = 'G C';              //Single quotes can be used to indicate a string
let role = `ixpIntern`;            //Back ticks can also be used to indicate a string. This actually provides additional capabilities to strings.
role = `FTE`;                      //Strings are primitives => they are immutable, however the role variable is created using 'let', hence we can reassign it.


//String concatenation
//1. using the + operator
let fullName = firstName + " "+ lastName;
console.log(fullName);

//2. using template literals (one of the capabilities provided by ` `)
fullName = `${firstName} ${lastName}`;       //template literal: `${any JS expression}` 
console.log(fullName);


//Creating multi-line strings
//1. using \n
let bio = "line 1\nLine 2\nline 3";
console.log(bio);

//2. using backticks
bio = `About abc:
abc is ..............
........ Bye`;               //` ` takes care of inserting \n for us.
console.log(bio);


//Escaping characters
let quote = "niranjan said, 'JS is great.'";
console.log(quote);
//quote = "niranjan said,"JS is great."";     Error
quote = "niranjan said, \"JS is great.\"";
console.log(quote);
quote = `Inside a backtick you can use both ' ' and " " without having the need to escape them.` ;
console.log(quote);
quote = `you can escape the escape as well \\.`;
console.log(quote);


// String properties and methods
// Though String is a primitive, JS uses primitive wrappers to use it as an object

//1. String length
let quoteLength = quote.length;
console.log(`Quote length: ${quoteLength}`);

//2.Changing case
let uppercaseName = fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName = fullName.toLowerCase();
console.log(lowercaseName);

//3. Finding a substring
let idx1 = fullName.indexOf("Nir");
let idx2 = fullName.indexOf("G C");
let idx3 = fullName.indexOf("xyz");       //return -1 if the substring is not in the string
console.log(`Index 1: ${idx1}; Index 2: ${idx2}; Index 3: ${idx3}`);

//4. Does a string contain a substring
let doesContain = fullName.includes("Nir");
console.log(doesContain);
doesContain = fullName.includes("xyz");
console.log(doesContain);
