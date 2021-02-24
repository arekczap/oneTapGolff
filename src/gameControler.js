import shootingPath from "./shotingPath";
import golfHole from "./golfHole";
import interfaceView from "./interfaceView";
import playerBall from "./playerBall";

class GameController {
    controlGameStep() {
        // algorytm do sprawdzania kolizji z dołkiem oraz zliczania punktów
        if (shootingPath.y >  470 &&
            shootingPath.y <  500 &&
            shootingPath.pointXOfParabola > golfHole.newHerizontalValueForHole - 30 &&
            shootingPath.pointXOfParabola < golfHole.newHerizontalValueForHole + 80 ){
            cancelAnimationFrame(playerBall.animationFlyingBall)
            interfaceView.increaseActualScore()
            golfHole.addGolfHole();
        }

        if (shootingPath.y >  550 && shootingPath.y <  650 ) {
            cancelAnimationFrame(playerBall.animationFlyingBall)
            interfaceView.resetPoints()
        }
    }
}

let gameController = new GameController();


export default gameController;