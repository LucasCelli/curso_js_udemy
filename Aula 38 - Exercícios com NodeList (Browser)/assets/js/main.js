const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const corBackgroundBody = estilosBody.backgroundColor;

for (const estiloParagrafo of p) {
    estiloParagrafo.style.backgroundColor = corBackgroundBody;
    estiloParagrafo.style.color = '#FFF';
    estiloParagrafo.style.padding = '10px';
}
