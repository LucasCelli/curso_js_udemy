// Domingo, 9 de Maio de 2021

function numInfo() {
    const numero = Number(document.getElementById('numero').value);
    const numeroDigitado = document.getElementById('numeroDigitado');
    const texto = document.getElementById('texto');

    numeroDigitado.innerHTML = numero;
    texto.innerHTML = `<p>Raíz quadrada de ${numero} é: <strong>${numero ** 0.5}</strong></p>`;
    texto.innerHTML += `<p>O valor ${numero} é Inteiro? <strong>${Number.isInteger(numero)}</strong></p>`;
    texto.innerHTML += `<p>O valor ${numero} é NaN? <strong>${Number.isNaN(numero)}</strong></p>`;
    texto.innerHTML += `<p>${numero} arredondado para baixo: <strong>${Math.floor(numero)}</strong></p>`;
    texto.innerHTML += `<p>${numero} arredondado para cima: <strong>${Math.ceil(numero)}</strong></p>`;
    texto.innerHTML += `<p>${numero} com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;
}