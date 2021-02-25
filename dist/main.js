/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameControler.js":
/*!******************************!*\
  !*** ./src/gameControler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shotingPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shotingPath */ "./src/shotingPath.js");
/* harmony import */ var _golfHole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./golfHole */ "./src/golfHole.js");
/* harmony import */ var _interfaceView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaceView */ "./src/interfaceView.js");
/* harmony import */ var _playerBall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerBall */ "./src/playerBall.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);
  }

  _createClass(GameController, [{
    key: "controlGameStep",
    value: function controlGameStep() {
      //reset top parabola
      _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.parabolaTopPoint = -5; // check collision with hole else game over

      if (_shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.y > 470 && _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.y < 500 && _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.pointXOfParabola > _golfHole__WEBPACK_IMPORTED_MODULE_1__.default.newHerizontalValueForHole - 30 && _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.pointXOfParabola < _golfHole__WEBPACK_IMPORTED_MODULE_1__.default.newHerizontalValueForHole + 80) {
        cancelAnimationFrame(_playerBall__WEBPACK_IMPORTED_MODULE_3__.default.animationFlyingBall);
        _interfaceView__WEBPACK_IMPORTED_MODULE_2__.default.increaseActualScore();
        _golfHole__WEBPACK_IMPORTED_MODULE_1__.default.addGolfHole();
        _utilities__WEBPACK_IMPORTED_MODULE_4__.default.drawImage(_utilities__WEBPACK_IMPORTED_MODULE_4__.default.ctx, _playerBall__WEBPACK_IMPORTED_MODULE_3__.ball, _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.startPosOfBall, _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.groundLevel);
        _playerBall__WEBPACK_IMPORTED_MODULE_3__.default.ballIsFlyingNow = false;
      }

      if (_shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.y > 500 && _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.y < 550) {
        cancelAnimationFrame(_playerBall__WEBPACK_IMPORTED_MODULE_3__.default.animationFlyingBall);
        _interfaceView__WEBPACK_IMPORTED_MODULE_2__.default.resetPoints();
        _interfaceView__WEBPACK_IMPORTED_MODULE_2__.default.gameOverView();
        _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.resetVelocityAfterGameOverToInitState();
        _playerBall__WEBPACK_IMPORTED_MODULE_3__.default.ballIsFlyingNow = false;
      }
    }
  }]);

  return GameController;
}();

var gameController = new GameController();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameController);

/***/ }),

/***/ "./src/golfHole.js":
/*!*************************!*\
  !*** ./src/golfHole.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GolfHole = /*#__PURE__*/function () {
  function GolfHole() {
    _classCallCheck(this, GolfHole);

    this.verticalHolePositionSelector = document.querySelector(".hole");
    this.newHerizontalValueForHole = 500;
  }

  _createClass(GolfHole, [{
    key: "addGolfHole",
    value: function addGolfHole() {
      this.generateNextHorizontalValueForHole();
      this.drawGolfHole();
    }
  }, {
    key: "drawGolfHole",
    value: function drawGolfHole() {
      this.verticalHolePositionSelector.style.left = this.newHerizontalValueForHole + "px";
    }
  }, {
    key: "generateNextHorizontalValueForHole",
    value: function generateNextHorizontalValueForHole() {
      this.newHerizontalValueForHole = Math.floor(Math.random() * (700 - 250 + 1)) + 250;
    }
  }]);

  return GolfHole;
}();

var golfHole = new GolfHole(); // golfHole.addGolfHole();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (golfHole);

/***/ }),

/***/ "./src/initEvents.js":
/*!***************************!*\
  !*** ./src/initEvents.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shotingPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shotingPath */ "./src/shotingPath.js");
/* harmony import */ var _playerBall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerBall */ "./src/playerBall.js");
/* harmony import */ var _gameControler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameControler */ "./src/gameControler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var grass = new Image();
grass.src = __webpack_require__(/*! ../../src/assets/tile_ground01.png */ "./src/assets/tile_ground01.png");

var InitEvents = /*#__PURE__*/function () {
  function InitEvents() {
    _classCallCheck(this, InitEvents);
  }

  _createClass(InitEvents, [{
    key: "init",
    value: function init() {
      document.addEventListener("keydown", function (e) {
        if (e.keyCode === 32 && !_playerBall__WEBPACK_IMPORTED_MODULE_1__.default.ballIsFlyingNow) {
          _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.updateFlightPath();
        }
      });
      document.addEventListener("keyup", function (e) {
        if (e.keyCode === 32 && !_playerBall__WEBPACK_IMPORTED_MODULE_1__.default.ballIsFlyingNow) {
          _playerBall__WEBPACK_IMPORTED_MODULE_1__.default.flyingBall();
        }
      });
    }
  }]);

  return InitEvents;
}();

