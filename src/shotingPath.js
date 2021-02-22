import utilities from "./utilities";
import playerBall from "./playerBall";
import {ball} from "./playerBall";

const dot = new Image()
dot.src = require("/src/assets/object_dot.png");


class Path{
    constructor() {
        this.a = 0.0032;
        this.y1 = this.y2 = 1;
        this.pointXOfParabola = 0;
        this.startPosOfBall = 100;
        this.startDrawingRangeOfPath = 120;
        this.parabolaFinalDistance = 0;
        this.groundLevel = 475;
        this.vx = 3;
        this.b = 0;
        this.c = 0;
        this.y = 0;
    }

    setInitialConditions() {
        this.b = 0;
        this.c = 0;
        this.startDrawingRangeOfPath = 50;
    }

    increasePathDistance() {
        this.startDrawingRangeOfPath += this.vx;
    }

    increaseSpeedOFDrawBallPathForNextFound() {
        this.vx += 1;
    }

    recalculateParabolaToFinalFlight() {
        this.calculateShotPath(this.parabolaFinalDistance);
        playerBall.ballFinalFlight();

    }

    getFinalDistancePath(){
        this.parabolaFinalDistance = this.startDrawingRangeOfPath;
    }

    calculateShotPath(x2) {
        this.b =
            (this.y1 - this.y2 - this.a * (this.startPosOfBall * this.startPosOfBall - x2 * x2)) /
            (this.startPosOfBall - x2);
        this.c = this.y1 - this.a * this.startPosOfBall * this.startPosOfBall - this.b * this.startPosOfBall;
        this.pointXOfParabola = this.startPosOfBall;
    }

    calculateFlightPoints() {
        this.y =
            Math.round(this.a * this.pointXOfParabola * this.pointXOfParabola + this.b * this.pointXOfParabola + this.c) -
            - this.groundLevel;
        this.pointXOfParabola++;
    }

    updateFlightPath() {
        this.calculateShotPath(this.startDrawingRangeOfPath);
        utilities.clearCanvasView();

        for (let i = this.startPosOfBall; i < this.startDrawingRangeOfPath; i++) {
            this.calculateFlightPoints();
            this.pointXOfParabola += 30;
            utilities.drawImage(dot, this.pointXOfParabola - 15, this.y)
        }
        utilities.drawImage(ball,this.startPosOfBall,this.groundLevel)
        this.increasePathDistance();
    }


}

let shootingPath = new Path();
export default shootingPath;