// Domingo, 18 de Abril de 2021

// Minha solução: ARRAY :)
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let valor = new Array(varB, varC, varA);

console.log('Minha solução:',valor[0], valor[1], valor[2]); 

// Solução do Professor (ANTIGA):
// Cria uma variável temporária:
/* const tempVarA = varA;
varA = varB;
varB = varC;
varC = tempVarA;

console.log('(Antiga) Solução do Professor:', varA, varB, varC); */

// Solução do Professor (NOVA):
// Parecida com a minha ideia kkkkk: ARRAY
[varA, varB, varC] = [varB, varC, varA]
console.log('(Nova) Solução do Professor:', varA, varB, varC);