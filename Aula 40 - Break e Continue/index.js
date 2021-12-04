// Sábado, 17 de Julho de 2021
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2!');
        continue;
    }

    if (numero === 7) {
        console.log('Número 7 encontrado!');
        break;
    }
    console.log(numero);
}