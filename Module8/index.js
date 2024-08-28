import fs from "node:fs/promises";

// Global variables -------------------------------------------------------
let employees = [];

// Loading and writing data to the filesystem -----------------------------
const loadData = async () => {
  console.log("Loading employees.....");
  try {
    const fileData = await fs.readFile("./data.json");
    employees = JSON.parse(fileData);
  } catch (err) {
    console.error("Cannot load in employees");
    throw err;
  }
};

const writeData = async () => {
  console.log("Writing to file.....");
  try {
    await fs.writeFile("./data.json", JSON.stringify(employees, null, 2));
  } catch (err) {
    console.error("Cannot write employees");
    throw err;
  }
};

import createPrompt from "prompt-sync";
let prompt = createPrompt();

function getInput(promptText, validator, transformer) {
  let value = prompt(promptText);
  if (validator && !validator(value)) {
    console.error(`--Invalid Input!`);
    return getInput(promptText, validator, transformer);
  }
  if (transformer) {
    return transformer(value);
  }
  return value;
}

const getNextEmployeeID = () => {
  const maxID = Math.max(...employees.map(e => e.id));
  return maxID + 1;
}

// Transfomer functions --------------------------------
const transformerBooleanValue = (input) => {
  return input === "yes";
};

// Validator functions ------------------------------
const isStringInputValid = function (input) {
  // This is a function expression
  return input ? true : false;
};

const isBooleanInputValid = function (input) {
  return input == "yes" || input == "no";
};

const isIntegerValid = (min, max) => {
  return (input) => {
    let numValue = Number(input);
    if (!Number.isInteger(numValue) || numValue < min || numValue > max) {
      return false;
    }
    return true;
  };
};

// Application commands functions -------------------------------------
function listEmployees() {
  console.log(`Employee List ----------------------------`);
  console.log("");

  for (let emp of employees) {
    for (let property in emp) {
      console.log(`${property}: ${emp[property]}`);
    }
    console.log("");
    prompt("Press enter to continue...");
  }
  console.log(`Employee list completed`);
}

async function addEmployee() {
  console.log(`Add Employee -----------------------------`);
  console.log("");
  let employee = {};
  employee.id = getNextEmployeeID();
  employee.firstName = getInput("First Name: ", isStringInputValid);
  employee.lastName = getInput("Last Name: ", isStringInputValid);
  let startDateYear = getInput(
    "Employee start year (1990 - 2024): ",
    isIntegerValid(1990, 2023)
  );
  let startDateMonth = getInput(
    "Employee start month (1 - 12): ",
    isIntegerValid(1, 12)
  );
  let startDateDay = getInput(
    "Employee start day (1 - 31): ",
    isIntegerValid(1, 31)
  );
  employee.startDdate = new Date(
    startDateYear,
    startDateMonth - 1,
    startDateDay
  );
  employee.isActive = getInput(
    "Is employee active (yes or no): ",
    isBooleanInputValid,
    transformerBooleanValue
  );
  employee.salaryUSD = getInput("Annual salary in USD: ", 
    isIntegerValid(10000, 1_000_000)
  );
  employee.localCurrency = "USD";


  employees.push(employee);
  await writeData();
}

function searchById() {
  const id = getInput("Employee ID: ", null, Number);
  const result = employees.find((e) => e.id === id);
  if (result) {
    console.log("");
    for (let property in result) {
      console.log(`${property}: ${result[property]}`);
    }
  } else {
    console.log("No results.....");
  }
}

function serachByName() {
  const firstNameSearch = getInput("First Name: ").toLowerCase();
  const lastNameSearch = getInput("Last Name: ").toLowerCase();
  const results = employees.filter((emp) => {
    if (firstNameSearch) {
      if (!emp.firstName.toLowerCase().startsWith(firstNameSearch))
        return false;
    }
    if (lastNameSearch) {
      if (!emp.lastName.toLowerCase().startsWith(lastNameSearch)) return false;
    }
    return true;
  });

  results.forEach((emp, idx) => {
    console.log("");
    console.log(
      `Search Reuslt ${idx + 1} ---------------------------------------`
    );
    for (let property in emp) {
      console.log(`${property}: ${emp[property]}`);
    }
  });
}

// Application Execution ---------------------------
const main = async () => {
  // Get the command the user wants to exexcute
  const command = process.argv[2].toLowerCase();

  switch (command) {
    case "list":
      listEmployees();
      break;

    case "add":
      await addEmployee();
      break;

    case "search-by-id":
      searchById();
      break;

    case "search-by-name":
      serachByName();
      break;

    default:
      console.log("Unsupported command. Exiting...");
      process.exit(1);
  }
}

loadData()
  .then(main)
  .catch((err) => {
    console.error("Cannot complete startup.");
    throw err;
  })
