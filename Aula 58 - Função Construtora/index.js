// Domingo, 05 de Dezembro de 2021

// Função fábrica -> Fabrica Objetos
// Função construtora -> Constroi objetos
// Função construtora -> Sempre inicia com letra Maiúscula (new Object)
// São moldes para gerar novos objetos.

// Criando...

// É uma convenção criar funções construtoras com
// nome em letra maiúscula, embora não seja uma regra.
function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados:

    // Supondo que temos um ID privado...
    // Usamos const ou let ao invés de this.
    const id = 1;

   // Outra diferença das construtoras é que não usamos
   // a vírgula, aqui usamos a sintaxe normal.

   // Atributos ou métodos públicos:
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () =>{
        console.log(`Meu nome é ${nome}`);
    };
}

const p1 = new Pessoa('Lucas', 'Celli');
const p2 = new Pessoa('Daniel', 'Celli');

console.log(p1);
p2.metodo();