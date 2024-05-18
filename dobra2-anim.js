const dobraEsquerda = document.getElementById('dobra-esquerda');
const dobraDireita = document.getElementById('dobra-direita');

function dobra2Mostrar() {
    if (sideSwitch.classList.contains('esquerda')) {
        dobraEsquerda.style.display = 'flex';
        setTimeout(() => {
            dobraEsquerda.style.opacity = '1';
        }, 0); // Triggering the opacity change after a short delay
        dobraDireita.style.display = 'none';
        dobraDireita.style.opacity = '0';
    } else if (sideSwitch.classList.contains('direita')) {
        dobraEsquerda.style.display = 'none';
        dobraEsquerda.style.opacity = '0';
        dobraDireita.style.display = 'flex';
        setTimeout(() => {
            dobraDireita.style.opacity = '1';
        }, 0); // Triggering the opacity change after a short delay
    }
}
