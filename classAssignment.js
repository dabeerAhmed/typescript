"use strict";
exports.__esModule = true;
// question no 1:
var engMarks = 50;
var urduMarks = 56;
var avg = (engMarks + urduMarks) / 2;
if (avg >= 80) {
    console.log("CONGRATULATIONS! YOU HAVE GOT A GRADE");
}
else if (avg >= 70) {
    console.log("CONGRATULATIONS! YOU HAVE GOT B GRADE");
}
else if (avg >= 60) {
    console.log("CONGRATULATIONS! YOU HAVE GOT C GRADE");
}
else {
    console.log("YOU ARE FAIL");
}
// question no 2
var fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.push("mango");
fruits.unshift("blueberry");
fruits.splice(2, 1, "coconut");
console.log(fruits);
// question no 3
var promptSync = require("prompt-sync");
var prompt = promptSync();
var productPrice = prompt("enter the product price : ");
var discountprcnt = prompt("enter the discounted percentage : ");
var x = parseInt(productPrice);
var y = parseInt(discountprcnt);
var discountAmount = x * (y / 100);
if (y >= 50) {
    console.log("invalid discount percent");
}
console.log("original product price is : ".concat(x));
console.log("discount percentage is: ".concat(y));
console.log("discounted price is : ".concat(discountAmount));
console.log("final price is ".concat(x - discountAmount));
// question no 4
function calculateFactorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(calculateFactorial(5));
