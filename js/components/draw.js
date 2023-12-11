import { canvas, ctx } from "../main.js";

export const drawRect = (x, y, w, h, color = "#000") => {

    ctx.fillStyle = color;
    ctx.fillRect( x, y, w, h);

};

export const drawLine = (x0, y0, x1, y1, w, color = "#ffffff") => {


    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = w;
    ctx.strokeStyle = color;
    ctx.stroke();


}

export const drawCircle = (x, y, radius, color) => {

    ctx.beginPath();
    ctx.arc( x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

}