var initEvents = new InitEvents();
initEvents.init();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initEvents);

/***/ }),

/***/ "./src/interfaceView.js":
/*!******************************!*\
  !*** ./src/interfaceView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var gameOverView = new Image();
gameOverView.src = __webpack_require__(/*! ../../src/assets/tile_sky_color01.png */ "./src/assets/tile_sky_color01.png");

var InterfaceView = /*#__PURE__*/function () {
  function InterfaceView() {
    _classCallCheck(this, InterfaceView);

    this.actualScore = 0;
    this.loadedWindow = false;
  }

  _createClass(InterfaceView, [{
    key: "increaseActualScore",
    value: function increaseActualScore() {
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.clearCanvasView();
      this.actualScore += 1;
      this.pointsCounterView();
    }
  }, {
    key: "pointsCounterView",
    value: function pointsCounterView() {
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx.font = "bolder 80px Arial";
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx.fillStyle = "yellow";
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx.fillText(this.actualScore, 780, 100);
    }
  }, {
    key: "resetPoints",
    value: function resetPoints() {
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.clearCanvasView();
      this.actualScore = 0;
      this.pointsCounterView();
    }
  }, {
    key: "pressButtonToStart",
    value: function pressButtonToStart() {
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx1.font = "bolder 40px Arial";
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx.fillText("press Space to start", 250, 250);
    }
  }, {
    key: "addGameOverText",
    value: function addGameOverText() {
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx1.font = "bolder 100px Arial";
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx.fillText("GAME OVER", 120, 200);
    }
  }, {
    key: "gameOverView",
    value: function gameOverView() {
      this.addGameOverText();
      this.pressButtonToStart();
    }
  }]);

  return InterfaceView;
}();

var interfaceView = new InterfaceView();
interfaceView.pointsCounterView();
interfaceView.pressButtonToStart();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interfaceView);

/***/ }),

/***/ "./src/playerBall.js":
/*!***************************!*\
  !*** ./src/playerBall.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ball": () => (/* binding */ ball),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shotingPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shotingPath */ "./src/shotingPath.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _interfaceView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaceView */ "./src/interfaceView.js");
/* harmony import */ var _golfHole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./golfHole */ "./src/golfHole.js");
/* harmony import */ var _gameControler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameControler */ "./src/gameControler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var ball = new Image();
ball.src = __webpack_require__(/*! ../../src/assets/object_ball.png */ "./src/assets/object_ball.png");

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.velocityBall = 10;
    this.animationFlyingBall = null;
    this.ballIsFlyingNow = false;
  } //bal velocity


  _createClass(Player, [{
    key: "setVelocityBallFlight",
    value: function setVelocityBallFlight() {
      _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.pointXOfParabola += this.velocityBall;
      _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.y += this.velocityBall;
    }
  }, {
    key: "getBallFinalFlight",
    value: function getBallFinalFlight() {
      this.animationFlyingBall = requestAnimationFrame(this.getBallFinalFlight.bind(this)); //set ball velocity

      this.setVelocityBallFlight();
      _utilities__WEBPACK_IMPORTED_MODULE_1__.default.clearCanvasView();
      _interfaceView__WEBPACK_IMPORTED_MODULE_2__.default.pointsCounterView();
      _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.calculateFlightPoints();
      _utilities__WEBPACK_IMPORTED_MODULE_1__.default.drawImage(_utilities__WEBPACK_IMPORTED_MODULE_1__.default.ctx, ball, _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.pointXOfParabola, _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.y);
      playerBall.ballIsFlyingNow = true;
      _gameControler__WEBPACK_IMPORTED_MODULE_4__.default.controlGameStep();
    }
  }, {
    key: "flyingBall",
    value: function flyingBall() {
      //get distance to draw final path
      _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.getFinalDistancePath(); //set default values after drawing final path to final ball animation

      _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.setInitialConditions(); //calculating and  ball flight animation

      _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.recalculateParabolaToFinalFlight(); //increasing speed of draw ball path

      _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.increaseSpeedOFDrawBallPathForNextFound();
    }
  }]);

  return Player;
}();

var playerBall = new Player();

window.onload = function () {
  _utilities__WEBPACK_IMPORTED_MODULE_1__.default.drawImage(_utilities__WEBPACK_IMPORTED_MODULE_1__.default.ctx, ball, _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.startPosOfBall, _shotingPath__WEBPACK_IMPORTED_MODULE_0__.default.groundLevel);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerBall);

