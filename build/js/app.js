/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jelly = __webpack_require__(/*! ./jelly */ \"./jelly.js\");\n\nvar _jelly2 = _interopRequireDefault(_jelly);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nnew _jelly2.default();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKZWxseSBmcm9tICcuL2plbGx5JztcblxubmV3IEplbGx5KCk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./ball.js":
/*!*****************!*\
  !*** ./ball.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ball = function () {\n  function Ball(x, y, radius, color) {\n    _classCallCheck(this, Ball);\n\n    this.x = x || 0;\n    this.y = y || 0;\n    this.originalX = x || 0;\n    this.originalY = y || 0;\n    this.vx = 0;\n    this.vy = 0;\n    this.radius = radius || 2;\n    this.color = color || '#ff6600';\n    this.friction = 0.9;\n    this.springFactor = 0.01;\n  }\n\n  _createClass(Ball, [{\n    key: 'setPos',\n    value: function setPos(x, y) {\n      this.x = x;\n      this.y = y;\n    }\n  }, {\n    key: 'think',\n    value: function think(mouse) {\n      var dx = this.x - mouse.x;\n      var dy = this.y - mouse.y;\n      var dist = Math.sqrt(dx * dx + dy * dy);\n\n      //interaction\n      if (dist < mouse.radius) {\n        var angle = Math.atan2(dy, dx);\n        var tx = mouse.x + Math.cos(angle) * mouse.radius;\n        var ty = mouse.y + Math.sin(angle) * mouse.radius;\n\n        this.vx += tx - this.x;\n        this.vy += ty - this.y;\n      }\n\n      //spring back\n      var dx1 = -(this.x - this.originalX);\n      var dy1 = -(this.y - this.originalY);\n\n      this.vx += dx1 * this.springFactor;\n      this.vy += dy1 * this.springFactor;\n\n      //friction\n      this.vx *= this.friction;\n      this.vy *= this.friction;\n\n      //actual move\n      this.x += this.vx;\n      this.y += this.vy;\n    }\n  }, {\n    key: 'draw',\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n      ctx.fillStyle = this.color || '#ff0000';\n      ctx.fill();\n      ctx.closePath();\n      ctx.restore();\n    }\n  }]);\n\n  return Ball;\n}();\n\nexports.default = Ball;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9iYWxsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9iYWxsLmpzP2M2ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHJhZGl1cywgY29sb3IpIHtcbiAgICB0aGlzLnggPSB4IHx8IDA7XG4gICAgdGhpcy55ID0geSB8fCAwO1xuICAgIHRoaXMub3JpZ2luYWxYID0geCB8fCAwO1xuICAgIHRoaXMub3JpZ2luYWxZID0geSB8fCAwO1xuICAgIHRoaXMudnggPSAwO1xuICAgIHRoaXMudnkgPSAwO1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDI7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yIHx8ICcjZmY2NjAwJztcbiAgICB0aGlzLmZyaWN0aW9uID0gMC45O1xuICAgIHRoaXMuc3ByaW5nRmFjdG9yID0gMC4wMTtcbiAgfVxuXG4gIHNldFBvcyh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgdGhpbmsobW91c2UpIHtcbiAgICBsZXQgZHggPSB0aGlzLnggLSBtb3VzZS54O1xuICAgIGxldCBkeSA9IHRoaXMueSAtIG1vdXNlLnk7XG4gICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgLy9pbnRlcmFjdGlvblxuICAgIGlmIChkaXN0IDwgbW91c2UucmFkaXVzKSB7XG4gICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgIGNvbnN0IHR4ID0gbW91c2UueCArIE1hdGguY29zKGFuZ2xlKSAqIG1vdXNlLnJhZGl1cztcbiAgICAgIGNvbnN0IHR5ID0gbW91c2UueSArIE1hdGguc2luKGFuZ2xlKSAqIG1vdXNlLnJhZGl1cztcblxuICAgICAgdGhpcy52eCArPSB0eCAtIHRoaXMueDtcbiAgICAgIHRoaXMudnkgKz0gdHkgLSB0aGlzLnk7XG4gICAgfVxuXG4gICAgLy9zcHJpbmcgYmFja1xuICAgIGNvbnN0IGR4MSA9IC0odGhpcy54IC0gdGhpcy5vcmlnaW5hbFgpO1xuICAgIGNvbnN0IGR5MSA9IC0odGhpcy55IC0gdGhpcy5vcmlnaW5hbFkpO1xuXG4gICAgdGhpcy52eCArPSBkeDEgKiB0aGlzLnNwcmluZ0ZhY3RvcjtcbiAgICB0aGlzLnZ5ICs9IGR5MSAqIHRoaXMuc3ByaW5nRmFjdG9yO1xuXG4gICAgLy9mcmljdGlvblxuICAgIHRoaXMudnggKj0gdGhpcy5mcmljdGlvbjtcbiAgICB0aGlzLnZ5ICo9IHRoaXMuZnJpY3Rpb247XG5cbiAgICAvL2FjdHVhbCBtb3ZlXG4gICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgdGhpcy55ICs9IHRoaXMudnk7XG4gIH1cblxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvciB8fCAnI2ZmMDAwMCc7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBM0RBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ball.js\n");

/***/ }),

