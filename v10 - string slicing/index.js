//string slicing = creating a substring from a portion of another string

//string.slice(start, end);

const fullName = "MAGNUS DAMORA";

let firstName = fullName.slice(0, 2);
console.log(firstName);

let fisrtChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

//deixar mais dinamico

let firstName1 = fullName.slice(0, fullName.indexOf(""));
let lastName1 = fullName.slice(0, fullName.indexOf("") + 1);

//mais exemplos

const email = "magnus@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extenstion = email.slice(email.indexOf("@") + 1);

