// Sábado, 23 de Outubro de 2021

function getTimeSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });

}

const timer = document.querySelector('.timer');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');
let segundos = 0;
let timerCounter;

function startTimer() {
    timerCounter = setInterval(function () {
        segundos++;
        timer.innerHTML = getTimeSeconds(segundos);
    }, 1000)
}

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('play')) {
        timer.classList.remove('pausado');
        clearInterval(timerCounter);
        startTimer();
    } else if (el.classList.contains('pause')) {
        clearInterval(timerCounter);
        if (segundos != 0) {
            timer.classList.add('pausado');
        }
    } else if (el.classList.contains('clear')) {
        timer.classList.remove('pausado');
        clearInterval(timerCounter);
        timer.innerHTML = '00:00:00';
        segundos = 0;
    }
});