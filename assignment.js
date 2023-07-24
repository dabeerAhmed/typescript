// question no 1
// let name1: string = "Hello Dabeer, would you like to learn some Python today?"
// console.log(name1)
// question no 2
// let name2: string = "Dabeer Ahmed"
// console.log(name2.toLowerCase());
// console.log(name2.toUpperCase());
// console.log(name2.charAt(0).toUpperCase()+name2.slice(1).toLowerCase());
// question no 3
// console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”")
// let author:string = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
// console.log(author)
//question no 5
// let famous_person:string = "Dabeer Ahmed"
// let message:string = `This famous person is ${famous_person}`
// console.log(message)
// question no 6
// let name3: string = "\t Dabeer Ahmed \n SUDEES HASSAN"
// console.log(name3)
// question no 7
// console.log(4+4)
// console.log(9-1)
// console.log(4*2)
// console.log(16/2)
// question no 9
// let fav_num: number = 10
// console.log(`my favorite number is ${fav_num}`)
// question no 11
// let name4: string[] = ["mohsin","sudees","nabeel","faizan"]
// console.log(name4[0])
// console.log(name4[1])
// console.log(name4[2])
// console.log(name4[3])
// question no 12
// let name5: string[] = ["mohsin","sudees","nabeel","faizan"]
// console.log(`hello ${name5[0]}`) 
// console.log(`hello ${name5[1]}`) 
// console.log(`hello ${name5[2]}`) 
// console.log(`hello ${name5[3]}`) 
// let name6: string[] = ["mohsin","sudees","nabeel","faizan"]
// for(let i = 0; i<name6.length; i++){
//     let message2:string = `how are u ${name6[i]}`
//     console.log(message2)
// }
//question no 13
// let transportation: string[] = ["car", "bike", "helicopter"]
// console.log(`one day i will buy a luxury ${transportation[0]}`) 
// console.log(`one day i will buy a sports ${transportation[1]}`) 
// console.log(`its my childhood dream to fly a ${transportation[2]}`) 
//question no 14
// let guests: string[] = ["hassan","hammad","burhan"]
// console.log(`would you like to have dinner with me ${guests[0]}`)
// console.log(`would you like to have dinner with me ${guests[2]}`)
// console.log(`would you like to have dinner with me ${guests[1]}`)
// let guests1: string[] = ["hassan","hammad","burhan"]
// for(let i = 0; i<guests1.length; i++){
//     let message3:string = `would you like to have dinner with me ${guests1[i]}`
//     console.log(message3)
// }
// question no 15
// console.log(`${guests[1]} will not be able to make it to the dinner`)
// guests[1] = "mohsin ali"
// console.log(guests)
// console.log(`would you like to have dinner with me ${guests[0]}`)
// console.log(`would you like to have dinner with me ${guests[2]}`)
// console.log(`would you like to have dinner with me ${guests[1]}`)
// question no 16
// let guests2:string[] = ["dabeer","ahsan","mohsin"]
// console.log(`would you like to have dinner with me ${guests2[0]}`)
// console.log(`would you like to have dinner with me ${guests2[2]}`)
// console.log(`would you like to have dinner with me ${guests2[1]}`)
// console.log(" I have now found a bigger dinner table so now i will be inviting some more peoples")
// guests2.unshift("hassan")
// console.log(guests2)
// guests2.splice(2,0, "hammad")
// console.log(guests2)
// guests2.push("burhan")
// console.log(guests2)
// console.log(`would you like to have dinner with me ${guests2[0]}`)
// console.log(`would you like to have dinner with me ${guests2[2]}`)
// console.log(`would you like to have dinner with me ${guests2[1]}`)
// console.log(`would you like to have dinner with me ${guests2[3]}`)
// console.log(`would you like to have dinner with me ${guests2[4]}`)
// console.log(`would you like to have dinner with me ${guests2[5]}`)
// for(let i = 0; i < guests2.length; i++){
//     let message4:string = `would you accept the invitation and have dinner with me ${guests2[i]}`
//     console.log(message4)
// }
// question no 17
// console.log(guests2)
// console.log("sorry i can only invite 2 peoples now as there is only 2 persons space on the table unfortunately")
// console.log(`sorry i wouldnt be able to invite you ${guests2[5]}`)
// guests2.pop()
// console.log(guests2)
// console.log(`sorry i wouldnt be able to invite you ${guests2[4]}`)
// guests2.pop()
// console.log(guests2)
// console.log(`sorry i wouldnt be able to invite you ${guests2[3]}`)
// guests2.pop()
// console.log(guests2)
// console.log(`sorry i wouldnt be able to invite you ${guests2[2]}`)
// guests2.pop()
// console.log(guests2)
// console.log(`you both are still invited ${guests2}`)
// guests2.pop()
// guests2.pop()
// console.log(guests2)
// question no 18
// let places:string[] = ["makka", "madina", "germany", "dubai", "england"]
// console.log(places)
// let sortPlaces = places.slice().sort()
// console.log(sortPlaces)
// let reversePlaces = places.slice().sort().reverse()
// console.log(reversePlaces)
// console.log(places)
// incomplete
// question no 19
// let cities:string[] = ["karachi", "lahore", "isl", "multan", "pindi"]
// console.log(`there are ${cities.length} cities in the above array`)
// question no 20
// let languages: string[] = ["urdu","english","hindi","tamil","bangali"]
// console.log(`languages: ${languages}`)
// question no 21
// let pakistan = {
//     language : "urdu"
// }
// let india = {
//     language : "hindi"
// }
// let bangladesh = {
//     language : "bangali"
// }
// console.log(`the language of pakistan is ${pakistan.language}`)
// console.log(`the language of india is ${india.language}`)
// console.log(`the language of bangladesh is ${bangladesh.language}`)
// in this question pakistan india and bangladesh are objects while language is the property of that objects
// question no 22
// question no 23
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// let bike = 'honda';
// console.log("is bike == 'honda? i predicted true")
// console.log(bike == 'honda')
// let mobile = 'oppo'
// console.log("is mobile == 'oppo'? i predicted false")
// console.log(mobile == 'realme')
// question no 24
// let bike = 'honda';
// console.log(bike == 'honda')
// console.log(bike == 'hondy')
// console.log(bike == 'HONDA')
// console.log(bike == 'Honda')
// let x = 10
// console.log(x == 10)
// console.log(x != 10)
// console.log(x > 10)
// console.log(x < 10)
// console.log(x >= 10)
// console.log(x <= 10)
// let mobiles:string[] = ["oppo","realme","redmi","iphone"] 
// let search:string = "oppo"
// if(mobiles.includes(search)){
//     console.log(`${search} is in the array`)
// }
// else{
//     console.log(`${search} is not in the array`)
// }
//question no 25
// let allien_color:string = "green"
// if(allien_color == "green"){
//     console.log("player just earned 5 points")
// }
// let alien_color:string = "yellow"
// if(alien_color == "green"){
//     console.log("player just earned 5 points")
// }
// question no 26
//  let alien_color : string =  "red"
//  if(alien_color == "green"){
//     console.log("the player just earned 5 points for shooting the alien")
//  }
//  else{
//     console.log("the player just earned 10 points")
//  }
// let alien_color : string =  "green"
// if(alien_color == "green"){
//    console.log("the player just earned 5 points for shooting the alien")
// }
// else{
//    console.log("the player just earned 10 points")
// }
// question no 27
// let alien_color : string =  "red"
// if(alien_color == "green"){
//    console.log("the player just earned 5 points for shooting the alien")
// }
// else if(alien_color == "yellow"){
//     console.log("the player just earned 10 points")
// }
// else if(alien_color == "red"){
//     console.log("the player just earned 20 points")
// }
// else{
//     console.log("the player didnt earn any point")
// }
// question no 28
// let age:number = 12
// if (age<2) {
//     console.log("the person is a baby")
// }
// else if (age<4){
//     console.log("the person is a toddler")
// }
// else if (age<13){
//     console.log("the person is a kid")
// }
// else if (age<20){
//     console.log("the person is a teenager")
// }
// else if (age<65){
//     console.log("the person is a adult")
// }
// else if (age>65){
//     console.log("the person is a elder")
// }
// question no 29
// let favorite_fruits : string[] = ["banana","mango","oranges"]
// if (favorite_fruits.includes("banana")) {
//     console.log("you really like bananas")
// }
// if (favorite_fruits.includes("apple")) {
//     console.log("you really like apples")
// }
// if (favorite_fruits.includes("mango")) {
//     console.log("you really like mango")
// }
// if (favorite_fruits.includes("oranges")) {
//     console.log("you really like oranges")
// }
// if (favorite_fruits.includes("apple")) {
//     console.log("you really like apples")
// }
// question no 30
// let userNames : string[] = ["admin", "dabeer", "john"," hammad", "hassan"]
// for(const userName of userNames){
//     if (userName === "admin") {
//         console.log("Hello admin, would you like to see a status report")
//     }
//     else{
//         console.log(`hello ${userName} thankyou for logging in again `)
//     }
// }
//question no 31
// let userNames : string[] = ["admin", "dabeer", "john"," hammad", "hassan"]
// if (userNames.length===0) {
//     console.log(" the user list is empty")
// } 
// else{
//     console.log("the user list is not empty")
// }
// userNames.pop()
// userNames.pop()
// userNames.pop()
// userNames.pop()
// userNames.pop()
// if (userNames.length===0) {
//     console.log(" the user list is empty")
// } 
// else{
//     console.log("the user list is not empty")
// }
// question no 32
// let current_users :string[] = ["hashir","rafiq","shafiq","faisal","sudais"]
// let new_users : string[] = ["ahmed","shafiq","dabeer","mohsin","RAFIQ"]
// for(const newUser of new_users){
//     if (current_users.includes(newUser)){
//         console.log(`the username ${newUser} already exists`)
//     }
//     else{
//         console.log("thankyou for logging in again")
//     }
// for(const newUser of new_users){
// if (current_users.some((user)=>user.toLowerCase() === newUser.toLowerCase())) {
//     console.log(`the username ${newUser} is already taken pls enter a new one`)
// }
// else{
//     console.log(`thankyou for logging in again`)
// }
// question no 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinal = void 0;
    if (num == 1) {
        ordinal = 'st';
    }
    else if (num == 2) {
        ordinal = 'nd';
    }
    else if (num == 3) {
        ordinal = 'rd';
    }
    else if (num == 4) {
        ordinal = 'th';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(num).concat(ordinal));
}
