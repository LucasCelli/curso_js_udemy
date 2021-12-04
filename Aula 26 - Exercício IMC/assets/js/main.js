
const form = document.querySelector('.form');

form.addEventListener('submit', function (e){
    // Previne a ação padrão do comando Submit
    e.preventDefault();
    
    // Identifica os elementos que enviam os valores
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // Captura os valores enviados nos elementos acima
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // Chama o valor da função getImc
    const imc = getImc(peso, altura);

    // Chama o valor da função getNivelImc
    const nivelImc = getNivelImc(imc);

    // Se peso NÃO for um valor válido exibe um erro.
    if (!peso){
        setResultado(`Peso Inválido!`, false);
        return;
    }

    if (!altura){
        setResultado(`Altura Inválida!`, false);
        return;
    }
    

    // Exibe na mensagem de resultado o IMC calculado acima
    setResultado(`Seu IMC é ${imc} e é considerado ${nivelImc}.`, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', '	Obesidade Grau 1', '	Obesidade Grau 2', '	Obesidade Grau 3'];

    // If muito pequeno pode ser escrito em apenas 1 linha desse modo:
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / (altura ** altura);
    return imc.toFixed(2);
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = null;

    const mensagem = document.createElement('p'); // Cria um elemento p (parágrafo).
    mensagem.innerHTML = msg; // Exibe a mensagem no HTML
    resultado.appendChild(mensagem); // Insere a mensagem como um elemento filho

    if (isValid){
        mensagem.classList.add('mensagem-aviso');
    } else{
        mensagem.classList.add('erro');
    }
}

