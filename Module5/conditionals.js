let employee = {
    firstName: "Abc",
    lastName: "Xyz",
    startDate: new Date(2016, 1, 3),
    numYearsService: 7,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering"
};

let badgeColor;

if(employee["numYearsService"] < 5){
    employee["badgeColor"] = "blue";
}
else if(employee.numYearsService < 10){
    employee.badgeColor = "Yellow";
}
else if(employee.numYearsService < 15){
    employee.badgeColor = "Red";
}
else if(employee.numYearsService < 20){
    employee.badgeColor = "Purple";
}
else{
    employee.badgeColor = "Silver";
}

console.log(`Years: ${employee.numYearsService} Badge Color: ${employee["badgeColor"]}`);

//Evaluating multiple conditions for truthyness in all conditions
if(employee.numYearsService>5 && employee.department === "Engineering"){
    console.log("Employee meets criteria");
}

if(employee.numYearsService>10 || employee.title.startsWith("VP")){
    console.log("Employee meets criteria");
}

// Evaluating for a condition to NOT be true
if(!employee.isActive){
    console.log("The employee has retired");
}
else{
    console.log("The employee is active");
}

// Using the ternary operator
employee.annualBonus = (employee.numYearsService > 10) ? 1000 : 500;
console.log(employee.annualBonus);


