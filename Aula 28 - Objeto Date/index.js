// Sábado, 05 de Junho de 2021

// Isso é uma função construtora, ela tem várias funções herdadas.
const data = new Date();

console.log(data.toDateString());
console.log(`Dia: ${data.getDate()}`);
console.log(`Mês: ${data.getMonth()+1}`);                 // Começa do 0
console.log(`Ano: ${data.getFullYear()}`);
console.log(`Hora: ${data.getHours()}`);
console.log(`Minuto: ${data.getMinutes()}`);
console.log(`Segundo: ${data.getSeconds()}`);
console.log(`Milisegundo: ${data.getMilliseconds()}`);
console.log(`Dia da Semana: ${data.getDay()}`);         // 0 = Domingo

// Data atual contada em MS
console.log(`Hora: ${Date.now()}`);

function zeroEsq(num){
    return num >= 10 ? num : `0${num}`;

}
function formatarData(data){
    const dia = zeroEsq(data.getDate());
    const mes = zeroEsq(data.getMonth()+1);
    const ano = zeroEsq(data.getFullYear());
    const hora = zeroEsq(data.getHours());
    const min = zeroEsq(data.getMinutes());
    const seg = zeroEsq(data.getSeconds());
    const diaSemana = zeroEsq(data.getSeconds());

    return `${diaSemana}, ${dia} de ${mes} de ${ano}, às ${hora} horas, ${min} minutos e ${seg} segundos.`;
}

const dataAtual = formatarData(data);
console.log(dataAtual);