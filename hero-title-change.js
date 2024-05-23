const containerDoTextoEsquerda = document.getElementById('texto-esquerda');
const containerDoTextoDireita = document.getElementById('texto-direita');
const imagemEsquerda = document.getElementById('left');
const imagemDireita = document.getElementById('right');

const elementosEsquerda = document.querySelectorAll('.elementos-esquerda');

const elementosDireita = document.querySelectorAll('.elementos-direita');

const sideSwitch = document.getElementById('side-switch');

imagemEsquerda.addEventListener('click', function(){
    const displayEsquerda = window.getComputedStyle(containerDoTextoEsquerda);
    inserirTitulosEsquerdos(displayEsquerda);
    esconderTituloCentro();

})

function inserirTitulosEsquerdos(displayEsquerda) {
    if (displayEsquerda.display === 'none') {
        containerDoTextoEsquerda.style.display = 'block'
        setTimeout(function() {
            for (let i = 0; i < elementosEsquerda.length; i++) {
                elementosEsquerda[i].classList.add('mostrar');
            }

        }, 10);

        containerDoTextoDireita.style.display = 'none'
        for (let i = 0; i < elementosDireita.length; i++) {
            elementosDireita[i].classList.remove('mostrar');
        }


        sideSwitch.setAttribute('class', 'esquerda')
        alargarContainer();
        alargarTopBar();
        topBarHideAnchors();
        dobra2Mostrar();
        dobra3Mostrar();
        esconderBotoesIniciais();

    }
}

imagemDireita.addEventListener('click', function(){
    const displayDireita = window.getComputedStyle(containerDoTextoDireita);
    inserirTitulosDireitos(displayDireita);
    esconderTituloCentro();
    


})

function inserirTitulosDireitos(displayDireita) {
    if (displayDireita.display === 'none') {
        containerDoTextoDireita.style.display = 'block'
        setTimeout(function() {
            for (let i = 0; i < elementosDireita.length; i++) {
                elementosDireita[i].classList.add('mostrar');
            }

        }, 10);

        containerDoTextoEsquerda.style.display = 'none'
        for (let i = 0; i < elementosEsquerda.length; i++) {
            elementosEsquerda[i].classList.remove('mostrar');
        }

        sideSwitch.setAttribute('class', 'direita');
        alargarContainer();
        alargarTopBar();
        topBarHideAnchors();
        dobra2Mostrar();
        dobra3Mostrar();
        esconderBotoesIniciais();

    }
}

function esconderTituloCentro() {
    const h1Padrao = document.getElementById('h1-padrao');
    h1Padrao.style.display = 'none'
}