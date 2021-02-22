import utilities from "./utilities";


let backgroundMenu = new Image()
backgroundMenu.src = require("/src/assets/tile_sky_color01.png");

class InterfaceView {
    constructor() {
        this.actualScore = 0;
    }

    increaseActualScore() {
        utilities.clearCanvasView()
        this.actualScore+=1;
        this.pointsCounterView()
    }

    pointsCounterView() {
        utilities.ctx.font = "bolder 80px Arial";
        utilities.ctx.fillStyle = "yellow";
        utilities.ctx.fillText(this.actualScore, 780, 100);
    }

    resetPoints() {
        utilities.clearCanvasView()
        this.actualScore = 0;
        this.pointsCounterView()
    }
}



let interfaceView = new InterfaceView();
interfaceView.pointsCounterView()


export default interfaceView