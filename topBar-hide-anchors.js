const topBarEsquerda = document.getElementById('topbar-esquerda');
const topBarDireita = document.getElementById('topbar-direita');

function alargarTopBar() {
    if (sideSwitch.classList.contains('esquerda')) {
        topBarEsquerda.style.width = '80%';
        topBarDireita.style.width = '40%';


    } else if (sideSwitch.classList.contains('direita')) {
        topBarEsquerda.style.width = '40%';
        topBarDireita.style.width = '80%';


    }

}

const ancorasEsquerda = document.querySelectorAll('.ancora-esquerda');
const ancorasDireita = document.querySelectorAll('.ancora-direita');

const h2ProvEsquerda = document.getElementById('topbar-esquerda-prov');
const h2ProvDireita = document.getElementById('topbar-direita-prov');

function topBarHideAnchors() {

    h2ProvEsquerda.style.opacity = '0';
    h2ProvDireita.style.opacity = '0';
    if (sideSwitch.classList.contains('esquerda')) {
        for (let i = 0; i < ancorasEsquerda.length; i++) {
            ancorasEsquerda[i].style.opacity = '1';
            ancorasDireita[i].style.opacity = '0';
        }
        



    } else if (sideSwitch.classList.contains('direita')) {
        for (let i = 0; i < ancorasEsquerda.length; i++) {
            ancorasEsquerda[i].style.opacity = '0';
            ancorasDireita[i].style.opacity = '1';

        }



    }

}