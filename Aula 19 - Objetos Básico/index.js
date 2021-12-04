// Domingo, 28 de Maio de 2021

// Usando const não podemos reatribuir valores, exemplo: array = [4,5,6]
// Mas podemos usar array.push para manipular os valores mesmo sendo const, só não podemos reatribuí-los.
const array = [1, 2, 3]

// Ao invés de fazer isso e repetir códigos seria mais viável criar um objeto para este grupo:
const nome01 = 'Lucas';
const sobrenome01 = 'Celli';
const idade01 = '24';

const nome02 = 'Daniel';
const sobrenome02 = 'Oliveira';
const idade02 = '16';

// Quando se cria um objeto usa-se {chaves} e quando se cria uma array usa-se [colchetes]
// Isso é um objeto literal
// Esse método funciona, mas ainda seria necessário criar 1000 desses caso houvesse 1000 pessoas! Não é viável.
const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Celli',
    idade: 24
};

console.log(`A pessoa 0 chama-se ${pessoa1.nome} ${pessoa1.sobrenome} e tem ${pessoa1.idade} anos.\n`);

// Podemos criar o objeto usando funções
function criaPessoa(nome, sobrenome, idade) {
    // Quando os valores serão iguais tipo: nome: nome, sobrenome: sobrenome.... podemos reduzir e colocar apenas o parâmetro.
    return {
        nome,
        sobrenome,
        idade
    };
}
const pessoaCriada = criaPessoa('Lucas', 'Celli', 24); // Isso aqui já gera uma pessoa usando argumentos dos parâmetros da função criaPessoa
const pessoaCriada2 = criaPessoa('Daniel', 'Oliveira', 16); // Olha só, agora da pra criar várias pessoas
const pessoaCriada3 = criaPessoa('Joyce', 'Celli', 18); // sem ter que ficar repetindo os blocos.
const pessoaCriada4 = criaPessoa('João', 'Pereira', 60);
const pessoaCriada5 = criaPessoa('Jucelene', 'Maria', 39);

console.log(`A pessoa 1 chama-se ${pessoaCriada.nome} ${pessoaCriada.sobrenome} e tem ${pessoaCriada.idade} anos.
A pessoa 2 chama-se ${pessoaCriada2.nome} ${pessoaCriada2.sobrenome} e tem ${pessoaCriada2.idade} anos.
A pessoa 3 chama-se ${pessoaCriada3.nome} ${pessoaCriada3.sobrenome} e tem ${pessoaCriada3.idade} anos.
A pessoa 4 chama-se ${pessoaCriada4.nome} ${pessoaCriada4.sobrenome} e tem ${pessoaCriada4.idade} anos.
A pessoa 5 chama-se ${pessoaCriada5.nome} ${pessoaCriada5.sobrenome} e tem ${pessoaCriada5.idade} anos.`);

// Criando objetos com métodos (funções) dentro deles
const pessoaObj = {
    nome: 'Lucas',
    snome: 'Celli',
    idade: 24,

    fala() {
        console.log(`Olá, meu nome é ${this.nome} ${this.snome} e eu tenho ${this.idade} anos.`);
    }
}

pessoaObj.fala();