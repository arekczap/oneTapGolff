import "./main.css";
// import ball from './assets/object_ball.png';


//fdbc




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
// console.log("dziala")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255, 255, 255, 1)";

canvas.width = 900;
canvas.height = 700;

let increasingHeightParabola = 0;
let increasingDostanceParabola = 0;

// const ball = new Image();
// ball.src = require("./assets/object_ball.png");



    // ========================================================================================================
    class Player {
        constructor() {
            this.a = 0.0007;
            this.x1 = canvas.width/5;
            this.y1 = this.y2 = 1;
            this.x2 = 120;
            this.sum = 0;
            this.y = 0;
            this.b = 0;
            this.c = 0;
            this.vx = 3;
            this.vy = 0.0001;
            this.correctionPosYBall = 530;
        }

        initialConditions() {
            this.sum = 0;
            this.y = 0;
            this.b = 0;
            this.c = 0;
            this.x2 = 120;

        }




        calculateParabola() {
            this.b =
                (this.y1 - this.y2 - this.a * (this.x1 * this.x1 - this.x2 * this.x2)) /
                (this.x1 - this.x2);
            this.c = this.y1 - this.a * this.x1 * this.x1 - this.b * this.x1;

            this.sum = this.x1;
        }

        drawStartPosOfBall() {

                // ctx.drawImage(
                //   ball,
                //   this.sum - this.centerOfBall,
                //   this.y + this.correctionPosYBall - this.centerOfBall,
                //   ball.width,
                //   ball.height
                // );

                console.log(ball.width,ball.height)

        }

        calculateParabolicFlight() {
            this.y =
                Math.round(this.a * this.sum * this.sum + this.b * this.sum + this.c) -
                4;
            this.sum++;






            // this.calculateVelocity();
        }

        updatePath() {

        }

        drawParabolicFlight() {
            ctx.fillRect(this.sum, this.y + this.correctionPosYBall, 2, 2);
        }
    }

    const player = new Player();
    player.drawStartPosOfBall()


    function createBallPath() {
        player.calculateParabola();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = player.x1; i < player.x2 + 200; i++) {
            player.calculateParabolicFlight();
            player.drawParabolicFlight();
        }
        player.x2 += player.vx;


    }

    document.addEventListener("keydown", (e) => {


        if (e.keyCode === 32) {
            requestAnimationFrame(createBallPath);
        }
    });


    document.addEventListener("keyup", (e) => {
        if (e.keyCode === 32) {
            // ballMovement();
            // increasing += .1

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            player.initialConditions()

            player.a += player.vy;
            player.x2 += player.vx;
        }
    });


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
