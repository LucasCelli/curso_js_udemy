// Sábado, 05 de Junho de 2021

function getWeekDay(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
    }
}

const data = new Date();
let diaSemana = data.getDay();
const diaHoje = getWeekDay(diaSemana);
const diaOntem = getWeekDay(diaSemana-1);
const diaAmanha = getWeekDay(diaSemana+1);

console.log(`Hoje é ${diaHoje}.
Amanhã é ${diaAmanha} e ontem foi ${diaOntem}.`);