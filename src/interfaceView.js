import utilities from "./utilities";

let gameOverView = new Image()
gameOverView.src = require("/src/assets/tile_sky_color01.png");


class InterfaceView {
    constructor() {
        this.actualScore = 0;
        this.loadedWindow = false;
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

    pressButtonToStart() {
        utilities.ctx1.font = "bolder 40px Arial";
        utilities.ctx.fillText("press Space to start", 250, 250);
    }

    addGameOverText() {
        utilities.ctx1.font = "bolder 100px Arial";
        utilities.ctx.fillText("GAME OVER", 120, 200);
    }

    gameOverView() {
        this.addGameOverText();
        this.pressButtonToStart();
    }
}



let interfaceView = new InterfaceView();

interfaceView.pointsCounterView();
interfaceView.pressButtonToStart()




export default interfaceView