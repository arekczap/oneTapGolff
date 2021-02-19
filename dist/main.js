/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 700;
var ball = new Image();
ball.src = "assets/object_ball.png";

ball.onload = function () {
  // ========================================================================================================
  var Player = /*#__PURE__*/function () {
    function Player(parametrA, firstZeroPositionOfX, secondZeroPositionOfX) {
      _classCallCheck(this, Player);

      this.a = parametrA;
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

    _createClass(Player, [{
      key: "calculateVelocity",
      value: function calculateVelocity() {
        this.y += this.velocityY;
        this.sum += this.velocityX;
      }
    }, {
      key: "calculateParabola",
      value: function calculateParabola() {
        this.b = (this.y1 - this.y2 - this.a * (this.x1 * this.x1 - this.x2 * this.x2)) / (this.x1 - this.x2);
        this.c = this.y1 - this.a * this.x1 * this.x1 - this.b * this.x1;
        this.sum = this.x1;
      }
    }, {
      key: "calculatePath",
      value: function calculatePath() {}
    }, {
      key: "drawStartPosOfBall",
      value: function drawStartPosOfBall() {
        ctx.drawImage(ball, this.x1 - 29, this.correctionPosYBall - 29, ball.naturalWidth, ball.naturalWidth);
      }
    }, {
      key: "calculateParabolicFlight",
      value: function calculateParabolicFlight() {
        this.y = Math.round(this.a * this.sum * this.sum + this.b * this.sum + this.c) - 4;
        this.sum++; // ctx.drawImage(
        //   ball,
        //   this.sum - this.centerOfBall,
        //   this.y + this.correctionPosYBall - this.centerOfBall,
        //   ball.width,
        //   ball.height
        // );

        this.calculateVelocity();
      }
    }, {
      key: "drawParabolicFlight",
      value: function drawParabolicFlight() {
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillRect(this.sum, this.y + this.correctionPosYBall, 3, 3);
      }
    }]);

    return Player;
  }();

  var player = new Player(0.004, canvas.width / 7, canvas.width / 7 + 100); // player.drawStartPosOfBall();

  player.calculateParabola();

  function ballMovement() {
    // let animationFrame = requestAnimationFrame(ballMovement);\
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = player.x1; i < player.x2; i++) {
      player.calculateParabolicFlight();
      player.drawParabolicFlight();
      player.a += 0.0001;
      player.x2 += 5;
      console.log("poszlo");
    } // if (player.y < 8) {
    //   player.calculateParabolicFlight();
    //   player.drawParabolicFlight();
    // }
    // if (player.y > 8) {
    //   // cancelAnimationFrame(animationFrame);
    //   console.log("kolizja");
    // }

  }

  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 32) {
      ballMovement(); // console.log("wykonano");
    }
  });
}; // window.onload = function () {
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
/******/ })()
;
//# sourceMappingURL=main.js.map