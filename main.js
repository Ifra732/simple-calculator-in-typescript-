#!/usr/bin/env node
//for fileexicution
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "second number" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//condition statement
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer["second number"]);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.operator["second number"]);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer["second number"]);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer["second number"]);
}
else {
    console.log("select correct operator");
}
;
