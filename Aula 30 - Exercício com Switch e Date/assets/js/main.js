// Declaração das variáveis
const today = new Date();
let todayTxt = today.getDay();
const todayNum = today.getDate();
let monthTxt = today.getMonth();
const year = today.getFullYear();
const time = today.getHours()+':'+today.getMinutes();

// Define o dia
switch(todayTxt){
    case 0:
        todayTxt = 'Domingo';
        break;
    case 1:
        todayTxt = 'Segunda-feira';
        break;
    case 2:
        todayTxt = 'Terça-feira';
        break;
    case 3:
        todayTxt = 'Quarta-feira';
        break;
    case 4:
        todayTxt = 'Quinta-feira';
        break;
    case 5:
        todayTxt = 'Sexta-feira';
        break;
    case 6:
        todayTxt = 'Sábado';
        break;
    default:
        todayTxt = null;
}

// Define o mês
switch(monthTxt){
    case 0:
        monthTxt = 'janeiro';
        break;
    case 1:
        monthTxt = 'fevereiro';
        break;
    case 2:
        monthTxt = 'março';
        break;
    case 3:
        monthTxt = 'abril';
        break;
    case 4:
        monthTxt = 'maio';
        break;
    case 5:
        monthTxt = 'junho';
        break;
    case 6:
        monthTxt = 'julho';
        break;
    case 7:
        monthTxt = 'agosto';
        break;
    case 8:
        monthTxt = 'setembro';
        break;
    case 9:
        monthTxt = 'outubro';
        break;
    case 10:
        monthTxt = 'novembro';
        break;
    case 11:
        monthTxt = 'dezembro';
        break;
    default:
        monthTxt = null;
}

// Seleciona o seletor HTML e insere os valores
let data1 = document.querySelector('.modoHard');
data1.innerHTML = `${todayTxt}, ${todayNum} de ${monthTxt} de ${year} | ${time}`;

let data2 = document.querySelector('.modoEasy');

data2.innerHTML = today.toLocaleDateString('pt-br', {dateStyle: 'full'});

// Checagem no console.log
console.log(todayTxt, todayNum, monthTxt, year, time);