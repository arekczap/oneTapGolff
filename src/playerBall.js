    import shootingPath from "./shotingPath";
    import utilities from "./utilities";
    import interfaceView from "./interfaceView";
    import golfHole from "./golfHole";

    export const ball = new Image();
    ball.src = require("/src/assets/object_ball.png");

    class Player {
        constructor() {
            this.correctionToFlightPosition = 32;
            this.velocityBall = 10;
        }

        //bal velocity
         setVelocityBallFlight() {
            shootingPath.pointXOfParabola+= this.velocityBall;
            shootingPath.y += this.velocityBall
        }

        getBallFinalFlight() {
            let animationFlyingBall = requestAnimationFrame(this.getBallFinalFlight.bind(this));

            //set ball velocity
            this.setVelocityBallFlight();

            utilities.clearCanvasView();
            interfaceView.pointsCounterView()
            shootingPath.calculateFlightPoints();
            utilities.drawImage(ball, shootingPath.pointXOfParabola , shootingPath.y)





            // algorytm do sprawdzania kolizji z dołkiem oraz zliczania punktów
            if (shootingPath.y >  470 && shootingPath.y <  500 && shootingPath.pointXOfParabola > golfHole.newHerizontalValueForHole - 58 && shootingPath.pointXOfParabola < golfHole.newHerizontalValueForHole + 100 ){
                cancelAnimationFrame(animationFlyingBall)
                interfaceView.increaseActualScore()
                golfHole.addGolfHole();
            }

            if (shootingPath.y >  550 && shootingPath.y <  650 ) {
                cancelAnimationFrame(animationFlyingBall)
                interfaceView.resetPoints()
            }
        }



        flyingBall() {
            //get distance to draw final path
            shootingPath.getFinalDistancePath()

            //set default values after drawing final path to final ball animation
            shootingPath.setInitialConditions()

            //calculating and  ball flight animation
            shootingPath.recalculateParabolaToFinalFlight()

            //increasing speed of draw ball path
            shootingPath.increaseSpeedOFDrawBallPathForNextFound()

        }
    }

    const playerBall = new Player();
    ball.onload = function () {
        utilities.drawImage(ball,shootingPath.startPosOfBall,shootingPath.groundLevel)
    }

    export default playerBall;

