// Import Sample Data
import employees from './data.json' assert { type: 'json' }

import createPrompt from 'prompt-sync';
let prompt = createPrompt();

function getInput(promptText, validator, transformer){
  let value = prompt(promptText);
  if(validator && !validator(value)){
    console.error(`--Invalid Input!`)
    return getInput(promptText, validator, transformer);
  }
  if(transformer){
    return transformer(value);
  }
  return value;
}

// Transfomer functions --------------------------------
const transformerBooleanValue = (input) => {
  return (input === "yes");
}

// Validator functions ------------------------------
const isStringInputValid = function(input){             // This is a function expression
  return (input)? true : false;
}

const isBooleanInputValid = function(input){
  return (input == "yes" || input == "no");
}

const isStartYearValid = function(input){
  let numVal = Number(input);
  if(!Number.isInteger(numVal) || numVal < 1990 || numVal > 2024){
    return false;
  }
  return true;
}

const isStartMonthValid = function(input){
  let numValue = Number(input);
  if(!Number.isInteger(numValue) || numValue < 1 || numValue > 12){
    return false;
  }
  return true;
}

const isStartDayValid = function(input){
  let numValue = Number(input);
  if(!Number.isInteger(numValue) || numValue < 1 || numValue > 31){
    return false;
  }
  return true;
}
// Application commands functions -------------------------------------
function listEmployees(){
  console.log(`Employee List ----------------------------`);
    console.log('');

    for (let emp of employees) {
      for (let property in emp) {
        console.log(`${property}: ${emp[property]}`);
      }
      console.log('');
      prompt('Press enter to continue...');
    }
    console.log(`Employee list completed`);
}

function addEmployee(){
  console.log(`Add Employee -----------------------------`);
  console.log('');
  let employee = {};
  employee.firstName = getInput("First Name: ", isStringInputValid);
  employee.lastName = getInput("Last Name: ", isStringInputValid);
  let startDateYear = getInput("Employee start year (1990 - 2024): ", isStartYearValid);
  let startDateMonth = getInput("Employee start month (1 - 12): ", isStartMonthValid);
  let startDateDay = getInput("Employee start day (1 - 31): ", isStartDayValid);
  employee.startDdate = new Date(startDateYear, startDateMonth - 1, startDateDay);
  employee.isActive = getInput("Is employee active (yes or no): ", isBooleanInputValid, transformerBooleanValue);

  // Output Employee JSON
  const json = JSON.stringify(employee, null, 2);
  console.log(`Employee: ${json}`);
}


function searchById(){
   const id = getInput("Employee ID: ", null, Number);
   const result = employees.find(e => e.id === id);
   if(result){
    console.log("");
    for (let property in result) {
      console.log(`${property}: ${result[property]}`);
    }
   }
   else{
    console.log("No results.....");
   }
}

function serachByName(){
  const firstNameSearch = getInput("First Name: ").toLowerCase();
  const lastNameSearch = getInput("Last Name: ").toLowerCase();
  const results = employees.filter(emp => {
    if(firstNameSearch){
      if(!emp.firstName.toLowerCase().startsWith(firstNameSearch))
        return false;
    }
    if(lastNameSearch){
      if(!emp.lastName.toLowerCase().startsWith(lastNameSearch))
        return false;
    }
    return true;
  });

  results.forEach((emp, idx) => {
    console.log("");
    console.log(`Search Reuslt ${idx + 1} ---------------------------------------`);
    for (let property in emp) {
      console.log(`${property}: ${emp[property]}`);
    }
  });
}
// Application Execution ---------------------------
// Get the command the user wants to exexcute
const command = process.argv[2].toLowerCase();

switch (command) {

  case 'list':
    listEmployees();
    break;

  case 'add':
    addEmployee();
    break;

  case 'search-by-id':
    searchById();
    break;

  case 'search-by-name':
    serachByName();
    break;

  default:
    console.log('Unsupported command. Exiting...');
    process.exit(1);

}



