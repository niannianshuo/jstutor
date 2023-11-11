console.log("I love you!");
console.log(" ");

//window.alert("Please mind your words!")

//variable
/* let name1 = "niannian";// String
let age = 20;// number
let sex = false;// Booleans

console.log("Hi, ",name1);
console.log("I am",age,"years old");
console.log("Sex:",sex ? "male" : "famale");

document.getElementById("p1").innerHTML = "Hi, " + name1;
document.getElementById("p2").innerHTML = "I am " + age +" years old";
document.getElementById("p3").innerHTML = "Sex: " + sex; */
// variable

// operations
/* let result = 100;
result = 1 + 2 * (3 + 4);
console.log(result); */
// operations

// user input 
// easier one
/* let username = window.prompt("what is your name?");
console.log(username); */

// harder one 
/* let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myInput").value;
    console.log(username); 
} 
*/
// user input

// type conversion
/* let age = window.prompt("Please enter your age:"); 

console.log(typeof age)
age = Number(age);
age = age + 1;

let x = 3.14;
x = String(x);
let y =Boolean("")// it is false. If there is space in it, it's true.


console.log("Next year, you are ",age," years old.");
console.log(typeof x);
console.log(y,typeof y);
 */
// type conversion

// const 
/* const PI = 3.1415926;
let radius = window.prompt("Please enter the radius:");
console.log(radius);

circumference = 2 * PI *radius;

console.log("The circumference is ",circumference); */
// const

// math
/* let x = 3.14;
let y = -9;
let z = 45; */

//x = Math.round(x)
//x = Math.floor(x)
//x = Math.ceil(x)// ceiling 天花板
/* let maxNumber = Math.max(x,y,z);
let minNumber = Math.min(x,y,z);

console.log(minNumber) */
// math

// string properties & methods
/* let yourName = "Ma Niannian";
let TEL = "139-5197-3657"; */

/* console.log(yourName.length);
console.log(yourName.charAt(5));
console.log(yourName.indexOf("a"));
console.log(yourName.lastIndexOf("a"));
console.log(yourName.trim());// remove space before and after the string
console.log(yourName.toUpperCase());
console.log(yourName.toLowerCase()); */

//console.log(TEL.replaceAll("-",""));// replace all the left character with the right character

// string slice method & method chaining
/* let fisrtName = yourName.slice(0,yourName.indexOf(" "));// exclude the right number
let lastName;
lastName = yourName.slice(yourName.indexOf(" ") + 1).toUpperCase();
console.log(fisrtName);
console.log(lastName); */
// string properties & methods

// if statements
 /* let age ;
 document.getElementById("myButton").onclick = function(){
    age = document.getElementById("ageText").value;
   

    if(age > 16){
        document.getElementById("answer").innerHTML = "You can make love! Enjoy it! ";
     }
    else{
        document.getElementById("answer").innerHTML = "You are too young to make love!";
     }
    
 } */

 // loops :while loop, do...while  loop, for loop, break and continue
 // while loop and do...while loop
/*  let username;

 do{
    username = window.prompt("Enter your name:");
 }while(username == "")

 console.log("Hello",username); */

 // for loop and break, continue
/* for(let i = 0; i <= 15; i += 3){
    if(i == 12) continue;
    console.log(i);
}
console.log("You have escaped!"); */

// nested loop
/* let rows = window.prompt("Enter the number of rows:");
let columns = window.prompt("Enter the number of columns: ")

for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
        document.getElementById("myShape").innerHTML += "$";
    }// this is a line
    document.getElementById("myShape").innerHTML += "<br>";
        // this is uesd to breakline
} */

// functions and return statement

/* let myName = "Mnn";
let yourName = "Zqh";

function yourMood(myName, yourName){
    console.log("Happy!",myName);
    console.log("Upset!");
    console.log("Angry!",yourName);
    console.log("Nervous!");
    console.log("Sad!"); 
    return myName+yourName;

}
console.log(yourMood(myName,yourName)); */

// ternary operator : shortcut for if/else statement
// condition ? ep1IfTrue : ep2IfFalse

/* let age = window.prompt("Please enter your age:");

checkAdult(age);

function checkAdult(age){
    age >=18 ? console.log("You are an adult!") : console.log("You are a teenager!");
}
 */

// differences between let and var
// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

/* for(let i = 0; i < 5; i++){
    console.log(i);
}
// if use "let" to define variable in for loop, it will be warning
//console.log(i);

for(var i = 0; i < 5; i++){
    
}
console.log(i); */

// template literals 模版文字
/* let yourName = "Coy";
let yourAge = "24";
let yourTEL = "123456789";

/* console.log(`Your name is ${yourName}`);
console.log(`Your age is ${yourAge}`);
console.log(`And your telephone number is ${yourTEL}`); 

let Text = `Your name is ${yourName}<br>
Your age is ${yourAge}<br>
And your telephone number is ${yourTEL}<br>`

//console.log(Text);

document.getElementById("myTemplate").innerHTML = Text; */


