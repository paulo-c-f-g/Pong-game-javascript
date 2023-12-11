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

function draw () {

    ctx.clearRect(0,0, canvas.width, canvas.height);

    //draw screen;
    drawRect(0,0, canvas.width, canvas.height);
    drawLine( canvas.width/2,0, canvas.width/2, canvas.height, 3 )

}

function loop () {

    requestAnimationFrame(loop);
    draw();

}

requestAnimationFrame(loop);