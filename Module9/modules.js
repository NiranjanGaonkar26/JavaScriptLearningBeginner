// 2 different module standards in JS: CommonJS modules and ESM modules
// 1. CommonJS modules
//      - Standard created for Node.js (since JS didn't have it's own modules implementation at that time)
//      - Load modules using the `require` method
//      - Uses an exports variable to determine exports

// 2. ESM modules (current standard)
//      - Shorthand for ECMAScript modules
//      - Part of the ECMAScript specification
//      - Load modules using the `import` keyword
//      - Uses the `export` keyword to determine exports (functions, variables, objects etc can be exported)


// NOTE: always keep the node_modules file in .gitignore as we don't want to include it in our source repository

import chalk from 'chalk';
import { logObject } from './logging.js';

// console.log(`${chalk.blue.bold("First Name:")} Niranjan`);
// console.log(`${chalk.green.bold("Last Name:")} G C`);

const employee = {
    "id": 56,
    "email": "wilkins_duke@globomantics.com",
    "firstName": "Wilkins",
    "lastName": "Duke",
    "salaryUSD": 104000,
    "localCurrency": "COP",
    "dateBirth": "1988-10-31",
    "startDate": "2000-01-24",
    "isActive": false
  };

logObject(employee);