// toLocaleString() = return a string that be transformed by specified format
//object.toLocaleString(locale, options);
// locale represents language(unfined = default in the website)
// options = objects with format options

//let number = .2468;
// these are numbers
/* number = number.toLocaleString("en-US");// US English
number = number.toLocaleString("hi-IN");// Hindi
number = number.toLocaleString("de-GE");// German */

//these are currency
/* currency = number.toLocaleString("en-US",{style:"currency",currency:"USD"})//dollars
currency = number.toLocaleString("hi-IN",{style:"currency",currency:"INR"})// rupee
currency = number.toLocaleString("de-GE",{style:"currency",currency:"EUR"})// euro
 */

// these are percent
//percent1 = number.toLocaleString(undefined,{style:"percent"});

// these are units
//unit1 = number.toLocaleString(undefined,{style:"unit",unit:"centimeter"})
// make sure the unit with lowercase

//console.log(unit1)

// array
/* let letters = ["a","b","c","d"];
let characters = ["a","o","e","i","u"];
let numbers = [1,4,6,2,99,90];
let passage = [letters,characters];

let max = Math.max(...numbers);// "..." spread operator,
//which can seperate the elements in an array or a string
console.log(max);

letters.push("e");
letters.pop();
let length = letters.length
let index = letters.indexOf("a");
letters.unshift("z"); // add element to the beginning
//letters.shift(); // remove element from the beginning

//letters = letters.sort().reverse();// sorted by reverse order 

passage.push(numbers);
passage[0][7] = "99"; */

/* for(let words of passage){
    for(let word of words){
        console.log(word); 
    }
} */// traverse the array's elements

/* for(let i = 0; i < length; i+=1){
    console.log(letters[i]); 
}// traverse the array's elements
 */

// rest parameters = pack arguments into an array = ...

/* function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

let Sum = sum(...numbers);
console.log(Sum); */

// callback ???

// array.forEach() = return type is void 
//array.map()  = return a new array

/* let letters = ["a","b","c","d"];
letters.forEach(capitalize);

letters.forEach(print);
console.log(...letters);

function capitalize(element,index,array){
    array[index] = element[0].toUpperCase();
} 


let numbers = [1,2,3,4,5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(console.log);

function print(element){
    console.log(element);
}

function square(element){
    return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
} */

// array.filter() = create a new array that passes the test 
//let ages = [23,45,67,12,20,90];
/* let adults = ages.filter(checkAge);
adults.forEach(print);

function checkAge(element){
    return element > 20;
}

 */

// array.reduce() = reduce an array to a single value ?
/* let multiple = ages.reduce(checkout);
console.log(multiple);

function checkout(multiple,element){
    return multiple * element;
} */

// how to order the number array
/* ages = ages.sort();
ages = ages.sort().reverse();
ages.forEach(print);

function print(element){
    console.log(element);
} */

// anonymous function = function expressions
/* const greeting = function(){
    console.log("Hello!");
}
greeting(); */

// arrow function "=>" which is a compact alternative to a traditional function
/* const greeting = (username) => console.log(`Hello,${username}`);
greeting("Nian nian");
// this function retain (argument1, argument2,...) => the structure of former function,
// and eliminate the curly brace and "return"
ages = ages.sort(); 
ages.forEach((element) => console.log(element)); */

// array shuffle function = random the elements in the array
// write a roll-call program with this using my class 
let students = ["ZTX","TZH","WCX","CXJ","ZZA","ZQH","CZX","CMJ","ZT","LS","SX","XCJ","FYY","HZY"];

shuffle(students);

console.log(students[0]);

//students.forEach(print);
//print <=> student => console.log(student)
function print(student){
    console.log(student);
}

function shuffle(students){
    let amount = students.length;

    while(amount != 0){
        let randomIndex = Math.floor(Math.random() * amount);
        amount -= 1;
        // generate a random number between 0 ~ (whatever you set)

        let temp = students[amount];
        students[amount] = students[randomIndex];
        students[randomIndex] = temp;
    }
    return students;
}

// nested function = 嵌套函数 functions inside other functions
// inner functions are hidden from outside

const greeting = function(username){
    console.log(`Hello,${username}`);
    displayScore();
    // call the inner func in the function

    function displayScore(){
        console.log("You have 100 points!");
    }
}
greeting("niannian")

// closure(闭包) = a function with preserved and private data
// we can access to an outer function's scope from an inner function

let a = function (){
    let n = 999;
    console.log("i'm a!");

    let b = function (){
        console.log(n);
        return "i'm b's return value!";
    }
    return b;
}

let resulta = a;// let "func a" equal to resulta, that is to say, resulta = a (also a function)
let resultb = a();// function a's return value <=> function b
// a() means this func has been executed, and resultb equal to the return value of a()
// and in func a, b() is not executed, so no print"n"
resulta(); // execute func a
resultb(); // execute func b