/***/ }),

/***/ "./src/shotingPath.js":
/*!****************************!*\
  !*** ./src/shotingPath.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _playerBall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerBall */ "./src/playerBall.js");
/* harmony import */ var _initEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initEvents */ "./src/initEvents.js");
/* harmony import */ var _interfaceView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaceView */ "./src/interfaceView.js");
/* harmony import */ var _gameControler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameControler */ "./src/gameControler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var dot = new Image();
dot.src = __webpack_require__(/*! ../../src/assets/object_dot.png */ "./src/assets/object_dot.png");

var Path = /*#__PURE__*/function () {
  function Path() {
    _classCallCheck(this, Path);

    this.a = 0.0030;
    this.groundLevel = 475;
    this.pointXOfParabola = 0;
    this.startPosOfBall = 75;
    this.startDrawingRangeOfPath = 100;
    this.parabolaFinalDistance = 200;
    this.parabolaTopPoint = -5;
    this.vx = 3;
    this.b = 0;
    this.c = 0;
    this.y = 0;
  }

  _createClass(Path, [{
    key: "setInitialConditions",
    value: function setInitialConditions() {
      this.b = 1;
      this.c = 1;
      this.startDrawingRangeOfPath = 100;
    }
  }, {
    key: "setIncreasePathDistance",
    value: function setIncreasePathDistance() {
      this.startDrawingRangeOfPath += this.vx;
    }
  }, {
    key: "increaseSpeedOFDrawBallPathForNextFound",
    value: function increaseSpeedOFDrawBallPathForNextFound() {
      this.vx += 1;
    }
  }, {
    key: "recalculateParabolaToFinalFlight",
    value: function recalculateParabolaToFinalFlight() {
      this.calculateShotPath(this.parabolaFinalDistance);
      _playerBall__WEBPACK_IMPORTED_MODULE_1__.default.getBallFinalFlight();
    }
  }, {
    key: "resetVelocityAfterGameOverToInitState",
    value: function resetVelocityAfterGameOverToInitState() {
      this.vx = 3;
    }
  }, {
    key: "getFinalDistancePath",
    value: function getFinalDistancePath() {
      this.parabolaFinalDistance = this.startDrawingRangeOfPath;
    }
  }, {
    key: "calculateShotPath",
    value: function calculateShotPath(x2) {
      this.b = (this.groundLevel - this.groundLevel - this.a * (this.startPosOfBall * this.startPosOfBall - x2 * x2)) / (this.startPosOfBall - x2);
      this.c = this.groundLevel - this.a * this.startPosOfBall * this.startPosOfBall - this.b * this.startPosOfBall;
      this.pointXOfParabola = this.startPosOfBall;
      _interfaceView__WEBPACK_IMPORTED_MODULE_3__.default.pointsCounterView();
    }
  }, {
    key: "calculateFlightPoints",
    value: function calculateFlightPoints() {
      this.y = Math.round(this.a * this.pointXOfParabola * this.pointXOfParabola + this.b * this.pointXOfParabola + this.c);
      this.pointXOfParabola++;
    }
  }, {
    key: "updateFlightPath",
    value: function updateFlightPath() {
      this.parabolaTopPoint = this.b * this.b - 4 * this.a * this.c;
      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.clearCanvasView();
      this.calculateShotPath(this.startDrawingRangeOfPath);
      var i = this.startPosOfBall;

      while (i < this.startDrawingRangeOfPath) {
        i++;
        this.pointXOfParabola += 50;
        this.calculateFlightPoints();
        _utilities__WEBPACK_IMPORTED_MODULE_0__.default.drawImage(_utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx, dot, this.pointXOfParabola + 10, this.y + 10);
      }

      _utilities__WEBPACK_IMPORTED_MODULE_0__.default.drawImage(_utilities__WEBPACK_IMPORTED_MODULE_0__.default.ctx, _playerBall__WEBPACK_IMPORTED_MODULE_1__.ball, this.startPosOfBall, this.groundLevel);
      this.setIncreasePathDistance();
    }
  }]);

  return Path;
}();

var shootingPath = new Path();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shootingPath);

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utilities = /*#__PURE__*/function () {
  function Utilities() {
    _classCallCheck(this, Utilities);

    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx1 = this.canvas.getContext("2d");
  }

  _createClass(Utilities, [{
    key: "createCanvas",
    value: function createCanvas() {
      this.ctx.fillStyle = "rgba(255, 255, 255, 1)"; //canvas dimensions

      this.canvas.width = 900;
      this.canvas.height = 700;
    }
  }, {
    key: "clearCanvasView",
    value: function clearCanvasView() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "drawImage",
    value: function drawImage(context, image, valueX, valueY) {
      context.drawImage(image, valueX, valueY, image.width, image.height);
    }
  }]);

  return Utilities;
}();

