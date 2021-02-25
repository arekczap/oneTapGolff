
class Utilities {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.ctx1 = this.canvas.getContext("2d");
    }

    createCanvas() {
        this.ctx.fillStyle = "rgba(255, 255, 255, 1)";
        //canvas dimensions
        this.canvas.width = 900;
        this.canvas.height = 700;
    }

    clearCanvasView() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawImage(context ,image, valueX, valueY) {
        context.drawImage(image, valueX, valueY, image.width, image.height);
    }
}

let utilities = new Utilities();
utilities.createCanvas();


export default utilities;