// Quinta-feira, 15 de Abril de 2021

// Operadores Aritméticos
const valorA = 10;
const valorB = 5;
const valorC = 3;

// + 
// Faz adição e concatenação.
// Se houver uma String na fórmula ele realiza concatenação. Se for apenas números ele fará adição.
console.log(`Soma: de ${valorA}+${valorB} = ${valorA + valorB}`);

// **
// Faz a potenciação de números.
console.log(`Potência: de ${valorA}^${valorC} = ${valorA ** valorC}`);

// %
// Retorna o resto da divisão.
console.log(`Resto: de ${valorA}:${valorC} = ${valorA % valorC}`);
console.log(`Resto: de ${valorA}:${valorB} = ${valorA % valorB}`);

// ++
// Incrementa o valor em 1
// Pode ser tanto Pós quanto Pré indicado.
let contador = 1;
contador++; // Pós: Executa a operação e depois incrementa o valor.
++contador; // Pré: Incrementa o valor e depois executa a operação.
console.log(`Contador com valor 1++ = ${contador}.`);

// --
// Decrementa o valor em 1
// Mesma coisa do de Incremento, só muda que esse subtrai.

// Incrementando o valor por ele mesmo:
// Pode ser feito com outros operadores!
contador += 2; // Próprio valor + 2
console.log(`Incrementando o contador + contador + 2: ${contador}.`);

contador *= 2; // Próprio valor + 2
console.log(`Incrementando o contador * contador + 2: ${contador}.`);

// NaN
// Not a Number
const texto = 'Lucas';
let numeroNumber = 10;
let numeroString = '10';
console.log(`Olha isso: ${texto * numeroNumber}.: Not a Number`);

// Convertendo String pra Number

// ParseInt
console.log(`Número String (antes do parseInt): ${typeof numeroString}.`);
numeroString = parseInt(numeroString);
console.log(`Número String (depois do parseInt): ${typeof numeroString}.`);
numeroString = numeroString.toString(); // Só voltando a String...

// ParseFloat
// Converte para número com casas decimais.

// Number
// O JavaScript se vira e resolve se é um número ou não.
numeroString = Number(numeroString);
console.log(`Número String (depois do Number): ${typeof numeroString}.`);