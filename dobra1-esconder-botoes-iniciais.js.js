const botoesIniciaisEsquerda = document.getElementById('botoes-iniciais-esquerda');
const botoesIniciaisDireita = document.getElementById('botoes-iniciais-direita');

const dobra1ImgContainer = document.querySelectorAll('.dobra1-img');

function esconderBotoesIniciais() {
    botoesIniciaisDireita.style.display = 'none';
    botoesIniciaisEsquerda.style.display = 'none';
    for (let i = 0; i < dobra1ImgContainer.length; i++) {
        dobra1ImgContainer[i].style.justifyContent = 'initial';
    }
}

botoesIniciaisEsquerda.addEventListener('click', function() {
    const displayEsquerda = window.getComputedStyle(containerDoTextoEsquerda);
    inserirTitulosEsquerdos(displayEsquerda);
    esconderTituloCentro();

})

botoesIniciaisDireita.addEventListener('click', function(){
    const displayDireita = window.getComputedStyle(containerDoTextoDireita);
    inserirTitulosDireitos(displayDireita);
    esconderTituloCentro();
    


})