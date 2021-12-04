// Sábado, 05 de Junho de 2021
// ? :

const pointsUser = 999;

// Operação Ternária               Sim             Não          
const lvlUser = pointsUser >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(lvlUser);

// Usando If e Else: (mais linhas de código)
// if (pointsUser >= 1000) {
//     console.log(`Usuário VIP`);
// } else {
//     console.log(`Usuário Normal`);
// }

const userColor = null;
const defaultColor = userColor || 'Preto';

console.log(defaultColor);