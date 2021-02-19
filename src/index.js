// (function () {
//   let canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext("2d");

//   initialize();

//   function initialize() {
//     window.addEventListener("resize", resizeCanvas, false);
//     resizeCanvas();
//   }

//   function redraw() {
//     // ctx.strokeStyle = "blue";
//     // ctx.lineWidth = "5";
//     ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
//   }

//   function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     redraw();
//   }

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 700;

const ball = new Image();
ball.src = "assets/object_ball.png";

ball.onload = function () {
    // ========================================================================================================
    class Player {
        constructor(parameterA, firstZeroPositionOfX, secondZeroPositionOfX) {
            this.a = parameterA;
            this.x1 = firstZeroPositionOfX;
            this.y1 = this.y2 = 1;
            this.x2 = secondZeroPositionOfX;
            this.sum = 0;
            this.y = 0;
            this.b = 0;
            this.c = 0;
            this.velocityX = 7;
            this.velocityY = 7;
            this.correctionPosYBall = 500;
            this.centerOfBall = 29;
        }

        calculateVelocity() {
            this.y += this.velocityY;
            this.sum += this.velocityX;
        }

        calculateParabola() {
            this.b =
                (this.y1 - this.y2 - this.a * (this.x1 * this.x1 - this.x2 * this.x2)) /
                (this.x1 - this.x2);
            this.c = this.y1 - this.a * this.x1 * this.x1 - this.b * this.x1;

            this.sum = this.x1;
        }

        calculatePath() {}

        drawStartPosOfBall() {
            ctx.drawImage(
                ball,
                this.x1 - 29,
                this.correctionPosYBall - 29,
                ball.naturalWidth,
                ball.naturalWidth
            );
        }

        calculateParabolicFlight() {
            this.y =
                Math.round(this.a * this.sum * this.sum + this.b * this.sum + this.c) -
                4;
            this.sum++;

            // ctx.drawImage(
            //   ball,
            //   this.sum - this.centerOfBall,
            //   this.y + this.correctionPosYBall - this.centerOfBall,
            //   ball.width,
            //   ball.height
            // );

            this.calculateVelocity();
        }

        drawParabolicFlight() {
            ctx.fillStyle = "rgba(255, 255, 255, 1)";
            ctx.fillRect(this.sum, this.y + this.correctionPosYBall, 3, 3);
        }
    }

    const player = new Player(0.004, canvas.width / 7, canvas.width / 7 + 100);
    // player.drawStartPosOfBall();
    player.calculateParabola();

    function ballMovement() {
        // let animationFrame = requestAnimationFrame(ballMovement);\
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = player.x1; i < player.x2; i++) {
            player.calculateParabolicFlight();
            player.drawParabolicFlight();
            player.a += 0.0001;
            player.x2 += 5;
            console.log("poszlo");
        }
        // if (player.y < 8) {
        //   player.calculateParabolicFlight();
        //   player.drawParabolicFlight();
        // }

        // if (player.y > 8) {
        //   // cancelAnimationFrame(animationFrame);
        //   console.log("kolizja");
        // }
    }

    document.addEventListener("keypress", (e) => {
        if (e.keyCode === 32) {
            ballMovement();
            // console.log("wykonano");
        }
    });
};

// window.onload = function () {
//   // let ratioHeight = canvas.height / backgroundImage.width;
//   // let xBallStartPosition = canvas.width / 4;
//   // let heightOfGround =
//   //   canvas.height -
//   //   groundImage.height * ratioHeight -
//   //   grassImage.height * ratioHeight -
//   //   ball.height * ratioHeight +
//   //   10;

//   let drawBackground = () => {
//     for (let i = 0; i < 15; i++) {
//       ctx.drawImage(
//         grassImage,
//         i * grassImage.width,
//         canvas.height - groundImage.height - grassImage.height,
//         grassImage.width,
//         grassImage.height
//       );
//     }

//     ctx.drawImage(
//       groundImage,
//       0,
//       canvas.height - groundImage.height,
//       canvas.width,
//       groundImage.height
//     );
//   };

//   drawBackground();
