// Quinta-feira, 15 de Julho de 2021

// Minha solução para o exercício: FUNCIONA!
// const elementos = [
//     {tag: 'p', texto: 'Frase 1'},
//     {tag: 'div', texto: 'Frase 2'},
//     {tag: 'footer', texto: 'Frase 3'},
//     {tag: 'section', texto: 'Frase 4'}
// ];

// let selecionarClasse = document.querySelector('.container');

// for (let i = 0; i < elementos.length; i++) {
//     const elemento = elementos[i];

//     selecionarClasse.innerHTML += `<${elemento.tag}>${elemento.texto}</${elemento.tag}>`;
// }

// Solução do professor:

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container'); // Seleciona a query
const div = document.createElement('div'); // Cria um elemento div

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]; // Desestruturação dos objetos no array;
    let tagCriada = document.createElement(tag); // Cria um elemento com as tags
    let textoCriado = document.createTextNode(texto); // Cria um nó de texto
    tagCriada.appendChild(textoCriado); // Insere o nó de texto como filho de textoCriado
    div.appendChild(tagCriada);
}

container.appendChild(div);