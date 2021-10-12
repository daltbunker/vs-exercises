var readline = require('readline-sync');

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

var num1 = readline.question("Enter your first number: ");
var num2 = readline.question("Enter your second number: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid Number.");
    return;
}

var opp = readline.question("Enter 'add', 'sub', 'mul', or 'div': ");
var result;

switch(opp) {
    case "add":
        result = add(num1, num2);
        break;
    case "sub":
        result = subtract(num1, num2)
        break
    case "mul":
        result = multiply(num1, num2)
        break
    case "div":
        result = divide(num1, num2)
        break
    default:
        console.log("Invalid Opperator.")
        return;

}

console.log("The result is: " + result)