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


    addGameOverView() {

        // dodano obrazek tła
        // utilities.drawImage()
        backgroundMenu.onload = function () {
            // utilities.drawImage(utilities.ctx2,backgroundMenu,100, 100)
            utilities.ctx2.drawImage(backgroundMenu, 0, 0, utilities.canvas.width, utilities.canvas.height);

        }
    }
}



let interfaceView = new InterfaceView();
interfaceView.pointsCounterView()
interfaceView.addGameOverView()

export default interfaceView