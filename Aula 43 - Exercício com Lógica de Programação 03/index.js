// Escreva uma função que recebe um número e retorne o seguinte:
// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e 5 = FizzBuzz
// Número NÃO divisível por 3 e 5 = Próprio Número
// Checar se é realmente um número
// Use a função com números de 0 a 100

function checaNumero(numero) {
    if (isNaN(numero)) {
        return `Não é um número!`;
    } else if (numero < 0 || numero > 100) {
        return `Insira um valor entre 0 e 100!`;
    } else if (numero % 3 === 0 && numero % 5 === 0) {
        return `FizzBuzz`;
    } else if (numero % 3 === 0) {
        return `Fizz`;
    } else if (numero % 5 === 0) {
        return `Buzz`;
    } else {
        return numero;
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, checaNumero(i))
    
}