var utilities = new Utilities();
utilities.createCanvas();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utilities);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/background.png */ "./src/assets/background.png");
/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_background_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_tile_ground_down_01_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/tile_ground_down_01.png */ "./src/assets/tile_ground_down_01.png");
/* harmony import */ var _assets_tile_ground_down_01_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_tile_ground_down_01_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_tile_ground01_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/tile_ground01.png */ "./src/assets/tile_ground01.png");
/* harmony import */ var _assets_tile_ground01_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_tile_ground01_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_object_hole_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/object_hole.png */ "./src/assets/object_hole.png");
/* harmony import */ var _assets_object_hole_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_object_hole_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_object_flag_stick_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/object_flag_stick.png */ "./src/assets/object_flag_stick.png");
/* harmony import */ var _assets_object_flag_stick_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_object_flag_stick_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_object_flag_anim02_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/object_flag_anim02.png */ "./src/assets/object_flag_anim02.png");
/* harmony import */ var _assets_object_flag_anim02_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_object_flag_anim02_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_object_flag_anim01_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/object_flag_anim01.png */ "./src/assets/object_flag_anim01.png");
/* harmony import */ var _assets_object_flag_anim01_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_object_flag_anim01_png__WEBPACK_IMPORTED_MODULE_9__);
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_assets_background_png__WEBPACK_IMPORTED_MODULE_3___default()));
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_assets_tile_ground_down_01_png__WEBPACK_IMPORTED_MODULE_4___default()));
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_assets_tile_ground01_png__WEBPACK_IMPORTED_MODULE_5___default()));
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_assets_object_hole_png__WEBPACK_IMPORTED_MODULE_6___default()));
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_assets_object_flag_stick_png__WEBPACK_IMPORTED_MODULE_7___default()));
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_assets_object_flag_anim02_png__WEBPACK_IMPORTED_MODULE_8___default()));
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()((_assets_object_flag_anim01_png__WEBPACK_IMPORTED_MODULE_9___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#canvas,\r\n.wrapper {\r\n    position: absolute;\r\n    width: 900px;\r\n    height: 700px;\r\n    border: 1px solid black;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n#canvas {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-position-y: -150px;\r\n    background-repeat: repeat-x;\r\n    background-size: cover;\r\n    z-index: 0;\r\n}\r\n\r\n.ground {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 40px;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.grass {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 128px;\r\n    bottom: 40px;\r\n    left: 0;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.hole {\r\n    position: absolute;\r\n    width: 128px;\r\n    height: 73px;\r\n    bottom: 95px;\r\n    left: 500px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-repeat: no-repeat;\r\n    z-index: 0;\r\n}\r\n\r\n.stick {\r\n    position: absolute;\r\n    width: 18px;\r\n    height: 254px;\r\n    bottom: 73px;\r\n    left: 55px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n    background-repeat: no-repeat;\r\n    z-index: 0;\r\n}\r\n\r\n.flag{\r\n    position: absolute;\r\n    width: 128px;\r\n    height: 128px;\r\n    bottom: 220px;\r\n    left: 73px;\r\n    animation: flagMove1 .5s infinite, flagMove2 .5s infinite;\r\n    z-index: -1;\r\n}\r\n\r\n@keyframes flagMove1 {\r\n    0% {\r\n        display: none;\r\n    }\r\n    100%{\r\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n    }\r\n}\r\n\r\n@keyframes flagMove2 {\r\n    0% {\r\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n    }\r\n    100%{\r\n        display: none;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;;IAEI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,yDAA8C;IAC9C,6BAA6B;IAC7B,2BAA2B;IAC3B,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,OAAO;IACP,yDAAuD;AAC3D;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,YAAY;IACZ,OAAO;IACP,yDAAiD;AACrD;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,yDAA+C;IAC/C,4BAA4B;IAC5B,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,YAAY;IACZ,UAAU;IACV,yDAAqD;IACrD,4BAA4B;IAC5B,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,UAAU;IACV,yDAAyD;IACzD,WAAW;AACf;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,yDAAsD;IAC1D;AACJ;;AAEA;IACI;QACI,yDAAsD;IAC1D;IACA;QACI,aAAa;IACjB;AACJ","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#canvas,\r\n.wrapper {\r\n    position: absolute;\r\n    width: 900px;\r\n    height: 700px;\r\n    border: 1px solid black;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n#canvas {\r\n    background-image: url(\"assets/background.png\");\r\n    background-position-y: -150px;\r\n    background-repeat: repeat-x;\r\n    background-size: cover;\r\n    z-index: 0;\r\n}\r\n\r\n.ground {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 40px;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-image: url(\"assets/tile_ground_down_01.png\");\r\n}\r\n\r\n.grass {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 128px;\r\n    bottom: 40px;\r\n    left: 0;\r\n    background-image: url(\"assets/tile_ground01.png\");\r\n}\r\n\r\n.hole {\r\n    position: absolute;\r\n    width: 128px;\r\n    height: 73px;\r\n    bottom: 95px;\r\n    left: 500px;\r\n    background-image: url(\"assets/object_hole.png\");\r\n    background-repeat: no-repeat;\r\n    z-index: 0;\r\n}\r\n\r\n.stick {\r\n    position: absolute;\r\n    width: 18px;\r\n    height: 254px;\r\n    bottom: 73px;\r\n    left: 55px;\r\n    background-image: url(\"assets/object_flag_stick.png\");\r\n    background-repeat: no-repeat;\r\n    z-index: 0;\r\n}\r\n\r\n.flag{\r\n    position: absolute;\r\n    width: 128px;\r\n    height: 128px;\r\n    bottom: 220px;\r\n    left: 73px;\r\n    animation: flagMove1 .5s infinite, flagMove2 .5s infinite;\r\n    z-index: -1;\r\n}\r\n\r\n@keyframes flagMove1 {\r\n    0% {\r\n        display: none;\r\n    }\r\n    100%{\r\n        background-image: url(\"assets/object_flag_anim02.png\");\r\n    }\r\n}\r\n\r\n@keyframes flagMove2 {\r\n    0% {\r\n        background-image: url(\"assets/object_flag_anim01.png\");\r\n    }\r\n    100%{\r\n        display: none;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/14db8644caeb3f4298c7e18aa1d67159-background.png";

/***/ }),

