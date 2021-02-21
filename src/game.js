import "./main.css";
// import dot from './assets/object_dot.png';



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255, 255, 255, 1)";

canvas.width = 900;
canvas.height = 700;

const ball = new Image();
ball.src = require("/src/assets/object_ball.png");

const dot = new Image()
dot.src = require("/src/assets/object_dot.png")



    // ========================================================================================================
    class Player {
        constructor() {
            this.a = 0.0025;
            this.x1 = 70;
            this.y1 = this.y2 = 1;
            this.x2 = 0;
            this.sum = 0;
            this.y = 0;
            this.b = 0;
            this.c = 0;
            this.vx = 5;
            this.groundLevel = 475;
            this.correctionPosOfParabola = 32;
            this.parabolaFinalDistance = 0;
            this.velocityOfBall = 7;
        }



        initialConditions() {
            this.b = 0;
            this.c = 0;
            this.x2 = 120;

        }

        increaseDistanceOfBallPath() {
            player.x2 += player.vx;
        }

        clearRectangle() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        calculateParabola(x2) {
            this.b =
                (this.y1 - this.y2 - this.a * (this.x1 * this.x1 - x2 * x2)) /
                (this.x1 - x2);
            this.c = this.y1 - this.a * this.x1 * this.x1 - this.b * this.x1;

            this.sum = this.x1;
        }

        calculateParabolicFlight() {
            this.y =
                Math.round(this.a * this.sum * this.sum + this.b * this.sum + this.c) -
                4;
            this.sum++;
        }

        // TODO: usunąć
        drawStartPosOfBall() {
            ctx.drawImage(
                    ball,
                    this.x1,
                    this.groundLevel,
                    ball.width,
                    ball.height
            );

        }

        drawFinalBallFLight(posX,posY) {
            ctx.drawImage(
                ball,
                posX,
                posY,
                ball.width,
                ball.height
            );

        }

        generateFinalPath(){
            this.parabolaFinalDistance = this.x2;
        }

        drawParabolicPath(valueX, valueY) {
            ctx.fillRect(valueX + this.correctionPosOfParabola, valueY + this.groundLevel + this.correctionPosOfParabola, 2, 2);
        }


        drawImage(image, valueX, valueY) {
            ctx.drawImage(
                image,
                valueX,
                valueY + this.groundLevel + 5,
                image.width,
                image.height
            );
        }
    }

    const player = new Player();
    ball.onload = function () {
        player.drawStartPosOfBall()
    }

    function createBallPath() {
        player.calculateParabola(player.x2);
        player.clearRectangle();

        for (let i = player.x1; i < player.x2 + 150; i++) {
            player.calculateParabolicFlight();
            player.sum += 40;


            player.drawImage(dot, player.sum - 20, player.y)

            // player.drawParabolicPath(player.sum - 50, player.y);
        }
        player.drawStartPosOfBall()
        player.increaseDistanceOfBallPath();

    }

    function putBall() {

        animationFlyingBall = requestAnimationFrame(putBall);

        //velocity of ball
        player.sum+= player.velocityOfBall;
        player.y += player.velocityOfBall

        player.clearRectangle();
        player.calculateParabolicFlight();
        player.drawImage(ball, player.sum, player.y)



        if (player.y >=  player.y1) {
            cancelAnimationFrame(animationFlyingBall)
        }




    }

    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 32) {
            createBallPath();
        }
    });


    let animationFlyingBall;

    document.addEventListener("keyup", (e) => {
        if (e.keyCode === 32) {

            player.clearRectangle();

            player.generateFinalPath()

            player.initialConditions()
            player.drawStartPosOfBall()


            //recalculate new parabola to final put ball
            player.calculateParabola(player.parabolaFinalDistance);
            putBall();

            //increasing speed of draw ball path
            player.vx += 1




        }
    });

