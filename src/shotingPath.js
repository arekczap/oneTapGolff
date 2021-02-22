import initEvents from "./initEvents";


import player from "./playerBall";
import ball from "./playerBall";

const dot = new Image()
dot.src = require("/src/assets/object_dot.png");


class Path{
    constructor() {
        this.a = 0.0032;
        this.y1 = this.y2 = 1;
        this.startPosOfBall = 100;
        this.startPosOfPath = 150;
        this.groundLevel = 475;
    }

    //
    calculateParabola(x2) {
        this.b =
            (this.y1 - this.y2 - this.a * (this.startPosOfBall * this.startPosOfBall - x2 * x2)) /
            (this.startPosOfBall - x2);
        this.c = this.y1 - this.a * this.startPosOfBall * this.startPosOfBall - this.b * this.startPosOfBall;
        this.pointXOfParabola = this.startPosOfBall;
    }

    // calculateParabolicFlight() {
    //     this.y =
    //         Math.round(this.a * this.pointXOfParabola * this.pointXOfParabola + this.b * this.pointXOfParabola + this.c) -
    //         - this.groundLevel;
    //     this.pointXOfParabola++;
    // }
    //
    //
    updateBallPath() {
        console.log("działa")
        // this.calculateParabola(this.startPosOfPath);
        // player.clearCanvasView();
        //
        // for (let i = this.startPosOfBall; i < this.startPosOfPath + 50; i++) {
        //     this.calculateParabolicFlight();
        //     this.pointXOfParabola += 30;
        //     this.drawImage(dot, this.pointXOfParabola - 15, this.y)
        // }
        // this.drawImage(player.ball,this.startPosOfBall,this.groundLevel)
        // this.increaseDistanceBallPath();

    }
}

let shootingPath = new Path();


export default shootingPath;