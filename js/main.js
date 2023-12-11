const canvas = document.getElementById("screen");
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

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

const ball = new Ball;

function update () {

    ball.update();

}



function draw () {

    ctx.clearRect(0,0, canvas.width, canvas.height);

    //draw screen;
    drawRect(0,0, canvas.width, canvas.height);
    drawLine( canvas.width/2,0, canvas.width/2, canvas.height, 3 );
    
    //draw entities;
    ball.draw();

}

function loop () {

    requestAnimationFrame(loop);
    update();
    draw();

}

requestAnimationFrame(loop);