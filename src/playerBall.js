import shootingPath from "./shotingPath";
import utilities from "./utilities";




const ball = new Image();
ball.src = require("/src/assets/object_ball.png");




class Player {
    constructor() {
        this.pointXOfParabola = 0;
        this.y = 0;
        this.b = 0;
        this.c = 0;
        this.vx = 3;

        this.correctionPosOfParabola = 32;
        this.parabolaFinalDistance = 50;
        this.velocityOfBall = 10;
    }
    //
    // setInitialConditions() {
    //     this.b = 1;
    //     this.c = 1;
    //     this.startPosOfPath = 50;
    // }
    //
    // increaseDistanceBallPath() {
    //     player.startPosOfPath += player.vx;
    // }
    //
    // increaseSpeedOFDrawBallPathForNextFound() {
    //     player.vx += .5
    // }
    // //increasing speed of draw ball path
    //
    //
    //
    // increaseVelocityBallFlight() {
    //     player.pointXOfParabola+= player.velocityOfBall;
    //     player.y += player.velocityOfBall
    // }
    //

    //
    //
    //
    //


    // drawImage(image, valueX, valueY) {
    //     ctx.drawImage(
    //         image,
    //         valueX,
    //         valueY,
    //         image.width,
    //         image.height
    //     );
    // }
    //
    // getFinalDistancePath(){
    //     this.parabolaFinalDistance = this.startPosOfPath;
    // }
    //
    // ballFlightAnimation() {
    //     let animationFlyingBall = requestAnimationFrame(player.ballFlightAnimation);
    //
    //     player.clearCanvasView();
    //     player.calculateParabolicFlight();
    //     player.drawImage(ball, player.pointXOfParabola + player.correctionPosOfParabola/2 , player.y - player.correctionPosOfParabola/2 )
    //
    //     //velocity of ball
    //     player.increaseVelocityBallFlight()
    //
    //
    //     // wysokość na jaką ma spaść piłka
    //     if (player.y >=  500) {
    //         cancelAnimationFrame(animationFlyingBall)
    //     }
    // }
    //
    // recalculateParabolaToFinalFlight() {
    //     player.calculateParabola(player.parabolaFinalDistance);
    //     player.ballFlightAnimation()
    // }


}

const player = new Player();
ball.onload = function () {
    utilities.drawImage(ball,shootingPath.startPosOfBall,shootingPath.groundLevel)
}


// export default {
//     player,
//     ball
// };