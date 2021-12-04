// Domingo, 24 de Outubro de 2021

// Declaração Clássica

// Declaração de função (Function Hoisting)
// Todas decarações serão elevadas pelo motor JS
// Poderaria declarar a função após usa-la e vice-versa
function falaOi(){
    console.log('Executada normalmente.');
}
falaOi();

// Funções são First-Class Objects
// Significa que a função pode ser tratada em JS como dados
// Function expression
const souUmDado = function(){
    // Aqui estou fazendo uma constante receber
    // uma função como um dado, e está tudo bem.

    // ISSO É PODEROSO.
    // Posso fazer essa constante executar uma função
    // e usar o valor disso em outra função depois!
};

// Arrow Function
// É uma Function Expression só que mais curta.

const arrow = () => {
    console.log('Executada em Arrow.');
};
arrow();

// Função Anônima (Passada como Dado)
setInterval(function(){ // A função foi passada para enviar um dado.
}, 1000);
clearInterval();

// Função como Método de Objeto
const obj = {
    falar() {
        console.log('Função passada como Objeto.');
    }
};
obj.falar();