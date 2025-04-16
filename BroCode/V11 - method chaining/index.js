//METHOD CHAINING - Calling one method after another in one continuous line of code

//sem o method chaining

let userName = window.prompt("Enter your name: "); // Solicita ao usuário que insira seu nome
usserName = userName.trim(); // Remove espaços em branco no início e no fim do nome

let letter = userName.charAt(0); // Pega a primeira letra do nome
letter = letter.toUpperCase(); // Converte a primeira letra para maiúscula

let extraChars = userName.slice(1); // Pega o restante do nome, excluindo a primeira letra
extraChars = extraChars.toLowerCase(); // Converte o restante do nome para minúsculas

usserName = letter + extraChars; // Junta a primeira letra maiúscula com o restante do nome em minúsculas

console.log(userName); // Exibe o nome formatado no console

//com o method chaining

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase(); // Remove espaços, pega a primeira letra e converte para maiúscula, pega o restante e converte para minúsculas, tudo em uma linha