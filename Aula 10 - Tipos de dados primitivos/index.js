// Quarta-feira, 14 de Abril de 2021

// String, Number, Undefined, Null, Boolean, Symbol

const nome1 = 'Lucas'; // String
const nome2 = "Lucas";
const nome3 = `Lucas`;

const num1 = 10;        // Number
const num2 = 5.66;

let sobrenome;          // Undefined (pois é uma variável sem valor, não aponta um local na memória)
                        // Não pode iniciar uma Const sem um valor.

let idade = null;       // Nulo, não ponta lugar nenhum na memória.

const aprovado = true;  // Só pode ser True ou False.

console.log('A Variável aprovado é do tipo:' ,typeof aprovado); // Typeof verifica o tipo de valor de uma variável.


// Tipo de dado passado por referência:
/* const arrayA = [1, 2, 3];
const arrayB = arrayA;

console.log(arrayA, arrayB);

arrayB.push(3);
console.log(arrayA, arrayB); */