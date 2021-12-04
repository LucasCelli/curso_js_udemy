// Domingo, 02 de Maio de 2021
// Math.
let numA = 9.34;
let numB = Math.floor(numA);
let numC = Math.ceil(numA);
let numD = Math.round(numA);
let numE = 9;

// Arredondar para baixo usando Math
console.log(`O valor de ${numA} com Math.floor() é ${numB}   // Arredonda pra baixo`);
console.log(`O valor de ${numA} com Math.ceil() é ${numC}  // Arredonda pra cima`);
console.log(`O valor de ${numA} com Math.round() é ${numD} // Arredonda pro mais próximo`);

// Pegar o maior número de uma Array
const arrayA = [1, 5, 6, -9, 40, 89, 45.8, 45.2, -14, 34];
let maiorNum = Math.max(arrayA);
let menorNum = Math.min(arrayA);

console.log(`O maior número de ${arrayA} é ${maiorNum}.`);

// Gerar números aleatórios, ele gera um valor entre 0 e 1
// Usa-se o Math.round ou Math.floor para arredondar o valor.
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(`Número aleatório: ${aleatorio}`);

// Objeto para potenciação
console.log(`Usando Math.pow: ${Math.pow(2, 10)}`);
console.log(`Usando operador **: ${2 ** 10}`);

// Pegar a raiz quadrada de um número
let raiz = numE ** 0.5; // Poderia ser: let raiz = numE ** (1/2);
console.log(`Raíz quadrada de ${numE} é ${raiz}`);

// Podemos dividir um número por 0
// Em outras linguagens isso geraria um erro. Mas em JS temos o 'Infinity'
console.log(`O resultado de 100/0 é ${100/0}`);