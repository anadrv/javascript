const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElement.textContent = "Too old";
    }
    else if(age == 0) {

        resultElement.textContent = "You can't enter";
    }   
    else if(age >=18) {
        resultElement.textContent = "You can enter";
    } 
    else if(age < 0) {
        resultElement.textContent = "You can't be below 0";

    } else {
        resultElement.textContent = "You must be 18+";
    }
        
}
