let canvas = document.getElementById('snake');
let context = canvas.getContext('2d') //renderiza o desenho que vai acontecer dentro do campo
let box = 32

let snake = [];
snake[0] = {
    x: 8*box,
    y: 8*box
}
function criarBG(){
    context.fillStyle = 'lightgreen'; //funciona como o background
    context.fillRect(0, 0, 16*box, 16*box);
}


//a cobrinha vai ser delocar da seguinte maneira: acrescentando um elemento a frente e retirando o ultimo
function criarCobrinha(){
    //for que vai percorrer todo o array
    for( let i = 0; i < snake; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


criarBG();