/***/ "./jelly.js":
/*!******************!*\
  !*** ./jelly.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ball = __webpack_require__(/*! ./ball */ \"./ball.js\");\n\nvar _ball2 = _interopRequireDefault(_ball);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Jelly = function () {\n  function Jelly() {\n    _classCallCheck(this, Jelly);\n\n    this.canvas = document.getElementById('jelly');\n    this.ctx = this.canvas.getContext('2d');\n\n    this.cursorSize = 120;\n    this.cursorColor = '#ff0000';\n    this.pos = {\n      x: 0,\n      y: 0,\n      radius: this.cursorSize\n    };\n    this.mouse = new _ball2.default(this.pos.x, this.pos.y, this.cursorSize, this.cursorColor);\n\n    this.balls = [];\n    this.ballsQuantity = 10;\n    this.ballSize = 2;\n    this.ballColor = '#ff6600';\n\n    this.init();\n  }\n\n  _createClass(Jelly, [{\n    key: 'init',\n    value: function init() {\n      this.mouseMove();\n      this.getBalls();\n      this.drawBalls();\n      this._render();\n    }\n  }, {\n    key: 'getBalls',\n    value: function getBalls() {\n      for (var i = 0; i < this.ballsQuantity; i++) {\n        // console.log(this.ballSize);\n        this.balls.push(\n        // new Ball(\n        //   Math.random() * this.canvas.width,\n        //   Math.random() * this.canvas.height,\n        //   this.ballSize\n        // )\n        new _ball2.default(200 + 100 * Math.cos(i * 2 * Math.PI / this.ballsQuantity), 200 + 100 * Math.sin(i * 2 * Math.PI / this.ballsQuantity), this.ballSize));\n      }\n    }\n  }, {\n    key: 'getMousePos',\n    value: function getMousePos(evt) {\n      var rect = this.canvas.getBoundingClientRect();\n      return {\n        x: evt.clientX - rect.left,\n        y: evt.clientY - rect.top\n      };\n    }\n  }, {\n    key: 'mouseMove',\n    value: function mouseMove() {\n      var _this = this;\n\n      this.canvas.onmousemove = function (e) {\n        var coords = _this.getMousePos(e);\n        _this.pos.x = coords.x;\n        _this.pos.y = coords.y;\n      };\n    }\n  }, {\n    key: 'drawMouse',\n    value: function drawMouse() {\n      this.mouse.setPos(this.pos.x, this.pos.y);\n      this.mouse.draw(this.ctx);\n    }\n  }, {\n    key: 'drawBalls',\n    value: function drawBalls() {\n      var _this2 = this;\n\n      this.balls.forEach(function (el) {\n        el.think(_this2.pos);\n        // el.draw(this.ctx);\n      });\n    }\n  }, {\n    key: 'connectDots',\n    value: function connectDots(balls) {\n      var _this3 = this;\n\n      this.ctx.beginPath();\n      this.ctx.moveTo(balls[0].x, balls[0].y);\n      balls.forEach(function (ball) {\n        _this3.ctx.lineTo(ball.x, ball.y);\n      });\n      this.ctx.closePath();\n      this.ctx.fill();\n    }\n  }, {\n    key: 'ConnectDots1',\n    value: function ConnectDots1(dots) {\n      this.ctx.beginPath();\n\n      for (var i = 0, jlen = dots.length; i <= jlen; ++i) {\n        var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];\n        var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];\n        this.ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);\n      }\n\n      this.ctx.closePath();\n      this.ctx.fill();\n    }\n  }, {\n    key: '_render',\n    value: function _render() {\n      var self = this;\n\n      function render() {\n        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);\n\n        self.drawMouse();\n        self.drawBalls();\n        self.ConnectDots1(self.balls);\n\n        // self.drawBall(self.x, self.y, self.cursorSize, '#000000');\n        // self.balls.forEach((el) => self.drawBall(el.x, el.y, el.radius, el.color));\n        requestAnimationFrame(render);\n      }\n\n      requestAnimationFrame(render);\n    }\n  }]);\n\n  return Jelly;\n}();\n\nexports.default = Jelly;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qZWxseS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvamVsbHkuanM/NmFhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tICcuL2JhbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKZWxseSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2plbGx5Jyk7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cblxuXG4gICAgdGhpcy5jdXJzb3JTaXplID0gMTIwO1xuICAgIHRoaXMuY3Vyc29yQ29sb3IgPSAnI2ZmMDAwMCc7XG4gICAgdGhpcy5wb3MgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHJhZGl1czogdGhpcy5jdXJzb3JTaXplXG4gICAgfTtcbiAgICB0aGlzLm1vdXNlID0gbmV3IEJhbGwodGhpcy5wb3MueCwgdGhpcy5wb3MueSwgdGhpcy5jdXJzb3JTaXplLCB0aGlzLmN1cnNvckNvbG9yKTtcblxuXG4gICAgdGhpcy5iYWxscyA9IFtdO1xuICAgIHRoaXMuYmFsbHNRdWFudGl0eSA9IDEwO1xuICAgIHRoaXMuYmFsbFNpemUgPSAyO1xuICAgIHRoaXMuYmFsbENvbG9yID0gJyNmZjY2MDAnO1xuXG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5tb3VzZU1vdmUoKTtcbiAgICB0aGlzLmdldEJhbGxzKCk7XG4gICAgdGhpcy5kcmF3QmFsbHMoKTtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG5cblxuICBnZXRCYWxscygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFsbHNRdWFudGl0eTsgaSsrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJhbGxTaXplKTtcbiAgICAgIHRoaXMuYmFsbHMucHVzaChcbiAgICAgICAgLy8gbmV3IEJhbGwoXG4gICAgICAgIC8vICAgTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FudmFzLndpZHRoLFxuICAgICAgICAvLyAgIE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQsXG4gICAgICAgIC8vICAgdGhpcy5iYWxsU2l6ZVxuICAgICAgICAvLyApXG4gICAgICAgIG5ldyBCYWxsKFxuICAgICAgICAgIDIwMCArIDEwMCpNYXRoLmNvcyhpICogIDIgKiBNYXRoLlBJIC8gdGhpcy5iYWxsc1F1YW50aXR5KSxcbiAgICAgICAgICAyMDAgKyAxMDAqTWF0aC5zaW4oaSAqICAyICogTWF0aC5QSSAvIHRoaXMuYmFsbHNRdWFudGl0eSksXG4gICAgICAgICAgdGhpcy5iYWxsU2l6ZVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGdldE1vdXNlUG9zKGV2dCkge1xuICAgIHZhciByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGV2dC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogZXZ0LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG4gIH1cblxuICBtb3VzZU1vdmUoKSB7XG4gICAgdGhpcy5jYW52YXMub25tb3VzZW1vdmUgPSBlID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuZ2V0TW91c2VQb3MoZSk7XG4gICAgICB0aGlzLnBvcy54ID0gY29vcmRzLng7XG4gICAgICB0aGlzLnBvcy55ID0gY29vcmRzLnk7XG4gICAgfVxuXG4gIH1cblxuICBkcmF3TW91c2UoKSB7XG4gICAgdGhpcy5tb3VzZS5zZXRQb3ModGhpcy5wb3MueCwgdGhpcy5wb3MueSk7XG4gICAgdGhpcy5tb3VzZS5kcmF3KHRoaXMuY3R4KTtcbiAgfVxuXG4gIGRyYXdCYWxscygpIHtcbiAgICB0aGlzLmJhbGxzLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwudGhpbmsodGhpcy5wb3MpO1xuICAgICAgLy8gZWwuZHJhdyh0aGlzLmN0eCk7XG4gICAgfSlcbiAgfVxuXG4gIGNvbm5lY3REb3RzKGJhbGxzKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKGJhbGxzWzBdLngsIGJhbGxzWzBdLnkpO1xuICAgIGJhbGxzLmZvckVhY2goYmFsbCA9PiB7XG4gICAgICB0aGlzLmN0eC5saW5lVG8oYmFsbC54LCBiYWxsLnkpO1xuICAgIH0pO1xuICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgfVxuXG4gIENvbm5lY3REb3RzMShkb3RzKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgamxlbiA9IGRvdHMubGVuZ3RoOyBpIDw9IGpsZW47ICsraSkge1xuICAgICAgdmFyIHAwID0gZG90c1tpICsgMCA+PSBqbGVuID8gaSArIDAgLSBqbGVuIDogaSArIDBdO1xuICAgICAgdmFyIHAxID0gZG90c1tpICsgMSA+PSBqbGVuID8gaSArIDEgLSBqbGVuIDogaSArIDFdO1xuICAgICAgdGhpcy5jdHgucXVhZHJhdGljQ3VydmVUbyhwMC54LCBwMC55LCAocDAueCArIHAxLngpICogMC41LCAocDAueSArIHAxLnkpICogMC41KTtcbiAgICB9XG5cbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsKCk7XG4gIH1cblxuICBfcmVuZGVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHNlbGYuY3R4LmNsZWFyUmVjdCgwLCAwLCBzZWxmLmNhbnZhcy53aWR0aCwgc2VsZi5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgc2VsZi5kcmF3TW91c2UoKTtcbiAgICAgIHNlbGYuZHJhd0JhbGxzKCk7XG4gICAgICBzZWxmLkNvbm5lY3REb3RzMShzZWxmLmJhbGxzKTtcblxuXG4gICAgICAvLyBzZWxmLmRyYXdCYWxsKHNlbGYueCwgc2VsZi55LCBzZWxmLmN1cnNvclNpemUsICcjMDAwMDAwJyk7XG4gICAgICAvLyBzZWxmLmJhbGxzLmZvckVhY2goKGVsKSA9PiBzZWxmLmRyYXdCYWxsKGVsLngsIGVsLnksIGVsLnJhZGl1cywgZWwuY29sb3IpKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQTNIQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./jelly.js\n");

/***/ })

/******/ });