// Sábado, 24 de Abril de 2021

let numA = 19;
let numB = 3.5;
let numC = 15.4836952;
let numD = 0.7;
let numF = 0.1;

// Convertendo para String
console.log(`O número ${numA} é do tipo "${typeof(numA)}" mas convertido para String ao invés de somar ele concatena com o ${numB}
Veja o resultado de ${numA}+${numB} concatenados: ${numA.toString() + numB}\n`); // 1+3.5 = 13.5

// Representação Binária do número
console.log(`O número ${numA} em binário é: ${numA.toString(2)}\n`);

// Arredondamento de números / Tirar casas decimais
console.log(`O número ${numC} é grande né? Veja ele com o "toFixed(2)" como fica: ${numC.toFixed(2)}\n`); // O número representa quantas casas decimais tem.

// Checando se um número é inteiro
console.log(`O número ${numC} é inteiro? R: ${Number.isInteger(numC)}\n`);

// Checando se um número é NaN (Not a Number)
let checaNaN = 'COVID' * numA;
console.log(`A palavra COVID*${numA} é um NaN? R: ${Number.isNaN(checaNaN)}\n`);

// O JavaScript usa o sistema de precisão IEEE 754-2008
console.log(`A soma de ${numD}+${numF} daria 0.8 né? Mas olha o resuldado do JavaScript: ${numD+numF+numF+numF}
Mas se eu usar "Number().toFixed(2)" ele dá certo? ${Number(numD+numF+numF+numF).toFixed(2)}
Ok, dá p/ usar "parseFloat().toFixed(2)" também!   ${parseFloat(numD+numF+numF+numF).toFixed(2)}\n`);