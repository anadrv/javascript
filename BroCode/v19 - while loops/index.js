let username = "";

while (username === ""  || username === null) {
    username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}`);

//do while

do {
    username = window.prompt(`Your name`);
} while (username === ""  || username === null)

//outro exemplo

let loggedIn = false;
let username1;
let password;

while(!loggedIn) {
    username1 = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You're are logged in!");
    } else {
        console.log("Invalid credentials! Please try again");
    }
}