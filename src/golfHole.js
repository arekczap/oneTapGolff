
class GolfHole {
    constructor() {
        this.verticalHolePositionSelector = document.querySelector(".hole");
        this.newHerizontalValueForHole = 500;

    }

    addGolfHole() {
        this.generateNextHorizontalValueForHole();
        this.drawGolfHole();
    }

    drawGolfHole() {
        this.verticalHolePositionSelector.style.left = this.newHerizontalValueForHole + "px"
    }

    generateNextHorizontalValueForHole() {
        this.newHerizontalValueForHole = Math.floor(Math.random() * (700 - 250 + 1)) + 250
    }
}


let golfHole = new GolfHole()

    // golfHole.addGolfHole();


export default golfHole;
