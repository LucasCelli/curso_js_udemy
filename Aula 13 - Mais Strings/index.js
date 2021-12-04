// Domingo, 18 de Abril de 2021

// Dá pra 'escapar' um caractere com a barra invertida.
let umaString = 'Um \'texto\'';
console.log(umaString);

// Pra aparecer UMA barra invertida temos que usar DUAS pra não dar erro.
let duasString = 'Um \\texto';
console.log(duasString);

// Strings são indexadas, elas são iteráveis.
// Podemos pegar apenas um valor de dentro da string, vou mostrar na tela apenas o X que representa a casa 5:
//               [01234567]
let tresString = 'Um texto';
console.log(tresString[5]);

// Também podemos usar o .charArt()
console.log(tresString.charAt(5));

// Podemos concatenar com o .concat()
console.log(tresString.concat(' com mil palavras.'));

// Podemos pesquisar por um índice com .indexOf()
console.log(tresString.indexOf('texto'));
// Podemos pesquisar a partir de um ponto
console.log(tresString.indexOf('texto', 4));
// Também existe o .lastIndexOf, que começa a buscar a partir do fim
console.log(tresString.lastIndexOf('texto', 4));

// Podemos usar expressões regulares
console.log(tresString.match(/[a-z]/g)); // Mostra as letras minúsculas em uma Array por causa da flag g

// Podemos usar o .search() que é similar ao .indexOf() mas este aceita expressões regulares
console.log(tresString.search(/[a-z]/g));

// Podemos substituir algo também, com ou sem expressão regular
console.log(tresString.replace('Um', 'Outro')); // Estou trocando a palavra 'Um' pela palavra 'Outro'
console.log(tresString.replace(/Um/, 'Outro')); // Estou trocando a palavra 'Um' pela palavra 'Outro', funciona com Expressão regular
console.log(tresString.replace(/t/g, '#')); // Podemos usar a flag g para trocar todas as letras da pesquisa

// Podemos saber o tamanho de uma String com .lenght
console.log(tresString.length);

// Podemos fatiar apenas uma parte da String com .slice()
console.log(tresString.slice(3, 8));

// Podemos dividir a String em uma array com .split()
console.log(tresString.split('t'));

// Podemos deixar TUDO EM MAIÚSCULO
console.log(tresString.toUpperCase());

// Podemos deixar tudo em minúsculo
console.log(tresString.toLowerCase());