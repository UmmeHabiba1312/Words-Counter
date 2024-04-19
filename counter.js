#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Display Welcome Message
console.log("\n \t<=============================================>");
console.log(chalk.bold.magentaBright("\n \t Welcome to Umm e Habiba - Words Counter"));
console.log("\n \t<=============================================>");
//  prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//  trimming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.greenBright(words.length)}`));
