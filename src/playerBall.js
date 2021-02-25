    import shootingPath from "./shotingPath";
    import utilities from "./utilities";
    import interfaceView from "./interfaceView";
    import golfHole from "./golfHole";
    import gameControler from "./gameControler";

    export const ball = new Image();
    ball.src = require("/src/assets/object_ball.png");

    class Player {
        constructor() {
            this.velocityBall = 10;
            this.animationFlyingBall = null;
            this.ballIsFlyingNow = false

        }

        //bal velocity
         setVelocityBallFlight() {
            shootingPath.pointXOfParabola+= this.velocityBall;
            shootingPath.y += this.velocityBall
        }

        getBallFinalFlight() {
            this.animationFlyingBall = requestAnimationFrame(this.getBallFinalFlight.bind(this));

            //set ball velocity
            this.setVelocityBallFlight();

            utilities.clearCanvasView();
            interfaceView.pointsCounterView()
            shootingPath.calculateFlightPoints();
            utilities.drawImage(utilities.ctx,ball, shootingPath.pointXOfParabola, shootingPath.y);
            playerBall.ballIsFlyingNow = true;
            gameControler.controlGameStep();
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
    window.onload = function () {
        utilities.drawImage(utilities.ctx, ball, shootingPath.startPosOfBall, shootingPath.groundLevel);
    }

    export default playerBall;

