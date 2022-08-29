let nome = "";
let idade = "";

console.log(typeof nome, typeof idade);

//Está como string por conta de ter usado as "" para declarar o valor.

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");

// Notei que continuaram como string.

console.log(`Olá, ${nome}, você tem, ${idade}, anos`);
