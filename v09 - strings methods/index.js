let userName = "Ana"; // Define a variável userName com o valor "Ana"

console.log(userName.charAt(0)); // Exibe a primeira letra de userName
console.log(userName.indexOf("A")); // Exibe a posição da primeira ocorrência de "A" em userName
console.log(userName.length); // Exibe o comprimento de userName

userName = userName.trim(); // Remove espaços em branco no início e no fim de userName
console.log(userName); // Exibe userName após a remoção dos espaços

userName = userName.toLowerCase(); // Converte userName para minúsculas 
userName = userName.repeat(3); // Repete userName 3 vezes

let result = userName.startsWith(" "); // Verifica se userName começa com um espaço
let result1 = userName.endsWith(" "); // Verifica se userName termina com um espaço
let result2 = userName.includes(" "); // Verifica se userName contém um espaço

console.log(result); // Exibe o resultado da verificação se userName começa com um espaço

if (result) {
    console.log("Your username can't begin with ' '"); // Exibe uma mensagem se userName começar com um espaço
}

let phoneNumber = "123-456-7890"; // Define a variável phoneNumber com o valor "123-456-7890"
phoneNumber = phoneNumber.replaceAll("-", ""); // Remove todos os traços de phoneNumber
console.log(phoneNumber); // Exibe phoneNumber após a remoção dos traços

phoneNumber1 = phoneNumber1.padStart(15, "0"); // Preenche phoneNumber1 à esquerda até ter 15 caracteres, usando "0"
phoneNumber2 = phoneNumber2.padEnd(15, "0"); // Preenche phoneNumber2 à direita até ter 15 caracteres, usando "0"