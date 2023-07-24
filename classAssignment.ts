// question no 1:
let engMarks: number = 50
let urduMarks: number = 56

let avg: number = (engMarks + urduMarks) / 2
if (avg >= 80) {
    console.log("CONGRATULATIONS! YOU HAVE GOT A GRADE")
}
else if (avg >= 70) {
    console.log("CONGRATULATIONS! YOU HAVE GOT B GRADE")
}
else if (avg >= 60) {
    console.log("CONGRATULATIONS! YOU HAVE GOT C GRADE")
}
else {
    console.log("YOU ARE FAIL")
}

// question no 2

let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"]
fruits.push("mango")
fruits.unshift("blueberry")
fruits.splice(2, 1, "coconut")
console.log(fruits)

// question no 3

import * as promptSync from "prompt-sync"

const prompt = promptSync()
const productPrice = prompt("enter the product price : ")
const discountprcnt = prompt("enter the discounted percentage : ")
const x = parseInt(productPrice)
const y = parseInt(discountprcnt)
let discountAmount = x * (y / 100)
if (y >= 50) {
    console.log("invalid discount percent")
    
}
console.log(`original product price is : ${x}`)
console.log(`discount percentage is: ${y}`)
console.log(`discounted price is : ${discountAmount}`)
console.log(`final price is ${x - discountAmount}`)

// question no 4

function calculateFactorial(num: number): number {
    let factorial = 1
    for (let i = 1; i <= num; i++){
        factorial*=i
    }
    return factorial
}
console.log(calculateFactorial(5));