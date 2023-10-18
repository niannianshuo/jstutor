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
let x = Math.floor(Math.random() * 100);
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

}


