// Domingo, 11 de Abril de 2021
// Exercício, que era pra ser apenas uma frase boba. 

// Define as variáveis
let snome = "Celli";// Let              Escopo Global: NÃO | Escopo Função: SIM | Escopo Bloco: SIM | Pode ser reatribuído: SIM
var nome = "Lucas"; // Var              Escopo Global: SIM | Escopo Função: SIM | Escopo Bloco: NÃO | Pode ser reatribuído: SIM
const idade = 24;   // Const            Escopo Global: NÃO | Escopo Função: SIM | Escopo Bloco: SIM | Pode ser reatribuído: NÃO

// Printa no console a frase usando as variáveis definidas acima
console.log(`Olá, meu nome é ${nome} ${snome} e eu tenho ${idade} anos!`);
console.log(window.nome);