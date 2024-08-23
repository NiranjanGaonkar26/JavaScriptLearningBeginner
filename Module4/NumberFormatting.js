// Number Formatting use cases:
// 1. Rounding a number to an integer value
// 2. Limiting the number of decimal places to display
// 3. Output a number using a format specific to a certain geographic area
// 4. Outputting a number for a specific currency format for an area

// Locale: In computing, a locale is a set of parameters that defines the user's language, region and any special variant preferences that the user wants to see in their user interface.
// Usually a locale identifier consists of at least a language code and a country/region code. Locale is an important aspect of i18n (internationalization).

// Locale code examples: en-US, hi-IN (language-region)


// 1. Rounding a number to an integer value
let num1 = 5.6184423;
console.log(`Round: ${Math.round(num1)}`);
console.log(`Ceil: ${Math.ceil(num1)}`);
console.log(`Floor: ${Math.floor(num1)}`);

// 2. Limiting the number of decimal places to display
let fixed = num1.toFixed(3);
console.log(`Fixed Type: ${typeof(fixed)}\tFixed Value: ${fixed}`);
console.log();

// 3. Display in Locale specific format
let num2 = 100_000_000;
console.log(`India: ${num2.toLocaleString("hi-IN")}`);
console.log(`USA: ${num2.toLocaleString("en-US")}`);
console.log(`Greece: ${num2.toLocaleString("el-EL")}`);
console.log();

// 4. Outputting a number for a specific currency format for an area
let salary = 100000;
let monthlySalary = salary/12;
monthlySalary = monthlySalary.toFixed(2);
console.log(monthlySalary);

let usdFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
console.log(`Monthly salary in USD: ${usdFormatter.format(monthlySalary)}`);

let eurFormatter = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'});
console.log(`Monthly salary in Euros: ${eurFormatter.format(monthlySalary)}`);

let yenFormatter = new Intl.NumberFormat('ja-JA', {style: 'currency', currency: 'JPY'});
console.log(`Monthly salary in Yen: ${yenFormatter.format(monthlySalary)}`);

let rupeeFormatter = new Intl.NumberFormat('hi-IN', {style: 'currency', currency: 'INR'});
console.log(`Monthly salary in INR: ${rupeeFormatter.format(monthlySalary)}`);