import "./main.css";



//canvas and context definition
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//canvas fill
ctx.fillStyle = "rgba(255, 255, 255, 1)";
//canvas dimensions
canvas.width = 900;
canvas.height = 700;


//images definitions
const ball = new Image();
const dot = new Image()

//images path
ball.src = require("/src/assets/object_ball.png");
dot.src = require("/src/assets/object_dot.png");



    // ========================================================================================================
export default class Player {
        constructor() {
            this.a = 0.0032;
            this.startPosOfBall = 100;
            this.y1 = this.y2 = 1;
            this.startPosOfPath = 150;
            this.pointXOfParabola = 0;
            this.y = 0;
            this.b = 0;
            this.c = 0;
            this.vx = 3;
            this.groundLevel = 475;
            this.correctionPosOfParabola = 32;
            this.parabolaFinalDistance = 50;
            this.velocityOfBall = 10;
        }

        setInitialConditions() {
            this.b = 1;
            this.c = 1;
            this.startPosOfPath = 50;
        }

        increaseDistanceBallPath() {
            player.startPosOfPath += player.vx;
        }

        increaseSpeedOFDrawBallPathForNextFound() {
            player.vx += .5
        }
        //increasing speed of draw ball path



        increaseVelocityBallFlight() {
            player.pointXOfParabola+= player.velocityOfBall;
            player.y += player.velocityOfBall
        }

        clearCanvasView() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        calculateParabola(x2) {
            this.b =
                (this.y1 - this.y2 - this.a * (this.startPosOfBall * this.startPosOfBall - x2 * x2)) /
                (this.startPosOfBall - x2);
            this.c = this.y1 - this.a * this.startPosOfBall * this.startPosOfBall - this.b * this.startPosOfBall;
            this.pointXOfParabola = this.startPosOfBall;
        }

        calculateParabolicFlight() {
            this.y =
                Math.round(this.a * this.pointXOfParabola * this.pointXOfParabola + this.b * this.pointXOfParabola + this.c) -
                - this.groundLevel;
            this.pointXOfParabola++;
        }

        drawImage(image, valueX, valueY) {
            ctx.drawImage(
                image,
                image === "dot" ? valueX += 1 : valueX,
                image === "dot" ? valueY += 10 : valueY,
                image.width,
                image.height
            );
        }

        getFinalDistancePath(){
            this.parabolaFinalDistance = this.startPosOfPath;
        }

        ballFlightAnimation() {
            let animationFlyingBall = requestAnimationFrame(player.ballFlightAnimation);
            console.log("początek animacji")
            player.clearCanvasView();
            player.calculateParabolicFlight();
            player.drawImage(ball, player.pointXOfParabola + player.correctionPosOfParabola/2 , player.y - player.correctionPosOfParabola/2 )

            //velocity of ball
            player.increaseVelocityBallFlight()


            // wysokość na jaką ma spaść piłka
            if (player.y >=  550) {
                cancelAnimationFrame(animationFlyingBall)
                console.log(player.y)
            }
        }

        recalculateParabolaToFinalFlight() {
            player.calculateParabola(player.parabolaFinalDistance);
            player.ballFlightAnimation()
        }

        updateBallPath() {
            player.calculateParabola(player.startPosOfPath);
            player.clearCanvasView();

            for (let i = player.startPosOfBall; i < player.startPosOfPath + 50; i++) {
                player.calculateParabolicFlight();
                player.pointXOfParabola += 30;
                player.drawImage(dot, player.pointXOfParabola - 15, player.y)
            }
            player.drawImage(ball,player.startPosOfBall,player.groundLevel)
            player.increaseDistanceBallPath();

        }



}

    const player = new Player();
    ball.onload = function () {
        player.drawImage(ball,player.startPosOfBall,player.groundLevel)
    }

document.addEventListener("keydown", (e) => {
          if (e.keyCode === 32) {
              player.updateBallPath();
          }
      });


      document.addEventListener("keyup", (e) => {
          if (e.keyCode === 32) {

              //get distance to draw final path
              player.getFinalDistancePath()

              //set default values after drawing final path to final ball animation
              player.setInitialConditions()

              //calculating and  ball flight animation
              player.recalculateParabolaToFinalFlight()

              //increasing speed of draw ball path
              player.increaseSpeedOFDrawBallPathForNextFound()
          }
      });




    //
    // class InitEvents extends Player {
    //
    //
    //   init() {
    //       document.addEventListener("keydown", (e) => {
    //           if (e.keyCode === 32) {
    //               Player.updateBallPath();
    //           }
    //       });
    //
    //
    //       document.addEventListener("keyup", (e) => {
    //           if (e.keyCode === 32) {
    //
    //               //get distance to draw final path
    //               Player.getFinalDistancePath()
    //
    //               //set default values after drawing final path to final ball animation
    //               player.setInitialConditions()
    //
    //               //calculating and  ball flight animation
    //               player.recalculateParabolaToFinalFlight()
    //
    //               //increasing speed of draw ball path
    //               player.increaseSpeedOFDrawBallPathForNextFound()
    //           }
    //       });
    //
    //   }
    //
    // }
    //
    //
    // let initEvents = new InitEvents();
    // initEvents.init()