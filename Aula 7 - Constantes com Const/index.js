// Domingo, 11 de Abril de 2021

// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, USE CONST

// Não podemos declarar uma constante se a utilizar!

const titulo = 'Cálculo Básicos';
console.log(`${titulo}.`);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const dobroDoResultado = resultado * 2;

console.log(`O resultado de ${primeiroNumero} vezes ${segundoNumero} é: ${resultado}.
E o dobro desse resultado é: ${dobroDoResultado}.`);

// Verifica-se o tipo de variável com: typeof()
console.log('O primeiro número é do tipo: ', typeof(primeiroNumero));