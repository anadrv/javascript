let userName = "Ana";

console.log(userName.charAt(0)); 
console.log(userName.indexOf("A"));
console.log(userName.length);

userName = userName.trim();
console.log(userName);

userName = userName.toLowerCase;

userName = userName.repeat(3);

let result = userName.startsWith(" ");
let result1 = userName.endsWith(" ");
let result2 = userName.includes(" ");

console.log(result);

if (result) {
    console.log("Your username can't begin with ' '")
}

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-","");
console.log(phoneNumber);

phoneNumber1 = phoneNumber1.padStar(15, "0");
phoneNumber2 = phoneNumber2.padEnd(15, "0");

