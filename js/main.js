const canvas = document.getElementById("screen");
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

const paddleSpeed = 5;

const drawRect = (x, y, w, h, color = "#000") => {

    ctx.fillStyle = color;
    ctx.fillRect( x, y, w, h);

};

const drawLine = (x0, y0, x1, y1, w, color = "#ffffff") => {


    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = w;
    ctx.strokeStyle = color;
    ctx.stroke();


}

const drawCircle = (x, y, radius, color) => {

    ctx.beginPath();
    ctx.arc( x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

}

class Ball {

    constructor(){

        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.vx = 5;
        this.vy = 5;
        this.radius = 10;
        this.color = "#ffffff";
        
    }
    
    update() {

        this.collideWithBorder();
        this.move();

    }

    move() {

        this.x += this.vx;
        this.y += this.vy;

    }

    collideWithBorder(){

        if( this.x + this.radius > canvas.width || this.x - this.radius < 0 ) {

            this.vx *= -1;

        }

        if( this.y + this.radius > canvas.height || this.y - this.radius < 0 ) {

            this.vy *= -1;

        }


    }

    collideWithPaddle() {


    }


    draw() {

        drawCircle( this.x, this.y, this.radius, this.color );

    }

}


class Paddle {

    constructor(x,color){
        
        this.w = 10;
        this.h = 80;
        this.x = x;
        this.y = canvas.height/2 - this.h / 2;
        this.v = 0;
        this.color = color;
    
    }

    update(){

        this.collideWithBorder();
        this.y += this.v;

    }

    collideWithBorder(){

        if( this.y <= 0 ) {
            this.y = 0;
            return;
        }
        if( this.y + this.h >= canvas.height ) {
            this.y = canvas.height - this.h; 
            return;
        }

    }

    draw(){

        drawRect( this.x, this.y, this.w, this.h, this.color);

    }

}


const ball = new Ball;
const playerOne = new Paddle(10, "#ffffff");
const playerTwo = new Paddle( canvas.width - 20, "#ffffff");


function update () {

    ball.update();
    playerOne.update();
    playerTwo.update();

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

}

function loop () {

    requestAnimationFrame(loop);
    update();
    draw();

}

document.addEventListener( 'keydown', (event) => {

    switch (event.keyCode) {

        case 32:
            playerOne.v *= -1;
            break;
        case 76:
            playerTwo.v *= -1;
            break;
    }

} )

requestAnimationFrame(loop);