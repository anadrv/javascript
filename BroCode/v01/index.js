console.log("Foundryside");

//window.alert("Janela de Alerta");

document.getElementById("myId").textContent = "Hello World";

//variable = a container that stores a value 


let x;
let y = 200; 

x = 100;
console.log(x);

let age2 = 27;
console.log(age2);

let price = 10.99;
let gpa = 2.1;
console.log(`You are ${age2} years old`);
console.log(`The price is $${price}`);

let firstName = "Ana";
console.log(typeof firstName);

let online = false;

console.log("Bro is online: " + online); 

let fullName = "Kaladin";
let age1 = 27;
let student = false;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = `You are ${age1} years old`;

let students = 30;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 1;
students = students ** 2;
let extraStudents = students % 2;

students += 1;
students -= 1;
students *= 2;
students /= 1;
students **= 2;
students %= 1;

students ++; //incrementa 1
students --; 




/**
 * input
let username;
username = window.prompt("What's your username?");
console.log(username);

let username;
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
}

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent =  "Hello " + username;
}
 */

/** Type conversion = change the datatype of a value to another
 * const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = "Circumference = " + circumference;
    
}
 */







