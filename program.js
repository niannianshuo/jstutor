// hypotenuse calculation

/* let a;
let b;
let c;

a = window.prompt("Please enter side A:");
a = Number(a);

b = window.prompt("Please enter side B:");
b = Number(b);

c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))

console.log("side C:",c); */

/* document.getElementById("myButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    
    document.getElementById("cText").innerHTML = "side C: " + c;
    // 不太理解

} */

// counter algorithm
/* let count = 0;

document.getElementById("decrease").onclick = function(){
    count -= 1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("increase").onclick = function(){
    count += 1;
    document.getElementById("counter").innerHTML = count;
} */

// random number generator
// generate random number between 0 ~ 100
/* let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);
let z = Math.floor(Math.random() * 100);
// if code write here ,these numbers won't be changed when rolling again

console.log(x);
console.log(y);
console.log(z);

document.getElementById("randomButton").onclick = function(){
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let z = Math.floor(Math.random() * 100);
// set these code in the function in order to change numbers by every roll

    document.getElementById("xrandom").innerHTML = x;
    document.getElementById("yrandom").innerHTML = y;
    document.getElementById("zrandom").innerHTML = z;

} */


// number guessing game
/* let answer = Math.floor(Math.random()*10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessNumber").value;
    guesses += 1;

    if(guess == answer){
        alert(`Yes! You are right!The number is ${answer}.And you have guessed ${guesses} times`);
    }
    else if(guess < answer){
        alert(`No~You are too small!`);
    }
    else if(guess > answer){
        alert(`No~You are too big!`);
    }
} */

// temperature conversion program
document.getElementById("submitButton").onclick = function(){
    let temp = document.getElementById("tempInput").value;

    if(document.getElementById("cTempSelect").checked){
        temp = toCelcius(temp);
        document.getElementById("resultBox").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fTempSelect").checked){
        temp = Fahrenheit(temp);
        document.getElementById("resultBox").innerHTML = `${temp}°F`;
    }
    else{
        document.getElementById("resultBox").innerHTML = "Please select a format!";
    }

    console.log(temp);
}

function toCelcius(temp){
    return (temp -32) / 1.8;
}

function toFahrenheit(temp){
    return temp * 1.8 +32;
}

