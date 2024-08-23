// Different ways of creating a Date object
//JavaScript Date objects represent a single moment in time in a platform-independent format.

let date1 = new Date("2024-01-01");
console.log(date1);
let date2 = new Date("January 1, 2023");
console.log(date2);
let date3 = new Date("2023-01-01T02:30:04.312-05:00");
console.log(date3);
let date4 = new Date();         //This represents now
console.log(date4);

// Accessing elements from a date using the methods defined for a Date object
console.log(`Year: ${date4.getFullYear()}`);
console.log(`Month (zero-indexed): ${date4.getMonth()}`);
console.log(`Day of the month: ${date4.getDate()}`);
console.log(`Hours: ${date4.getHours()}`);

// How is a Date object stored as in JS
// It is actually stored as number of milliseconds from the epoch(Jan 1 1970 00:00:00)
console.log(`Milliseconds elapsed: ${date4.getTime()}`);
let date5 = new Date(0);    // 0 milliseconds  from the epoch
console.log(date5.toUTCString());      // You will get the output as Jan 1 1970