// Sábado, 04 de Dezembro de 2021
// IIFE -> Imediately Invoked Fucntion Expression

function qualquerCoisa(){
    console.log('Olá mundo, de novo!');
}
qualquerCoisa();

// Para executar uma função sem envolver o escopo global
// a envolvemos em parenteses:
(function(dia){ // <- Pode-se chamar parâmetros aqui
    console.log(`Olá mundo, antes! ${dia}`);
})(30); // Pode-se definir valores de parâmetros aqui
