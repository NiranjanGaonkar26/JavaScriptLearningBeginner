// Scenario: Engineering and HR folks meet in building 1
//           Marketing folks meet in building 2
//           Everyone else meet in building 3


let employee = {
    firstName: "Abc",
    lastName: "Xyz",
    startDate: new Date(2016, 1, 3),
    numYearsService: 7,
    isActive: true,
    department: "Engineering",
    title: "VP Engineering"
};

switch(employee.department)
{
    case "Engineering":
    case "HR": 
        console.log("Meet in building 1");
        break;
    case "Marketing": 
        console.log("Meet in building 2");
        break;
    default: console.log("Meet in building 3");
}