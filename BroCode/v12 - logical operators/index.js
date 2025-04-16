//logical operators = used to combine or manipulate boolean values


// AND = &&
const temp = 20;

if (temp > 0 && temp <= 30) {
    console.log("The temperature is GOOD.");
} else {
    console.log("The temperature is BAD.");
}

// OR = ||

const temp2 = 20;

if (temp2 <= 0 || temp2 > 30) {
    console.log("The temperature is BAD.");
} else {   
    console.log("The temperature is GOOD.");
}

// NOT = !

const isSunny = true;

if(!isSunny) { //se o valor de isSunny for false
    console.log("It is cloudy.");
} else {
    console.log("It is sunny.");
}