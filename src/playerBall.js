    import shootingPath from "./shotingPath";
    import utilities from "./utilities";




    export const ball = new Image();
    ball.src = require("/src/assets/object_ball.png");


    class Player {
        constructor() {
            this.correctionToFlightPosition = 32;
            this.velocityBall = 10;
        }

        //bal velocity
         velocityBallFlight() {
            shootingPath.pointXOfParabola+= this.velocityBall;
            shootingPath.y += this.velocityBall
        }

        ballFinalFlight() {
            let animationFlyingBall = requestAnimationFrame(this.ballFinalFlight.bind(this));

            //set ball velocity
            this.velocityBallFlight();

            utilities.clearCanvasView();
            shootingPath.calculateFlightPoints();
            utilities.drawImage(ball, shootingPath.pointXOfParabola , shootingPath.y - this.correctionToFlightPosition/2 )



            // wysokość na jaką ma spaść piłka
            if (shootingPath.y >=  500) {
                cancelAnimationFrame(animationFlyingBall)
            }

        }








    }

    const playerBall = new Player();
    ball.onload = function () {
        utilities.drawImage(ball,shootingPath.startPosOfBall,shootingPath.groundLevel)
    }

    export default playerBall;

