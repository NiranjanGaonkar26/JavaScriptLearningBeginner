import chalk from 'chalk';

export const logObject = (obj) => {                                            // With the export keyword this function can be used in another file.
    Object.entries(obj).forEach(entry => {
        console.log(`${chalk.blue(entry[0])}: ${chalk.gray.bold(entry[1])}`);
    });
}