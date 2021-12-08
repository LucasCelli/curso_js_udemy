// Segunda, 06 de Dezembro de 2021

// São diferentes das funções nomrais porque elas tem
// o recurso de "quase" pausar a execução do código.

// Lazy evaluation, pode ser bom para a performance.

// => Uma estratégia de avaliação que atrasa a avaliação
// de uma expressão até que seu valor seja necessário.

function* geradora1() {
    // Yield é quase um return, mas é diferente.
    // Cada vez que a função for chamada ela vai
    // retornar o Yield seguinte...

    // Código aqui...
    yield 'Valor 1';
    // Código aqui...
    yield 'Valor 2';
    // Código aqui...
    yield 'Valor 3';
}

const geradora = geradora1();

console.log(geradora.next().value);

// Podemos iterar isso:
for (let valor of geradora) {
    console.log(valor);
}

// Podemos fazer um gerador infinito...
function* contador() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const conta = contador();
console.log(conta.next().value);
console.log(conta.next().value);
console.log(conta.next().value);

// Gerador que delega tarefa para outro
function* gerador3() {
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4() {
    yield* gerador3();
    yield 3;
    yield 4;
    yield 5;
}
const gera4 = gerador4();

for (let valor of gera4) {
    console.log(valor);
}

// Gerador com outras funções
function* gerador5() {
    yield function () {
        console.log('Vim do Y1');
    };
    yield function () {
        console.log('Vim do Y2');
    };
}

const gera5 = gerador5();
const geradorPro1 = gera5.next().value;
const geradorPro2 = gera5.next().value;

geradorPro1();
geradorPro2();

// O return irá retornar o valor e fazer que que ela termine ali.
function gerador6() {
    yield ='Yield 1';
    return 'Return';
}
console.log(gerador6());