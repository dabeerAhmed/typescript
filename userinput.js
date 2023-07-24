"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
// const prompt = promptSync()
// const name = prompt("what is your name? ");
// console.log(`Hello, ${name}`);
var prompt = promptSync();
var num1str = prompt("enter the first number: ");
var num2str = prompt("enter the second number: ");
var num1 = parseInt(num1str);
var num2 = parseInt(num2str);
var sum = num1 + num2;
console.log("the sum of ".concat(num1, " and ").concat(num2, " is ").concat(sum));
