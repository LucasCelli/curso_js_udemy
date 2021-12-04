// Segunda-feira, 19 de Julho de 2021

function mostraHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
    hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 5000);

setTimeout(function () {
    console.log('Olá :D')
}, 5000);