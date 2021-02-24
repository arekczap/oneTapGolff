import utilities from "./utilities";
import playerBall from "./playerBall";
import {ball} from "./playerBall";
import initEvents from "./initEvents";
import interfaceView from "./interfaceView";

const dot = new Image()
dot.src = require("/src/assets/object_dot.png");


class Path{
    constructor() {
        this.a = 0.0030;
        this.groundLevel =  475;
        this.pointXOfParabola = 0;
        this.startPosOfBall = 75;
        this.startDrawingRangeOfPath = 70;
        this.parabolaFinalDistance = 200;
        this.parabolaTopPoint = -5
        this.vx = 5;
        this.b = .1;
        this.c = .1;
        this.y = 0;
    }

    setInitialConditions() {
        this.b = 1;
        this.c = 1;
        this.startDrawingRangeOfPath = 100;
    }

    setIncreasePathDistance() {
        this.startDrawingRangeOfPath += this.vx;
    }

    increaseSpeedOFDrawBallPathForNextFound() {
        this.vx += 1;
    }

    recalculateParabolaToFinalFlight() {
        this.calculateShotPath(this.parabolaFinalDistance);
        playerBall.getBallFinalFlight();
    }

    getFinalDistancePath(){
        this.parabolaFinalDistance = this.startDrawingRangeOfPath;
    }

    calculateShotPath(x2) {
        this.b =
            (this.groundLevel - this.groundLevel - this.a * (this.startPosOfBall * this.startPosOfBall - x2 * x2)) /
            (this.startPosOfBall - x2);
        this.c = this.groundLevel - this.a * this.startPosOfBall * this.startPosOfBall - this.b * this.startPosOfBall;
        this.pointXOfParabola = this.startPosOfBall;

        interfaceView.pointsCounterView()
    }

    calculateFlightPoints() {
        this.y =
            Math.round(this.a * this.pointXOfParabola * this.pointXOfParabola + this.b * this.pointXOfParabola + this.c);
        this.pointXOfParabola++;
    }

    updateFlightPath(state) {
        this.parabolaTopPoint = this.b * this.b - 4 * this.a * this.c

        utilities.clearCanvasView();
        this.calculateShotPath(this.startDrawingRangeOfPath);

        let i = this.startPosOfBall;
        while(i < this.startDrawingRangeOfPath) {
            i++
            this.pointXOfParabola += 50
            this.calculateFlightPoints();
            utilities.drawImage(utilities.ctx, dot, this.pointXOfParabola + 10, this.y + 10);

        }

        if (this.parabolaTopPoint >= .1) {
            console.log("top")
        }

        utilities.drawImage(utilities.ctx,ball, this.startPosOfBall, this.groundLevel);
        this.setIncreasePathDistance();
    }
}

let shootingPath = new Path();
export default shootingPath;