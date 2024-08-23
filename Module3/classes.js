// Features supported by classes in JS
// 1. Constructors
// 2. Static initialization blocks
// 3. Public methods and fields
// 4. Static methods and fields
// 5. Private methods and fields
// 6. Inheritance (prototypal inheritance which is a core part of JS)

class CalendarDay
{
    //private fields
    #month;
    #day;
    #year;

    //constructor
    constructor(month, day, year){
        this.month = month;
        this.day = day;
        this.year = year;
    }

    //public method
    toString(){
        return `${this.year}-${this.month+1}-${this.day}`;
    }
}

let day1 = new CalendarDay(7, 23, 2024);
console.log(day1.toString());