// Domingo, 23 de Maio de 2021
// Eae, Lucas, terminou de ouvir o PrimoCast?
// A Identidade Visual da Supremus deu certo? Quanto recebeu?

/* Primitivos (Imutáveis):
- String
- Number
- Boolean
- Undefined
- Null
* Bigint
* Symbol
*/


let a = 'A';
let b = a; // Repete o valor de 'a'
console.log(`${a}, ${b}`);

a = 'B'; // Altera o valor de 'a' mas 'b' ainda recebe o primeiro valor definido em 'a'
console.log(`${a}, ${b}`);

/* Referência (Mutável)
- Array
- Object
- Function
*/

// Valores passados por referencia
let c = [1, 2, 3];
let d = c; // Repete o valor de 'c'
//let d = [...c]; // Isso faria um "spread" de 'c' em 'd' e seria independente.
console.log(`${c}, ${d}`);

c.push(4); // Adiciona um valor no final de 'c'
console.log(`${c}, ${d}`); // 'c' e 'd' estão usando o mesmo valor, diferente dos primitivos.

d.pop(); // Remove um valor de 'd'
console.log(`${c}, ${d}`); // Mesmo removendo um valor de 'd' a variável 'c' também é afetada.

// As mesmas regras acima também valem para objetos.
