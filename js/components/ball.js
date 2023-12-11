import { canvas} from "../main.js";
import { drawCircle } from "./draw.js";

export class Ball {

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

    collideWithPaddle( rx, ry, rw, rh ) {

        let testX = null;

        if( this.x < rx ) {
            testX = rx;
        }
        else if( this.x > rx + rw ) {
            testX = rx + rw;
        } 

        const distanceX = ( rx - this.x < 0 ) ? this.x - rx : rx - this.x;
        
        if( distanceX <= this.radius && this.y + this.radius >= ry && this.y - this.radius <= ry + rh ){

            this.vx *= -1;

        }


    }


    draw() {

        drawCircle( this.x, this.y, this.radius, this.color );

    }

}