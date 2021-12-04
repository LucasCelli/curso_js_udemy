// Sexta-feira, 16 de Julho de 2021
// For in → Lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Celli',
    idade: 25
};

for (const key in pessoa) {
    console.log(key, pessoa[key]);
}



// const frutas = ['Banana', 'Maçã', 'Morango', 'Uva', 'Pera'];

// for in
// for (let i in frutas) {
//     console.log(frutas[i])
// }

// for clássico
// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }