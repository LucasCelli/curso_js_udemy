// Domingo, 09 de Maio de 2021
const nomes = ['Lucas', 'Daniel', 'Joyce', 'João', 'Jucelene'];

// Saber tamanho da array
console.log(`${nomes}`);
console.log(`Tamanho: ${nomes.length}\n`);

// Adicionar itens no fim da Array
nomes.push('Tony');
nomes.push('Victor');
console.log(`${nomes}`);
console.log(`Novo tamanho: ${nomes.length}\n`);

// Adicionar itens no começo da Array
nomes.unshift('Gilmar');
console.log(`${nomes}`);
console.log(`Novo tamanho: ${nomes.length}\n`);

// Remover itens do fim da Array
// Ele salva o valor que foi removido
nomes.pop();
console.log(`${nomes}`);
console.log(`Novo tamanho: ${nomes.length}\n`);

// Remover itens do começo da Array
// Ele salva o valor que foi removido
nomes.shift();
console.log(`${nomes}`);
console.log(`Novo tamanho: ${nomes.length}\n`);

// Apagar item da array
delete nomes[1];
console.log(`${nomes}`);
