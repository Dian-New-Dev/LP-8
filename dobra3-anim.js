const dobra3Esquerda = document.getElementById('dobra3-esquerda');
const dobra3Direita = document.getElementById('dobra3-direita');

const dobra3 = document.getElementById('black-to-white');

function dobra3Mostrar() {
    dobra3.style.backgroundColor = '#f0f0f0';

    if (sideSwitch.classList.contains('esquerda')) {
        dobra3Esquerda.style.display = 'flex';
        setTimeout(() => {
            dobra3Esquerda.style.opacity = '1';
        }, 0); // Triggering the opacity change after a short delay
        dobra3Direita.style.display = 'none';
        dobra3Direita.style.opacity = '0';
    } else if (sideSwitch.classList.contains('direita')) {
        dobra3Esquerda.style.display = 'none';
        dobra3Esquerda.style.opacity = '0';
        dobra3Direita.style.display = 'flex';
        setTimeout(() => {
            dobra3Direita.style.opacity = '1';
        }, 0); // Triggering the opacity change after a short delay
    }
}
