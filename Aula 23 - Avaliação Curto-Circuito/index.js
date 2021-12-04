// Quinta-feira, 03 de Junho de 2021

/***********************************************

&& → false && true → retorna o valor
|| → true || false → retorna o valor verdadeiro

************************************************

Valores FALSY

false (literalmente falso)
0
'' "" ``
null
undefined
NaN

***********************************************/

function falaOla(){
    return 'Olá';
}
const vaiExecutar = false; // Se for false vai returnar falso, mas se tiver algo aqui ele avalia como verdadeiro e procede com a função;
console.log(vaiExecutar && falaOla());

