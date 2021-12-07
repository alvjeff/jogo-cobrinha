let canvas = document.getElementById('snake');
let context = canvas.getContext('2d') //renderiza o desenho que vai acontecer dentro do campo
let box = 32

function criarBG(){
    context.fillStyle = 'lightgreen'; //funciona como o background
    context.fillRect(0, 0, 16*box, 16*box)
}

criarBG()