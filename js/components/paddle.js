import { canvas } from "../main.js";
import { drawRect } from "./draw.js";


export class Paddle {

    constructor(x,color){
        
        this.w = 10;
        this.h = 80;
        this.x = x;
        this.y = canvas.height/2 - this.h / 2;
        this.v = 5;
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
