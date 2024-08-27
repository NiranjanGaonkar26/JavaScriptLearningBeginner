import employees from './data.json' assert {type: 'json'}

// Listing the names of only the 1st 5 employees: Demonstrating the use of break
for(let i = 0; i < employees.length; i++)
{
    if(i === 5)
        break;

    console.log(`Name: ${employees[i].firstName} ${employees[i].lastName}`);
}

console.log('---------');

// Displaying only the names of the employees whose firstName starts with a 'B': Demonstrating the use of continue
for(let employee of employees){
    if(!employee.firstName.startsWith('B')){
        continue;
    }
    console.log(`Name: ${employee.firstName} ${employee.lastName}`);
}
console.log(`
---------
`);
// Nested loop control flow - use of a label
employeeOuterLoop: for(let emp of employees){
    console.log("-----");
    for(let property in emp){
        if(property === "dateBirth"){
            continue employeeOuterLoop;
        }
        console.log(`${property}: ${emp[property]}`);
    }
}