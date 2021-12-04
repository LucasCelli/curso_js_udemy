// Javascript

function formularioEx() {
    const form = document.querySelector('.form');
    // Evento para impedir o recarregamento da página ao clicar em um input subtmit

    // Forma antiga de matar o evento.
    // form.onsubmit = function (evento){
    //   evento.preventDefault(); // Chama o evento da função e diz "Previna a ação padrão"
    // };

    const pessoas = [];


    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('#nome').value;
        const snome = form.querySelector('#snome').value;
        const peso = form.querySelector('#peso').value;
        const altura = form.querySelector('#altura').value;

        pessoas.push({
            nome,
            snome,
            peso,
            altura
        })

        const resultados = document.querySelector('.results');
        resultados.innerHTML += `<p>Nome: ${nome} / Sobrenome: ${snome} / Peso: ${peso} / Altura: ${altura}</p>`;

        console.log(pessoas);
    }


    form.addEventListener('submit', recebeEventoForm);



}
formularioEx();