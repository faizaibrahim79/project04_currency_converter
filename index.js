import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\n \t Welcome to 'FAIZA FAIZAN'-Currency Converter\n"));
// List of currencies and their Exchange rates
const exchange_rate = {
    USD: 1,
    EUR: 48.10,
    SAR: 3.75,
    INR: 83.39,
    PKR: 278.09,
    JYP: 154.76,
    CAD: 1.37,
    AUD: 1.55
};
//  We are taking currencies from the user via prompt
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.bgYellow('Enter from currency'),
        type: 'list',
        choices: ['USD', 'EUR', 'SAR', 'INR', 'PKR', 'JYP', 'CAD', 'AUD']
    },
    {
        name: 'to',
        message: chalk.bgYellow('\nEnter to currency'),
        type: 'list',
        choices: ['USD', 'EUR', 'SAR', 'INR', 'PKR', 'JYP', 'CAD', 'AUD']
    },
    {
        name: 'amount',
        message: chalk.bgYellow('\nEnter your amount'),
        type: 'number',
    }
]);
// Perform currency conversion by using formula
let fromAmount = exchange_rate[user_answer.from];
let toAmount = exchange_rate[user_answer.to];
let Amount = user_answer.amount;
// formula of conversion
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
// display converted amount
console.log(chalk.blue.bold(`\n\tConverted Amount = ${convertedAmount.toFixed(2)}`));
