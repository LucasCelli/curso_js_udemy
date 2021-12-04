/* Quarta-feira, 14 de Abril de 2021

Lucas Celli de Oliveira tem 24 anos, pesa 52 Kg
tem 1.79 de altura e seu IMC é ....
Lucas nasceu em 1996
 */

const nome = 'Lucas';
const sobrenome = 'Celli de Oliveira';
const idade = 25;
const peso = 52;
const altura = 1.79;

let imc; // Peso / (Altura * Altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = new Date().getFullYear() - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg
tem ${altura} de altura e seu IMC é ${imc}.
${nome} nasceu em ${anoNascimento} e sua idade`);