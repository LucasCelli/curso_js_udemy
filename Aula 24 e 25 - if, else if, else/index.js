// Quinta-feira, 03 de Junho de 2021

// If pode ser usado sozinho.
// Else if ou Else não podem ser usados sozinhos.
// Else if podem ser vários

// Checando horário para mandar saudação
let hoje = new Date();
let hora = hoje.getHours();

if (hora >= 0 && hora <= 11) {
    console.log(`Bom dia!`);
} else if (hora >= 12 && hora <= 17) {
    console.log(`Boa tarde!`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite!`);
} else {
    console.log(`Olá, usuário!`);
}

console.log(`Agora são ${hora} horas :)`);