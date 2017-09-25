module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ({

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
	function Circle(size, color, position) {
		_classCallCheck(this, Circle);

		this.size = size;
		this.color = color;
		this.position = position;
	}

	_createClass(Circle, [{
		key: "draw",
		value: function draw(context) {

			console.log(this);

			context.fillStyle = this.color;

			context.beginPath();
			context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, false);
			context.closePath();
			context.fill();
		}
	}]);

	return Circle;
}();

exports.default = Circle;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorPoint = function ColorPoint(position, color) {
	_classCallCheck(this, ColorPoint);

	this.position = position;
	this.color = color;
};

exports.default = ColorPoint;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DrawableObject = function () {
	function DrawableObject(color) {
		_classCallCheck(this, DrawableObject);

		this.color = color;
	}

	_createClass(DrawableObject, [{
		key: "draw",
		value: function draw(context) {

			context.fillStyle = this.color;

			context.beginPath();
			context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, false);
			context.closePath();
			context.fill();
		}
	}]);

	return DrawableObject;
}();

exports.default = DrawableObject;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = function () {
	function Line(p1, p2, color, opacity) {
		_classCallCheck(this, Line);

		this.p1 = p1;
		this.p2 = p2;
		this.color = color.replace(')', ", " + opacity + ")").replace("rgb", "rgba");
	}

	_createClass(Line, [{
		key: "draw",
		value: function draw(context) {

			context.strokeStyle = this.color;
			context.lineWidth = 3;

			context.beginPath();
			context.moveTo(this.p1.x, this.p1.y);
			context.lineTo(this.p2.x, this.p2.y);
			context.stroke();
		}
	}]);

	return Line;
}();

exports.default = Line;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Position = function Position(x, y) {
	_classCallCheck(this, Position);

	this.x = x;
	this.y = y;
};

exports.default = Position;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasCore = function () {
	function CanvasCore() {
		_classCallCheck(this, CanvasCore);

		this.paintQueue = [];
		this.drawQueue = [];

		this.requiresClear = false;
	}

	_createClass(CanvasCore, [{
		key: "addDrawable",
		value: function addDrawable(drawable) {
			this.draqQueue.push(drawable);
		}
	}, {
		key: "addPaintable",
		value: function addPaintable(paintable) {
			this.paintQueue.push(paintable);
		}
	}, {
		key: "setRequiresClear",
		value: function setRequiresClear(bool) {
			if (bool === null || bool === true) {
				this.requiresClear = true;
			} else this.requiresClear = bool;
		}
	}, {
		key: "getRequiresClear",
		value: function getRequiresClear() {
			return this.requiresClear;
		}
	}, {
		key: "getPaintQueue",
		value: function getPaintQueue() {
			var temp = this.paintQueue;
			this.paintQueue = [];
			return temp;
		}
	}, {
		key: "getDrawQueue",
		value: function getDrawQueue() {
			var temp = this.drawQueue;
			this.drawQueue = [];
			return temp;
		}
	}]);

	return CanvasCore;
}();

exports.default = CanvasCore;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GradientLine = function () {
	function GradientLine(cp1, cp2) {
		_classCallCheck(this, GradientLine);

		this.cp1 = cp1;
		this.cp2 = cp2;

		this.color = '#fff';
	}

	_createClass(GradientLine, [{
		key: 'draw',
		value: function draw(context) {

			var gradient = context.createLinearGradient(this.cp1.position.x, this.cp1.position.y, this.cp2.position.x, this.cp2.position.y);
			gradient.addColorStop(0, this.cp1.color);
			gradient.addColorStop(1, this.cp2.color);
			context.strokeStyle = gradient;
			context.lineWidth = 3;

			context.beginPath();
			context.moveTo(this.cp1.position.x, this.cp1.position.y);
			context.lineTo(this.cp2.position.x, this.cp2.position.y);
			context.stroke();
		}
	}]);

	return GradientLine;
}();

exports.default = GradientLine;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Canvas = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Canvas\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _Canvas2 = _interopRequireDefault(_Canvas);

var _CanvasCore = __webpack_require__(194);

var _CanvasCore2 = _interopRequireDefault(_CanvasCore);

var _ColorPoint = __webpack_require__(190);

var _ColorPoint2 = _interopRequireDefault(_ColorPoint);

var _Circle = __webpack_require__(189);

var _Circle2 = _interopRequireDefault(_Circle);

var _DrawableObject = __webpack_require__(191);

var _DrawableObject2 = _interopRequireDefault(_DrawableObject);

var _GradientLine = __webpack_require__(195);

var _GradientLine2 = _interopRequireDefault(_GradientLine);

var _Line = __webpack_require__(192);

var _Line2 = _interopRequireDefault(_Line);

var _Position = __webpack_require__(193);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	Canvas: _Canvas2.default,
	CanvasCore: _CanvasCore2.default,
	Circle: _Circle2.default,
	DrawableObject: _DrawableObject2.default,
	GradientLine: _GradientLine2.default,
	Line: _Line2.default,
	Position: _Position2.default

};

/***/ })

/******/ });