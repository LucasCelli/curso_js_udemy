// Domingo, 18 de Abril de 2021

// Minha Solução KKKKKKKKKKKKK
function exercicioA(){
    const nome = prompt('Digite seu nome completo:');
    document.body.innerHTML += `Nome digitado: <strong>${nome}</strong><br/>`;
    document.body.innerHTML += `Seu nome tem <strong>${nome.replace(/ /g, '').length}</strong> letras.<br/>`;
    document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.slice(1, 2)}</strong><br/>`;
    document.body.innerHTML += `O primeiro índice da letra A em seu nome é: <strong>${nome.indexOf('a')}</strong><br/>`;
    document.body.innerHTML += `O último índice da letra A em seu nome é: <strong>${nome.lastIndexOf('a')}</strong><br/>`;
    document.body.innerHTML += `As últimas três letras do seu nome são: <strong>${nome.slice(-3)}</strong><br/>`;
    document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br/>`;
    document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br/>`;
    document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br/>`;
}

// Correção do Professor
function exercicio(){
    const nome = prompt('Digite seu nome completo:');
    document.body.innerHTML += `Nome digitado: <strong>${nome}</strong><br/>`; // Acerto
    document.body.innerHTML += `Seu nome tem <strong>${nome.replace(/ /g, '').length}</strong> letras.<br/>`; // Acerto / Eu me preocupei em não contar espaços!
    document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br/>`; // Erro / Podia só ter feito isso! Eu usei .slice() pra separar o 'u' KKKKKKK
    document.body.innerHTML += `O primeiro índice da letra A em seu nome é: <strong>${nome.indexOf('a')}</strong><br/>`; // Acerto
    document.body.innerHTML += `O último índice da letra A em seu nome é: <strong>${nome.lastIndexOf('a')}</strong><br/>`; // Acerto
    document.body.innerHTML += `As últimas três letras do seu nome são: <strong>${nome.slice(-3)}</strong><br/>`; // Acerto
    document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br/>`; // Acerto
    document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br/>`; // Acerto
    document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br/>`; // Acerto
}