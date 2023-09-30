#! /usr/bin/env node
import inquirer from "inquirer";

type answerType = {
  num1: number;
  num2: number;
  operation: string;
};
inquirer
  .prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter your 1st Number",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter your 2nd Number",
    },
    {
      type: "list",
      name: "operation",
      message: "Select Operation",
      choices: ["+", "-", "*", "/"],
    },
  ])
  .then((answers: answerType) => {
    if (answers.operation == "+") {
      const result = answers.num1 + answers.num2;
      console.log("Sum", result);
    } else if (answers.operation == "-") {
      const result = answers.num1 - answers.num2;
      console.log("Substraction", result);
    } else if (answers.operation == "*") {
      const result = answers.num1 * answers.num2;
      console.log("Multiply", result);
    } else if (answers.operation == "/") {
      const result = answers.num1 / answers.num2;
      console.log("Division", result);
    }

    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
