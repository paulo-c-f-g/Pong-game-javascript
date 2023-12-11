import { Ball } from "./components/ball.js";
import { Paddle } from "./components/paddle.js";
import { drawRect, drawLine} from "./components/draw.js";

export const canvas = document.getElementById("screen");
export const ctx = canvas.getContext('2d');

let scoreA = 0;
let scoreB = 0;



canvas.width = 600;
canvas.height = 400;

const ball = new Ball;
const playerOne = new Paddle(10, "#ffffff");
const playerTwo = new Paddle( canvas.width - 20, "#ffffff");


const showPoints =  () => {

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.font = ' 70px Arial';
    ctx.fillText( scoreA, canvas.width/2 - 150, 70);
    ctx.fillText(scoreB, canvas.width/2 + 150, 70);

}

const updatePoints = () => {

    if ( ball.x + ball.radius >= canvas.width){
        ball.x = canvas.width - 70;
        ball.vx = -5;
        scoreA++;
        return;
    }
    if( ball.x - ball.radius < 0 ) {
        ball.x = 70;
        ball.vx = 5;
        scoreB++;
        return;

    }

}

function update () {

    ball.update();
    ball.collideWithPaddle(playerOne.x, playerOne.y, playerOne.w, playerOne.h);
    ball.collideWithPaddle(playerTwo.x, playerTwo.y, playerTwo.w, playerTwo.h);

    playerOne.update();
    playerTwo.update();

    updatePoints();

}



function draw () {

    ctx.clearRect(0,0, canvas.width, canvas.height);

    //draw screen;
    drawRect(0,0, canvas.width, canvas.height);
    drawLine( canvas.width/2,0, canvas.width/2, canvas.height, 3 );
    
    //draw entities;
    ball.draw();
    playerOne.draw();
    playerTwo.draw();

    showPoints();

}

function loop () {

    requestAnimationFrame(loop);
    update();
    draw();

}

document.addEventListener( 'keydown', (event) => {

    switch (event.keyCode) {

        case 32:
            playerOne.v *=  -1;
            break;
        case 76:
            playerTwo.v *= -1;
            break;
    }

} )

requestAnimationFrame(loop);