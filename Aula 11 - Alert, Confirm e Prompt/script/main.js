// Sexta-feira, 16 de Abril de 2021
// Window, é onde fica tudo, inclusive o documento.

// Alert
// Exibe uma mensagem na tela
//window.alert('Olá!');

// Confirm
// Retorna um valor Boolean
//window.confirm('Deseja cancelar?');

// Prompt
// Cria um input para o usuário informar algo
//window.prompt('Digite seu nome:');

function calcPrompt() {
    let valorA = prompt('Digite um número:');
    let valorB = prompt('Digite outro número:');
    valorA = Number(valorA);
    valorB = Number(valorB);
    let operacao = prompt('Digite a operação (+ - * /):')
    
    let resultado;

    if (operacao == '+') {
        resultado = valorA + valorB;
    } else if (operacao == '-') {
        resultado = valorA - valorB;
    } else if (operacao == '*') {
        resultado = valorA * valorB;
    } else if (operacao == '/') {
        resultado = valorA / valorB;
    }

    alert(`O resultado desta operação (${valorA+operacao+valorB}) é: ${resultado}`);
}