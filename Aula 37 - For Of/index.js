// Sábado, 17 de Julho de 2021

// For Clássico - Usa com iteráveis (arrays, strings)
// For In - Retorna o índice ou chave (string, array ou objetos)
// For Of - Retorna o valor em si de iteráveis

const nome = ['Lucas', 'Daniel', 'João', 'Jucelene'];

// For clássico
// Vaiável de controle > condição > incremento
for (let i = 0; i < nome.length; i++){
    console.log('For Clássico', nome[i]);
}

// For In
// Variável de controle > indices
for (let i in nome){
    console.log('For In', nome[i]);
}

// For Of
// Variável de controle
// Objetos não são iteráveis!
for (let valor of nome){
    console.log('For Of', valor);
}

// For Each
nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

nome.forEach(nome => {
    console.log(nome);
});