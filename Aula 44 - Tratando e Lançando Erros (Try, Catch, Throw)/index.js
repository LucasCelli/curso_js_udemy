// Domingo, 18 de Julho de 2021

// // Tenta
// try {
//     console.log(a);
// } catch (error) { // Erro
//     console.log('Oh não! Algo deu errado!');
// }

function soma(x, y){
    if (isNaN(x) || isNaN(y)){
        throw('Erro: Um dos valores inseridos não é um número!');
    }
    return x + y;
}

try {
    console.log(soma(4, 3));
    console.log(soma(4, 'w'));
} catch (error) {
    console.log(error)
}