/***/ "./src/assets/object_ball.png":
/*!************************************!*\
  !*** ./src/assets/object_ball.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8152f7183fd315345774f6fb1464d5d7-object_ball.png";

/***/ }),

/***/ "./src/assets/object_dot.png":
/*!***********************************!*\
  !*** ./src/assets/object_dot.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d77a6ae75a3002decf4046ba367346ca-object_dot.png";

/***/ }),

/***/ "./src/assets/object_flag_anim01.png":
/*!*******************************************!*\
  !*** ./src/assets/object_flag_anim01.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/82a486e453208a1db59aa576ae5f0107-object_flag_anim01.png";

/***/ }),

/***/ "./src/assets/object_flag_anim02.png":
/*!*******************************************!*\
  !*** ./src/assets/object_flag_anim02.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/931556da8446e72ae175b55c13b713b6-object_flag_anim02.png";

/***/ }),

/***/ "./src/assets/object_flag_stick.png":
/*!******************************************!*\
  !*** ./src/assets/object_flag_stick.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a5cf65c251a0a6c2f3ca1bd56134da9b-object_flag_stick.png";

/***/ }),

/***/ "./src/assets/object_hole.png":
/*!************************************!*\
  !*** ./src/assets/object_hole.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7dd03b308dc5bdd4bafb609295055a0e-object_hole.png";

/***/ }),

/***/ "./src/assets/tile_ground01.png":
/*!**************************************!*\
  !*** ./src/assets/tile_ground01.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6258fdf2289439c72e1dd290a1d884b9-tile_ground01.png";

/***/ }),

/***/ "./src/assets/tile_ground_down_01.png":
/*!********************************************!*\
  !*** ./src/assets/tile_ground_down_01.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d7013faaba8a349d3d7c1b81ca4d054a-tile_ground_down_01.png";

/***/ }),

/***/ "./src/assets/tile_sky_color01.png":
/*!*****************************************!*\
  !*** ./src/assets/tile_sky_color01.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/317c344de6df48a91f7924be4a43d546-tile_sky_color01.png";

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameControler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameControler */ "./src/gameControler.js");
/* harmony import */ var _shotingPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shotingPath */ "./src/shotingPath.js");
/* harmony import */ var _interfaceView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaceView */ "./src/interfaceView.js");
/* harmony import */ var _golfHole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./golfHole */ "./src/golfHole.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _initEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initEvents */ "./src/initEvents.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");







})();

/******/ })()
;
//# sourceMappingURL=main.js.map