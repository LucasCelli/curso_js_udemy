// Sábado, 04 de Dezembro de 2021
// Gerador simples usando Função de Fábrica
// Factory Function

function criaPersonagem() {
    return {
        // Getter para obter valores.
        get nome() {
            // Gera nome
            const nomes = ['Luke', 'Sammy', 'Jake', 'Terry', 'Andrew'];
            return nomes[(Math.floor(Math.random() * nomes.length))]
        },

        get raca() {
            // Gera raça
            const racas = ['humano', 'elfo', 'anão', 'goblin', 'metadílio'];
            return racas[(Math.floor(Math.random() * racas.length))]
        },

        get nivel() {
            // Gera nível
            return Math.floor(Math.random() * (20 - 1) + 1);
        },

        get retornaString(){
            return `${this.nome} é um ${this.raca} de nível ${this.nivel}`;
        }
    };
}


// Retorna dados
const personagem = criaPersonagem();
console.log(personagem.retornaString);