const darkOverlay = document.getElementById('dark-overlay');

let coordenadas;

window.addEventListener('resize', function() {
    getLeftDivPosition();
})

function getLeftDivPosition() {
    let coordenadas = containerImagemEsquerda.getBoundingClientRect();
    console.log(coordenadas)
    const altura = coordenadas.height;
    const largura = coordenadas.width;
    console.log('a altura e largura, respectivamente: ' + altura, largura)
    positionDarkOverlay(altura, largura);
}

function positionDarkOverlay(a, l) {
    darkOverlay.style.height = a + 'px';
    darkOverlay.style.width = l +'px';
}
