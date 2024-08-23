let date1 = new Date("2024-08-23T16:56:59+05:30");
console.log(`Date: ${date1}`);

// Display just the calendar date
console.log(`Calendar date: ${date1.toDateString()}`);
console.log();

// Display a locale specific date string
console.log(`Calendar date Locale en-US: ${date1.toLocaleDateString("en-US")}`);
console.log(`Calendar date Locale hi-IN: ${date1.toLocaleDateString("hi-IN")}`);
console.log(`Calendar date Locale ja-JP: ${date1.toLocaleDateString("ja-JP")}`);
console.log();

// Display just the time
console.log(`Time: ${date1.toTimeString()}`);

// Display a locale specific time string
console.log(`Time Locale en-US: ${date1.toLocaleTimeString("en-US")}`);
console.log(`Time Locale hi-IN: ${date1.toLocaleTimeString("hi-IN")}`);
console.log(`Time Locale ja-JP: ${date1.toLocaleTimeString("ja-JP")}`);
console.log();

// Custom date string, for more details refer Intl.DateTimeFormat() in the MDN web docs
let options = {
    dateStyle: "short",
    timeStyle: "short"
};
console.log(`Custom Date: ${date1.toLocaleString('en-US', options)}`);
console.log(`Custom Date: ${date1.toLocaleString('hi-IN', options)}`);
console.log(`Custom Date: ${date1.toLocaleString('ar-KW', options)}`);

