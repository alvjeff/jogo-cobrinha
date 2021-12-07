let canvas = document.getElementById('snake');
let context = canvas.getContext('2d') //renderiza o desenho que vai acontecer dentro do campo
let box = 32

let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = 'right'

function criarBG(){
    context.fillStyle = 'lightgreen'; //funciona como o background
    context.fillRect(0, 0, 16*box, 16*box);
}


//a cobrinha vai ser delocar da seguinte maneira: acrescentando um elemento a frente e retirando o ultimo
function criarCobrinha(){
    //for que vai percorrer todo o array
    for( let i = 0; i < snake; i++){
        context.fillStyle ='blue';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == 'right') snakeX += box //acrescentar box para o lado
    if(direction == 'left') snakeX -= box;
    if(direction == 'up') snakeY -= box
    if(direction == 'down') snakeY += box

    snake.pop()

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

let jogo = setInterval(iniciarJogo, 100)
