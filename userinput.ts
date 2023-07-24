import * as promptSync from "prompt-sync"

// const prompt = promptSync()

// const name = prompt("what is your name? ");
// console.log(`Hello, ${name}`);

const prompt = promptSync();
const num1str = prompt("enter the first number: ")
const num2str = prompt("enter the second number: ")
const num1 = parseInt(num1str)
const num2 = parseInt(num2str)
let sum = num1 + num2
console.log(`the sum of ${num1} and ${num2} is ${sum}`)