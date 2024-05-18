const containerImagemEsquerda = document.getElementById('containerImagemEsquerda')
const containerImagemDireita = document.getElementById('containerImagemDireita')

const dobra1Img = document.querySelectorAll('.dobra1-img');
console.log(dobra1Img)


function alargarContainer() {
    if (sideSwitch.classList.contains('esquerda')) {
        containerImagemEsquerda.style.width = '90%';
        containerImagemDireita.style.width = '65%';
        // imagemEsquerda.style.right = '-50px'


    } else if (sideSwitch.classList.contains('direita')) {
        containerImagemEsquerda.style.width = '65%';
        containerImagemDireita.style.width = '90%';


    }
}