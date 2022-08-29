let nome = undefined;
let idade = undefined;

//Porque eu não defini o valor da variável.

nome = "Diego";
idade = 27;

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

// Notei que se mantiveram como string.

console.log("Olá", nome, "você tem", idade, "anos");
