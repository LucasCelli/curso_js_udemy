// Segunda, 06 de Dezembro de 2021

// Recursividade é simplesmente uma função que se
// chama de volta, devemos nos atentar para quando
// ela deve parar de se chamar de volta.

function recursiva(max) {
    console.log(max);
    if (max >= 100000) return;
    max++;
    recursiva(max)
}

recursiva(0);

// Testando até 11289 foi onde obtive erro no código:
// RangeError: Maximum call stack size exceeded

// Então 11288 é o limite galera :D
// Brincadeira...