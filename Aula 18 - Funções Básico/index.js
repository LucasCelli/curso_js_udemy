// Domingo, 16 de Maio de 2021

// Funções usam as mesmas regras para nomes de variáveis.
// Dentro dos parenteses da função podemos inserir parâmetros que serão chamados posteriormente.
// Podemos reutilizar os parâmetros da função.
function saudacao(nome) {
    console.log(`Olá, ${nome}.`);
}
saudacao('Lucas');
saudacao('Daniel');
saudacao('Joyce');

/// Funções podem ou não retornar valores
function saudacaoReturn(nome) {
    return `Olá, ${nome}.`;
}
const variavel = saudacaoReturn('Lucas');
console.log(variavel);

// Função que faz soma de dois valores.
// Tudo dentro da função está protegido e não pode ser acessado fora do escopo.
// function soma(x, y) // podemos definir os valores function soma(x = 2, y = 3)
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(`Soma igual a ${soma(4, 5)}`);

// Obtendo raiz quadrada de um número com uma função em uma variável
// Quando uma variável recebe uma função devemos finalizar com ;
const raiz = function (n) {
    return n ** 0.5;
};

console.log(`Raíz igual a ${raiz(16)}`);

// Maneira mais moderna de criar funções:
// Função usando Arrow Function
const raiz2 = (n) => {
    return n ** 0.5;
}
// Mas quando se tem apenas um item na função podemos simplificar dessa maneira:
const raiz3 = n => n ** 0.5;

console.log(`Raíz igual a ${raiz2(128)}`);
console.log(`Raíz igual a ${raiz3(512)}`);