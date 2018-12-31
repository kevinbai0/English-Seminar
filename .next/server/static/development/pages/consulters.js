module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/consulters.js":
/*!*****************************!*\
  !*** ./pages/consulters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_ConsulterPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/ConsulterPage */ "./src/components/ConsulterPage.js");
/* harmony import */ var _src_js_getNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/getNavBar */ "./src/js/getNavBar.js");
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/pages/consulters.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_ConsulterPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    shouldUpdate: true,
    navigationBar: Object(_src_js_getNavBar__WEBPACK_IMPORTED_MODULE_2__["default"])(1, false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
});

/***/ }),

/***/ "./src/components/ConsulterPage.js":
/*!*****************************************!*\
  !*** ./src/components/ConsulterPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EvidencePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EvidencePage */ "./src/components/EvidencePage.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/data */ "./src/js/data.js");
/* harmony import */ var _ConsulterSplashPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConsulterSplashPage */ "./src/components/ConsulterSplashPage.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style */ "./src/style.js");
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/components/ConsulterPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ConsulterPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConsulterPage, _React$Component);

  function ConsulterPage(props) {
    var _this;

    _classCallCheck(this, ConsulterPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConsulterPage).call(this, props));
    _this.commentatorSplashRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      isAnimated: false
    };
    return _this;
  }

  _createClass(ConsulterPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.isAnimated) {
        console.log("Is animated");
        animejs__WEBPACK_IMPORTED_MODULE_2___default()({
          targets: this.commentatorSplashRef.current,
          translateX: -window.innerWidth / 2,
          opacity: [1, 0],
          duration: 4000,
          easing: "easeInOutQuad"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "commentator-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, _style__WEBPACK_IMPORTED_MODULE_6__["default"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          opacity: this.state.isAnimated ? 1 : 0,
          transition: "all 0.5s ease"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, this.props.navigationBar), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        in: !this.state.isAnimated,
        timeout: 4000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, function (state) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConsulterSplashPage__WEBPACK_IMPORTED_MODULE_5__["default"], {
          state: state,
          shouldAnimate: !_this2.state.isAnimated,
          animationsFinished: _this2.animationsFinished.bind(_this2),
          reference: _this2.commentatorSplashRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        in: this.state.isAnimated,
        timeout: 4000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, function (state) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EvidencePage__WEBPACK_IMPORTED_MODULE_3__["default"], {
          subprongs: _js_data__WEBPACK_IMPORTED_MODULE_4__["default"].Consulter,
          state: state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        });
      }));
    }
  }, {
    key: "animationsFinished",
    value: function animationsFinished() {
      this.setState({
        isAnimated: true
      });
    }
  }]);

  return ConsulterPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ConsulterPage);

/***/ }),

/***/ "./src/components/ConsulterSplashPage.js":
/*!***********************************************!*\
  !*** ./src/components/ConsulterSplashPage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/components/ConsulterSplashPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ConsulterSplashPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConsulterSplashPage, _React$Component);

  function ConsulterSplashPage(props) {
    var _this;

    _classCallCheck(this, ConsulterSplashPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConsulterSplashPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var classNameExtension = "";

      if (_this.props.state === "exited") {
        classNameExtension = " hidden";
      } else if (_this.props.state === "entering") {
        classNameExtension = " entering";
      } else if (_this.props.state === "entered") {
        classNameExtension = " entering entered"; // reposition elements
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "consulter-splash-page splash-page",
        onClick: _this.animationsFinished.bind(_assertThisInitialized(_assertThisInitialized(_this))),
        ref: _this.props.reference,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "consulter" + classNameExtension,
        ref: _this.titleRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "The ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Consulter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "paradox-wise" + classNameExtension,
        ref: _this.comicReliefRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Paradoxically Wise"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wise" + classNameExtension,
        ref: _this.humorRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Wise"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "points-faults" + classNameExtension,
        ref: _this.pointsFaultsRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Points Out Faults"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "protective" + classNameExtension,
        ref: _this.alwaysSayRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Protective"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loyal" + classNameExtension,
        ref: _this.voicesOpinionRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, "Loyal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mentor" + classNameExtension,
        ref: _this.peanutRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Mentor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "honest" + classNameExtension,
        ref: _this.contradictsRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Honest"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cooperative" + classNameExtension,
        ref: _this.cooperativeRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Cooperative"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "knowledgable" + classNameExtension,
        ref: _this.commentaryRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Knowledgable Insight"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "advocate" + classNameExtension,
        ref: _this.noAuthorityRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "King's Advocate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "states-obvious" + classNameExtension,
        ref: _this.unheardRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "States the obvious"));
    });

    _this.comicReliefRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.humorRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.alwaysSayRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.voicesOpinionRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.peanutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.contradictsRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.commentaryRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.noAuthorityRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.unheardRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.titleRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.pointsFaultsRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.cooperativeRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      animated: false
    };
    return _this;
  }

  _createClass(ConsulterSplashPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.state === "entered" && !this.props.isAnimated) {
        var animateAtOnce = true;
        var timeline = animejs__WEBPACK_IMPORTED_MODULE_1___default.a.timeline();
        timeline.add({
          targets: this.titleRef.current,
          opacity: [0, 1],
          translateY: [-200, 0],
          duration: 3000,
          offset: 0
        }).add({
          targets: this.alwaysSayRef.current,
          scale: [0.1, 1],
          translateX: [-window.innerWidth / 2, 0],
          opacity: [0, 1],
          easing: "easeInOutQuad",
          offset: animateAtOnce ? 0 : 500,
          duration: 3000
        }).add({
          targets: this.comicReliefRef.current,
          duration: 5000,
          translateX: [-500, 0],
          rotate: [-90, -90],
          easing: "easeInOutQuad",
          offset: animateAtOnce ? 0 : "-=1000"
        }).add({
          targets: this.humorRef.current,
          translateX: [window.innerWidth, 0],
          rotateX: [360, 0],
          duration: 3500,
          easing: "easeInOutQuad",
          offset: animateAtOnce ? 0 : "-=1000"
        }).add({
          targets: this.commentaryRef.current,
          translateX: [-2 * window.innerWidth, 0],
          duration: animateAtOnce ? 3000 : 4000,
          offset: animateAtOnce ? 0 : "-=1500",
          easing: "easeInQuad"
        }).add({
          targets: this.contradictsRef.current,
          translateX: [1000, 0],
          duration: 5000,
          offset: animateAtOnce ? 0 : "-=500",
          easing: "easeOutQuad"
        }).add({
          targets: this.noAuthorityRef.current,
          translateY: [-500, 0],
          duration: 5000,
          easing: "easeOutQuad",
          offset: animateAtOnce ? 0 : "-=500"
        }).add({
          targets: this.unheardRef.current,
          translateX: [500, 0],
          scale: [0.5, 1],
          rotate: [-90, -90],
          easing: "easeInCubic",
          duration: 3000,
          offset: animateAtOnce ? 0 : "-=500"
        }).add({
          targets: this.voicesOpinionRef.current,
          translateY: [500, 0],
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 5000,
          offset: animateAtOnce ? 0 : "-=500"
        }).add({
          targets: this.peanutRef.current,
          translateX: [-window.innerWidth, 0],
          translateY: [150, 0],
          duration: 6000,
          offset: animateAtOnce ? 0 : "-=2000",
          easing: "easeInOutQuad"
        }).add({
          targets: this.pointsFaultsRef.current,
          translateX: [-500, 0],
          translateY: [150, 0],
          rotate: [-90, -90],
          duration: 3000,
          offset: animateAtOnce ? 0 : "-=500"
        }).add({
          targets: this.cooperativeRef.current,
          translateX: [500, 0],
          translateY: [150, 0],
          duration: 3000,
          offset: animateAtOnce ? 0 : "-=500"
        });
      }
    }
  }, {
    key: "animationsFinished",
    value: function animationsFinished() {
      var _this2 = this;

      this.setState({
        animated: true
      }, function () {
        _this2.props.animationsFinished();
      });
    }
  }]);

  return ConsulterSplashPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ConsulterSplashPage);

/***/ }),

/***/ "./src/components/EvidencePage.js":
/*!****************************************!*\
  !*** ./src/components/EvidencePage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollButton */ "./src/components/ScrollButton.js");
/* harmony import */ var _ThesisPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThesisPage */ "./src/components/ThesisPage.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/components/EvidencePage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var EvidencePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EvidencePage, _React$Component);

  function EvidencePage(props) {
    var _this;

    _classCallCheck(this, EvidencePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EvidencePage).call(this, props));
    _this.pageRefs = [];
    var count = props.subprongs.length * 3 + 2;

    for (var i = 0; i < count; i++) {
      _this.pageRefs.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());
    }

    _this.state = {
      count: count,
      currentPage: 0
    };
    return _this;
  }

  _createClass(EvidencePage, [{
    key: "transitionPage",
    value: function transitionPage(index) {
      var _this$state = this.state,
          count = _this$state.count,
          currentPage = _this$state.currentPage;
      this.setState({
        currentPage: currentPage + 1 < count ? currentPage + 1 : currentPage
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var counter = 0;
      /*for (let i = this.state.currentPage; i >= 0; i--) {
          this.pageRefs[i].current.style.zIndex=100 - counter++;
          this.pageRefs[i].current.style.height="100vh";
      }
      for (let i = this.state.count; i > this.state.count; i--) {
          this.pageRefs[i].current.style.zIndex=100-counter++;
          this.pageRefs[i].current.style.height="100vh";
      }*/

      for (var i = 0; i < this.state.count; i++) {
        this.pageRefs[i].current.style.zIndex = 100 - i;
      }

      var affected = this.pageRefs.filter(function (val, i) {
        return i < _this2.state.currentPage;
      }).map(function (val) {
        return val.current;
      });
      animejs__WEBPACK_IMPORTED_MODULE_3___default()({
        targets: affected,
        opacity: 0,
        duration: 2000,
        easing: "easeInOutQuad",
        complete: function complete() {
          affected.forEach(function (element) {
            element.style.visibility = "hidden";
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var subprongs = this.props.subprongs;
      console.log(this.props.state);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "evidence-page " + this.props.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "evidence-landing evidence-container",
        ref: this.pageRefs[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "evidence-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Evidence"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: function onClick() {
          return _this3.transitionPage(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), subprongs.map(function (subprong, i) {
        var multiLearLength = subprong.quoteLearMultiple && subprong.quoteLearMultiple.length;
        var numRowsLear = multiLearLength && multiLearLength > 5 ? Math.ceil(multiLearLength / 2) : multiLearLength;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "subprong-container evidence-container",
          ref: _this3.pageRefs[i * 3 + 1],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "subprong-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, subprong.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onClick: function onClick() {
            return _this3.transitionPage(i * 3 + 1);
          },
          dark: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-container blue evidence-container",
          ref: _this3.pageRefs[i * 3 + 2],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-symbol",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "\u201C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-lines",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "inline-quote",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "rectangle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), subprong.quoteOedipus ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, subprong.quoteOedipus) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "multi-quote-content",
          style: {
            gridTemplateRows: "repeat(" + subprong.quoteOedipusMultiple.length + ", 1fr)",
            gridTemplateColumns: "1fr"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, subprong.quoteOedipusMultiple.map(function (text, i) {
          var val = i + 1;
          var str = val < 10 ? "0" + val : "" + val;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: i,
            className: "q",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, str, " ", text);
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-author",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, subprong.quoteOedipusAuthor)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onClick: function onClick() {
            return _this3.transitionPage(i * 3 + 2);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-container red evidence-container",
          ref: _this3.pageRefs[i * 3 + 3],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-symbol",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, "\u201C"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-lines",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "inline-quote",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "rectangle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }), subprong.quoteLear ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, subprong.quoteLear) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "multi-quote-content",
          style: {
            gridTemplateRows: "repeat(" + numRowsLear + ", 1fr)",
            gridTemplateColumns: numRowsLear === multiLearLength ? "1fr" : "auto auto"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, subprong.quoteLearMultiple.map(function (text, i) {
          var val = i + 1;
          var str = val < 10 ? "0" + val : "" + val;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: i,
            className: "q",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, str, " ", text);
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quote-author",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, subprong.quoteLearAuthor)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onClick: function onClick() {
            return _this3.transitionPage(i * 3 + 3);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        })));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThesisPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        reference: this.pageRefs[this.state.count - 1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }));
    }
  }]);

  return EvidencePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EvidencePage);

/***/ }),

/***/ "./src/components/NavigationBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavigationBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/components/NavigationBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NavItem = function NavItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.title)));
};

var NavigationBar =
/*#__PURE__*/
function (_Component) {
  _inherits(NavigationBar, _Component);

  function NavigationBar(props) {
    var _this;

    _classCallCheck(this, NavigationBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationBar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resizeListener", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    _this.state = {
      width: 1920
    };
    return _this;
  }

  _createClass(NavigationBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.resizeListener);
      this.setState({
        width: window.innerWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.resizeListener);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props);

      if (this.state.width >= 800) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "nav-items",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, this.props.navItems.map(function (item, i) {
          var className = "nav-item";
          if (i === _this2.props.selected) className += " selected";
          if (!_this2.props.lightBar) className += " dark";
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
            key: i,
            title: item.name,
            className: className,
            selected: _this2.props.selected === i,
            link: item.link,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          });
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HamburgerNavigation, {
        navItems: this.props.navItems,
        colorState: this.props.lightBar ? "light" : "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    }
  }]);

  return NavigationBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

var HamburgerNavigation =
/*#__PURE__*/
function (_Component2) {
  _inherits(HamburgerNavigation, _Component2);

  function HamburgerNavigation(props) {
    var _this3;

    _classCallCheck(this, HamburgerNavigation);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(HamburgerNavigation).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "default", "default");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "expanded", "expanded");

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "firstLoad", true);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "last", _this3.default);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "toggleHamburger", function () {
      _this3.setState({
        hamburgerState: _this3.state.hamburgerState === _this3.default ? _this3.expanded : _this3.default
      });
    });

    _this3.state = {
      hamburgerState: _this3.default
    };
    return _this3;
  }

  _createClass(HamburgerNavigation, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var classAddonNav = this.state.hamburgerState === this.default ? "nav-hidden" : "animated bounceInDown nav-shown";

      if (this.firstLoad) {
        classAddonNav = "nav-hidden";
        this.firstLoad = false;
      }

      var classAddonItem = this.state.hamburgerState === this.default ? "hidden" : "";
      var menuClass = this.state.hamburgerState === this.default ? "" : "open";
      this.last = this.state.hamburgerState;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-nav-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "nav-icon",
        className: menuClass,
        onClick: this.toggleHamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-nav-items-container " + classAddonNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, this.props.navItems.map(function (navItem, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: classAddonItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: navItem.link,
          onClick: function onClick(e) {
            return _this4.toggleHamburger;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, navItem.name)));
      })));
    }
  }]);

  return HamburgerNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/components/ScrollButton.js":
/*!****************************************!*\
  !*** ./src/components/ScrollButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/components/ScrollButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ScrollButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollButton, _React$Component);

  function ScrollButton(props) {
    var _this;

    _classCallCheck(this, ScrollButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollButton).call(this, props));
    _this.buttonRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.ballRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(ScrollButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: this.buttonRef.current
      });
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: this.ballRef.current,
        translateY: ["-350%", "300%"],
        translateX: ["-50%", "-50%"],
        opacity: [1, 0],
        loop: true,
        duration: 800,
        direction: "alternate",
        easing: "easeInCubic"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          state = _this$props.state,
          dark = _this$props.dark;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "scroll-button " + state + (dark ? " dark" : ""),
        ref: this.buttonRef,
        onClick: this.handleClick.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ball",
        ref: this.ballRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }, {
    key: "handleClick",
    value: function handleClick(evt) {
      this.props.onClick && this.props.onClick();
    }
  }]);

  return ScrollButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ScrollButton);

/***/ }),

/***/ "./src/components/ThesisPage.js":
/*!**************************************!*\
  !*** ./src/components/ThesisPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "animejs");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/components/ThesisPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ThesisPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ThesisPage, _React$Component);

  function ThesisPage(props) {
    var _this;

    _classCallCheck(this, ThesisPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ThesisPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "thesis-component",
        style: {
          height: _this.props.currentProng ? "100vh" : "auto"
        },
        ref: _this.props.reference,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "caption",
        ref: _this.captionRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Both"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, " characters provide the same function in "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "both"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, " plays.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "prongs-container",
        ref: _this.prongsContainerRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: {
          pathname: "/consulters",
          state: {
            shouldUpdate: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "prong prong1",
        ref: _this.consulterProngRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "The ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Consulter")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: {
          pathname: "/mediators",
          state: {
            shouldUpdate: true
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "prong prong2",
        ref: _this.mediatorProngRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "The ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Mediator")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/commentators",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "prong prong3",
        ref: _this.commentatorProngRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "The ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "emphasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Commentator"))))));
    });

    _this.captionRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.consulterProngRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.commentatorProngRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.mediatorProngRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.prongsContainerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.commentatorSplashRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.state = {
      shouldSwitchPage: false
    };
    return _this;
  }

  _createClass(ThesisPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var commentatorRightOffset, consulterLeftOffset, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.props.scrollState === "scrolling")) {
                  _context.next = 9;
                  break;
                }

                commentatorRightOffset = window.innerWidth - this.commentatorProngRef.current.offsetLeft + 20;
                consulterLeftOffset = this.consulterProngRef.current.offsetLeft + this.consulterProngRef.current.offsetWidth + 20;
                animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                  targets: this.captionRef.current,
                  opacity: 0,
                  duration: 0
                });
                animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                  targets: this.commentatorProngRef.current,
                  translateX: [0, commentatorRightOffset],
                  translateY: [0, -200],
                  duration: 0
                });
                animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                  targets: this.mediatorProngRef.current,
                  opacity: 0,
                  duration: 0
                });
                animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                  targets: this.consulterProngRef.current,
                  translateX: [0, -consulterLeftOffset],
                  translateY: [0, 200],
                  duration: 0
                });
                _context.next = 16;
                break;

              case 9:
                if (!(this.props.scrollState === "scrolled")) {
                  _context.next = 16;
                  break;
                }

                _context.next = 12;
                return this.animateCaptionText();

              case 12:
                result = _context.sent;
                animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                  targets: this.commentatorProngRef.current,
                  translateX: 0,
                  translateY: 0,
                  duration: 1000
                });
                animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                  targets: this.mediatorProngRef.current,
                  opacity: 1,
                  duration: 1000
                });
                animejs__WEBPACK_IMPORTED_MODULE_2___default()({
                  targets: this.consulterProngRef.current,
                  translateX: 0,
                  translateY: 0,
                  duration: 1000
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var prongTarget;
      var sideTargets = [];

      if (this.state.shouldSwitchPage) {
        var timeline = animejs__WEBPACK_IMPORTED_MODULE_2___default.a.timeline();
        timeline.add({
          targets: this.commentatorSplashRef.current,
          translateX: -window.innerWidth,
          duration: 5000,
          easing: "easeInQuad",
          delay: 100
        }).add({
          targets: this.commentatorSplashRef.current,
          opacity: [1, 0],
          duration: 2000,
          easing: "easeInQuad",
          offset: "-=2000"
        });
        animejs__WEBPACK_IMPORTED_MODULE_2___default()({
          targets: prongTarget,
          opacity: [1, 0],
          duration: 0
        });
        return;
      }
    }
  }, {
    key: "animateCaptionText",
    value: function () {
      var _animateCaptionText = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var texts, caption, elements, timeCounter, allPromises, _loop, e;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                texts = ["Both", " characters provide the same role in ", "both", " plays."];
                caption = this.captionRef.current;
                caption.style.opacity = 1;
                elements = caption.getElementsByTagName("span");
                timeCounter = 0;
                allPromises = [];

                _loop = function _loop(e) {
                  var elementText = texts[e];
                  elements[e].innerHTML = "";

                  var _loop2 = function _loop2(i) {
                    var localCounter = timeCounter++;
                    var promise = new Promise(function (res, rej) {
                      return setTimeout(function () {
                        elements[e].innerHTML += elementText[i];
                        res("Good");
                      }, localCounter * 100);
                    });
                    allPromises.push(promise);
                  };

                  for (var i = 0; i < elementText.length; i++) {
                    _loop2(i);
                  }
                };

                for (e = 0; e < elements.length; e++) {
                  _loop(e);
                }

                _context2.next = 10;
                return Promise.all(allPromises);

              case 10:
                return _context2.abrupt("return", true);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function animateCaptionText() {
        return _animateCaptionText.apply(this, arguments);
      };
    }()
  }, {
    key: "animationsFinished",
    value: function animationsFinished() {
      this.setState({
        shouldSwitchPage: true
      });
    }
  }]);

  return ThesisPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ThesisPage);
/*if (this.props.currentProng === "Commentator") {
            this.commentatorProngRef.current.style.zIndex=100;
            this.mediatorProngRef.current.style.zIndex=99;
            this.consulterProngRef.current.style.zIndex=98;
            prongTarget = this.commentatorProngRef.current;
            sideTargets = [this.consulterProngRef.current, this.mediatorProngRef.current];
        }*/

/* 
if (this.props.currentProng) {
            // get deltaX for left to middle
            let dXLeft = this.mediatorProngRef.current.offsetLeft - this.consulterProngRef.current.offsetLeft;
            let dXRight = this.mediatorProngRef.current.offsetLeft - this.commentatorProngRef.current.offsetLeft;
            
            let timeline = anime.timeline();
            timeline.add({
                targets: this.captionRef.current,
                translateY: -this.captionRef.current.offsetTop,
                duration: 1000,
                offset: 1000,
                easing: "easeInQuad"
            }).add({
                targets: this.consulterProngRef.current,
                left: dXLeft,
                duration: 1000,
                offset: 1500,
                easing: "easeOutQuad"
            }).add({
                targets: this.commentatorProngRef.current,
                translateX: dXRight,
                duration: 1000,
                offset: 1500,
                easing: "easeOutQuad",
                complete: () => {
                    this.consulterProngRef.current.className = "prong remove-box-shadow";
                    this.commentatorProngRef.current.className = "prong remove-box-shadow";
                    this.mediatorProngRef.current.className = "prong remove-box-shadow";
                }
            }).add({
                targets: prongTarget,
                color: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return "#FD6B6B";
                    }
                },
                duration: 1000,
                offset: 2000
            }).add({
                targets: prongTarget,
                right: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return ["5vw", "35.5vw"];
                    }
                },
                translateX: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return  0;
                    }
                },
                top: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return ["10vw", "-19.4vw"];
                    }
                },
                backgroundColor: "rgba(255,255,255,0)",
                fontSize: () => {
                    if (prongTarget == this.commentatorProngRef.current) {
                        return ["2.5vw", "6.38vw"];
                    }
                },
                duration: 1000,
                offset: 3000,
                easing: "easeInOutQuad"
            }).add({
                targets: sideTargets,
                opacity: 0,
                duration: 1000,
                offset: 2000,
                complete: () => {
                    // hide
                    for (let sideTarget of sideTargets) {
                        sideTarget.className = "prong no-box-shadow hidden";
                    }
                }
            })
        }
*/

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = {
  "Consulter": [{
    title: "Supportive",
    quoteOedipus: "I do not know how I can say that you have counseled well, for you had better be better dead than living and blind",
    quoteOedipusAuthor: "(Sophocles 116).",
    quoteLear: "",
    quoteLearMultiple: ["Mark it nuncle.", "Have more than you showest,", "Speak less than thy knowest,", "Lend less than thou owest,", "Ride more than thou goest,", "Learn more than thou throwest,", "Set less than thou throwest;", "Leave thy drink and whore,", "And keep in-a-door,", "And thou shalt have more", "Than two tend to a score."],
    quoteLearAuthor: "(1.4.115-125)"
  }, {
    title: "Helpful",
    quoteOedipus: "Well has he spoken, O King, for once who gives need not to fall, quick in counsel are not sure",
    quoteOedipusAuthor: "(Sophocles 96).",
    quoteLear: "",
    quoteLearMultiple: ["They’ll have me whipped for speaking true; thou’lt have", "me whipped for lying; and sometimes I am whipped for", "holding my peace. I had rather be any kind o’ thing than", "a fool! And yet I would not be thee, nuncle. Thou hast", "pared thy wit o’ both sides and left nothin i’ the middle."],
    quoteLearAuthor: " (1.4.180-184)"
  }, {
    title: "Keep Kings in Check",
    quoteOedipus: "That you should never use an unproved rumour to cast a dishonouring charge on the friend who has bound himself with a curse",
    quoteOedipusAuthor: "(Sophocles 98).",
    quoteLear: "",
    quoteLearMultiple: ["All that follow their", "noses are led by their eyes but blind men, and there’s not", "a nose among twenty but can smell that’s stinking.", "Let go thy hold when a great wheel runs down a hill;", "but the great one that goes upward, let him draw thee after."],
    quoteLearAuthor: "(2.4.76-81)"
  }],
  "Mediator": [{
    title: "Bridge Gap Between and Rich and Poor",
    quoteOedipus: "",
    quoteOedipusMultiple: ["Woe is me, Countless are the sorrows that I bear; a", "plague is on all our host, and thought can find no weapon", "for defense. The fruits of the glorious earth grow not; by no", "birth of children do women surmount the pangs in which", "they shriek; and life on life mayest thou see sped, like bird", "on nimble wing, aye, swifter than resistless fire, to the shore", "of the western god."],
    quoteOedipusAuthor: "(Sophocles 85)",
    quoteLear: "",
    quoteLearMultiple: ["Poor naked wretches, wheresoe’er you are,", "That bide the pelting of this pitiless storm,", "How shall your houseless heads and unfed sides,", "Your looped and windowed raggedness, defend you", "From seasons such as these? O, I have ta’en", "Too little care of this!"],
    quoteLearAuthor: "(3.4.34-39)"
  }, {
    title: "Show Similarity Between Rich and Poor",
    quoteOedipus: "",
    quoteOedipusMultiple: ["Dwellers in our native Thebes, behold, this is Oedi-", "pus, who knew the famed riddle and was a man most", "mighty; what citizen did not gaze with envy on his fortunes?", "Behold into what a stormy sea of dread trouble he has come.", "we must call no man happy who is of mortal race, until", "he has crossed life’s border, free from pain"],
    quoteOedipusAuthor: "(Sophocles 120)",
    quoteLear: "",
    quoteLearMultiple: ["Fathers that wear rags", "Do make their children blind;", "But fathers that bear bags", "Shall see their children kind.", "Fortune, that arrant whore,", " Ne’er turns the key to the poor.", "But for all this, thou shalt have as many dolours for thy", "daughters as thou canst tell in a year."],
    quoteLearAuthor: "(3.4.55-62)"
  }],
  "Commentator": [{
    title: "The Peanut Gallery",
    quoteOedipus: "Do you see to what you have come, for all your honest purpose, in seeking to slack and blunt my zeal?",
    quoteOedipusAuthor: "(Sophocles 99).",
    quoteLear: "",
    quoteLearMultiple: ["Yes, forsooth, I will hold my", "tongue. So your face bids me, though you say nothing.", "Mum, mum!", "He that keeps nor crust nor crum,", "Weary of all, shall want some.-", "That's a shealed peascod."],
    quoteLearAuthor: "(1.4.191-196)"
  }, {
    title: "Provide Relief",
    quoteOedipus: "But now whose story is more grievous in men's ears? Who is a more wretched captive to fierce plagues and troubles, with all his life reversed?",
    quoteOedipusAuthor: "(Sophocles 112).",
    quoteLear: "If thou wert my fool, nuncle, I’d have thee beaten for being old before thy time",
    quoteLearAuthor: "(1.5.38-39)"
  }, {
    title: "Engage the Audience",
    quoteOedipus: "",
    quoteOedipusMultiple: ["that mortal seer wins knowl-", "edge above mine, of this there can be no sure test; though", "man may surpass man in lore. Yet, until I see the word made", "good, never will I assent when men blame Oedipus."],
    quoteOedipusAuthor: "(Sophocles 94)",
    quoteLear: "",
    quoteLearMultiple: ["That lord that counseled thee", "To give away thy land,", "Come place him here by me-", "Do thou for him stand.", "The sweet and bitter fool", "Will presently appear;", "The one in motley here,", "The other found out there."],
    quoteLearAuthor: "(1.4.138-145)"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/js/getNavBar.js":
/*!*****************************!*\
  !*** ./src/js/getNavBar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavigationBar */ "./src/components/NavigationBar.js");
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/js/getNavBar.js";



var getNavBar = function getNavBar(selected, isLight) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navItems: [{
      name: "Home",
      link: "/"
    }, {
      name: "Consulters",
      link: "/consulters"
    }, {
      name: "Mediators",
      link: "/mediators"
    }, {
      name: "Commentators",
      link: "/commentators"
    }],
    selected: selected,
    lightBar: isLight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (getNavBar);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/style.js";

var seminarStyle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  jsx: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1
  },
  __self: undefined
}, "\n    .commentator-page{margin:5vw;height:50vh}.commentator-splash-page{z-index:1;position:absolute;left:0;top:0;width:100vw;height:100vh;font-family:\"Source Sans Pro\"}.commentator-splash-page .hidden{opacity:0;display:none}.commentator-splash-page .entering{opacity:0}.commentator-splash-page .entering.entered{opacity:1}.commentator-splash-page .commentator{position:absolute;left:9.74vw;top:1.1vw;font-size:6.38vw;font-weight:400;color:#fd6b6b}.commentator-splash-page .commentator .emphasis{font-weight:600}.commentator-splash-page .comic-relief{position:absolute;left:-15.5vw;top:18vw;transform:rotate(90deg);font-weight:900;font-size:7.2vw;color:#000}.commentator-splash-page .humor{position:absolute;color:#d1d1d1;font-weight:900;font-size:17vw;left:8.4vw;top:5.6vw}.commentator-splash-page .always-something-say{position:absolute;left:9vw;top:22vw;font-size:11vw;font-weight:100;color:#333;white-space:nowrap}.commentator-splash-page .voices-opinion{position:absolute;left:9.1vw;top:35.2vw;font-size:2.75vw;width:19.8vw;font-weight:700;color:#818181;line-height:1.5}.commentator-splash-page .usually-contradicts{position:absolute;left:28.6vw;top:34.1vw;font-size:8.8vw;font-weight:700;color:#e8e8e8;white-space:nowrap}.commentator-splash-page .peanut-gallery{position:absolute;left:2vw;top:44vw;font-size:8.25vw;font-weight:900;color:#333}.commentator-splash-page .never-ending-commentary{position:absolute;left:75vw;top:42.9vw;font-weight:100;font-size:9.35vw;color:#898989;white-space:nowrap}.commentator-splash-page .no-authority{position:absolute;left:56vw;top:10.4vw;transform:rotate(-90deg);font-weight:700;font-size:3.6vw;color:#818181}.commentator-splash-page .often-unheard{position:absolute;left:71.5vw;top:0;font-weight:900;width:50vw;font-size:11vw;color:#333;line-height:1.14}.evidence-page{position:absolute;top:0;left:0;width:100vw;height:100vh;transition:all 4s ease}.evidence-page .evidence-landing{width:100vw;height:100vh;background-color:#333;position:absolute;left:0;top:0;z-index:20}.evidence-page .evidence-landing .evidence-title{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);color:#fff;font-size:10vw;font-weight:900}.evidence-page .scroll-button{position:absolute;left:50%;bottom:3vw;transform:translateX(-50%)}.evidence-page .evidence-container{transition:all .5s ease;opacity:1;visibility:visible;position:absolute;width:100vw;height:100vh;left:0;top:0}.evidence-page .subprong-container{transition:all .5s ease;background-color:#fff;display:grid;justify-items:center;align-items:center;text-align:center}.evidence-page .subprong-container .subprong-title{font-size:9vw;font-weight:900}.evidence-page .quote-container{transition:all .5s ease}.evidence-page .quote-container .quote-symbol{position:absolute;left:50%;transform:translateX(-50%);top:3vw;font-family:\"Nunito\";font-weight:900;font-size:20vw;align-self:end}.evidence-page .quote-container .quote-lines{position:absolute;left:50%;top:55%;transform:translate(-50%, -50%);width:80%}.evidence-page .quote-container .quote-lines .inline-quote{display:flex;width:100%}.evidence-page .quote-container .quote-lines .inline-quote .rectangle{margin:0 2vw 0 0;background-color:#333;width:4px;height:inherit}.evidence-page .quote-container .quote-lines .inline-quote .quote-content{font-size:3vw;font-weight:300;font-style:italic;width:100%}.evidence-page .quote-container .quote-lines .inline-quote .multi-quote-content{width:100%;font-size:2vw;font-weight:300;font-style:italic;display:grid;grid-auto-flow:column;grid-template-columns:1fr 1fr}.evidence-page .quote-container .quote-lines .quote-author{font-size:3vw;font-weight:300;text-align:right}.evidence-page .quote-container.blue{color:#333;background:linear-gradient(135deg, #84FAB0, #8FD3F4)}.evidence-page .quote-container.red{background:linear-gradient(135deg, #FC6076, #FF9A44);color:#fff}.evidence-page .quote-container.red .inline-quote .rectangle{background-color:#fff}.evidence-page .thesis-component{left:0;top:0;width:100vw;height:100vh;transition:all .5s ease}.evidence-page.exited{opacity:0;visibility:hidden}.evidence-page.entered{opacity:1;visibility:show}.landing-page{width:100vw;height:160vh;background-image:linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)}.landing-page .video{transition:all .5s ease;width:100vw}.landing-page .video.exiting,.landing-page .video.video.exited{opacity:0;visibility:hidden}.landing-page .title,.landing-page .sub-title{position:absolute;font-weight:900;font-size:10vw;font-family:\"Source Sans Pro\";left:5vw;top:7vw;width:60%;color:#fff;line-height:1;z-index:2}.landing-page .sub-title{font-size:8vw;opacity:.37;width:70%;top:13vw;margin-left:1vw;z-index:1}.landing-page .start-button{font-family:\"Source Sans Pro\";font-size:2.5vw;position:fixed;left:50%;bottom:3vw;transform:translateX(-50%);color:#fff;border-radius:10vw;border:2px solid #fff;width:25vw;padding:1vw 0;text-align:center;cursor:pointer;transition:all .2s ease}.landing-page .start-button.exiting{opacity:0;visibility:hidden}.landing-page .start-button.exited{opacity:0;visibility:hidden}.landing-page .start-button:hover{border:2px solid rgba(255,255,255,.5);color:rgba(255,255,255,.8)}.landing-page .scroll-button{position:fixed;left:50%;bottom:3vw;transform:translateX(-50%);cursor:pointer}.landing-page .scroll-button:hover{opacity:.8}.landing-page .scroll-button.exiting{opacity:0}.landing-page .scroll-button.exited{opacity:0}nav{position:absolute;left:0;width:100%;padding:2vw 0;top:2vw;z-index:101}nav .nav-title{font-weight:900;display:inline;margin:0 0 0 5vw;font-size:2.5vw;color:#fff}nav .nav-title.dark{color:#333}nav .nav-items{display:inline-flex;flex-direction:row;width:80%;margin:0 10%;align-items:center;justify-content:space-evenly}nav .nav-items .nav-item{color:#fff;font-family:\"Source Sans Pro\";font-size:1.5vw;cursor:pointer;transition:all .5s ease}nav .nav-items .nav-item a{color:inherit;text-decoration:inherit}nav .nav-items .nav-item:hover{opacity:.5}nav .nav-items .nav-item.selected{color:#38d5d5}nav .nav-items .nav-item.selected.dark{color:#38d5d5}nav .nav-items .nav-item.dark{color:#000}.mobile-nav-container #nav-icon{width:40px;height:30px;right:10vw;top:10vw;position:absolute;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;z-index:10;cursor:pointer}.mobile-nav-container #nav-icon span{display:block;position:absolute;height:6px;width:100%;border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out}.mobile-nav-container #nav-icon span.light{background-color:#fff}.mobile-nav-container #nav-icon span.dark{background-color:#333}.mobile-nav-container #nav-icon span:nth-child(1){top:0}.mobile-nav-container #nav-icon span:nth-child(2),.mobile-nav-container #nav-icon span:nth-child(3){top:12px}.mobile-nav-container #nav-icon span:nth-child(4){top:24px}.mobile-nav-container #nav-icon.open span:nth-child(1){top:12px;width:0%;left:50%;background-color:#333}.mobile-nav-container #nav-icon.open span:nth-child(2){background-color:#333;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.mobile-nav-container #nav-icon.open span:nth-child(3){background-color:#333;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.mobile-nav-container #nav-icon.open span:nth-child(4){background-color:#333;top:12px;width:0%;left:50%}.mobile-nav-container .mobile-nav-items-container{transition:all .5s ease;-webkit-transition:all .5s ease;position:absolute;top:0;width:90vw;left:5vw;margin-top:5vw;padding:20vw 0 5vw;background-color:#fff;text-align:center;font-size:8vw;font-family:\"Source Sans Pro\";z-index:9;box-shadow:0 2px 8px 0 rgba(0,0,0,.5);position:absolute}.mobile-nav-container .mobile-nav-items-container div{margin:4vw 0}.mobile-nav-container .mobile-nav-items-container div a{text-decoration:inherit;color:inherit}.mobile-nav-container .nav-hidden{visibility:hidden;display:none}.mobile-nav-container .nav-shown{visibility:visible;opacity:1}.scroll-button{width:3vw;height:7vw;border-radius:3vw;border:2px solid #fff;visibility:visible;opacity:1;transition:all .5s ease;padding:.5vw;cursor:pointer;visibility:visible}.scroll-button .ball{background-color:#fff;width:10px;height:10px;border-radius:5px;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}.scroll-button.dark{border:2px solid #333}.scroll-button.dark .ball{background-color:#333}.scroll-button:hover{opacity:.7}.scroll-button.entering,.scroll-button.entered{visibility:visible;opacity:1}.scroll-button.exiting,.scroll-button.exited{visibility:hidden;opacity:0}.thesis-component{position:relative;z-index:5;height:100vh;top:160vh;background-color:#fff}.thesis-component .caption{padding:8vw 8vw 0;font-family:\"Source Sans Pro\";font-weight:900;font-size:5vw;color:#333}.thesis-component .caption .emphasis{color:#fd6b6b}.thesis-component .prongs-container{position:relative;padding:5vw 5vw 18vw;justify-content:space-between;align-items:center;z-index:5}.thesis-component .prongs-container a{color:inherit;text-decoration:inherit;color:#333}.thesis-component .prongs-container a .prong{background-color:#fff;cursor:pointer;position:absolute;font-family:\"Source Sans Pro\";font-weight:400;font-size:2.5vw;text-align:center;box-shadow:0 2px 30px 0 rgba(0,0,0,.5);padding:1.5vw 3vw;width:20vw;transition:all .5s ease}.thesis-component .prongs-container a .prong .emphasis{font-weight:600}.thesis-component .prongs-container .prong1{top:10vw;left:5vw}.thesis-component .prongs-container .prong2{top:10vw;left:50vw;transform:translateX(-50%)}.thesis-component .prongs-container .prong3{top:10vw;right:5vw}.thesis-component .prongs-container .prong.remove-box-shadow{box-shadow:none;padding:0;width:60vw}.thesis-component .prongs-container .prong.word-jumble-positioning{position:absolute;left:5vw;top:calc(100vh + 5vw)}.thesis-component .prongs-container .prong.prong.remove-box-shadow:hover{box-shadow:none}.thesis-component .prongs-container .prong:hover{box-shadow:0 2px 10px 0 rgba(0,0,0,.5)}.thesis-component .prongs-container .hidden{visibility:hidden}.consulter-splash-page{z-index:1;position:absolute;left:0;top:0;width:100vw;height:100vh;font-family:\"Source Sans Pro\"}.consulter-splash-page .hidden{opacity:0;display:none}.consulter-splash-page .entering{opacity:0}.consulter-splash-page .entering.entered{opacity:1}.consulter-splash-page .consulter{position:absolute;left:9.74vw;top:1.1vw;font-size:6.38vw;font-weight:400;color:#fd6b6b}.consulter-splash-page .consulter .emphasis{font-weight:600}.consulter-splash-page .paradox-wise{position:absolute;left:-18vw;top:26vw;transform:rotate(-90deg);font-weight:300;font-size:5.8vw;color:#333}.consulter-splash-page .wise{position:absolute;color:#333;font-weight:600;font-size:10vw;left:10vw;top:12vw}.consulter-splash-page .protective{position:absolute;left:10vw;top:25vw;font-size:6vw;font-weight:900;color:#d8d8d8;white-space:nowrap}.consulter-splash-page .loyal{position:absolute;left:9.1vw;top:28vw;font-size:20vw;font-weight:900;color:#333;line-height:1.5}.consulter-splash-page .points-faults{position:absolute;left:28.6vw;top:20vw;font-size:3.5vw;font-weight:700;color:#333;white-space:nowrap}.consulter-splash-page .mentor{position:absolute;left:55vw;top:1.5vw;font-size:9vw;font-weight:900;color:#c1c1c1}.consulter-splash-page .honest{position:absolute;left:45vw;top:8vw;font-weight:100;font-size:13vw;color:#333;white-space:nowrap}.consulter-splash-page .cooperative{position:absolute;left:49vw;top:20vw;transform:rotate(-90deg);font-weight:900;font-size:8vw;color:#565656}.consulter-splash-page .knowledgable{position:absolute;left:52vw;top:28vw;font-weight:900;font-size:6vw;width:80vw;color:#333}.consulter-splash-page .advocate{position:absolute;left:60vw;top:38vw;font-weight:600;font-size:6.5vw;width:80vw;color:#999}.consulter-splash-page .states-obvious{position:absolute;left:56.5vw;top:-14vw;font-weight:700;font-size:3.3vw;transform:rotate(-90deg);width:80vw;color:#565656}.mediator-splash-page{z-index:1;position:absolute;left:0;top:0;width:100vw;height:100vh;font-family:\"Source Sans Pro\"}.mediator-splash-page .hidden{opacity:0;display:none}.mediator-splash-page .entering{opacity:0}.mediator-splash-page .entering.entered{opacity:1}.mediator-splash-page .mediator{position:absolute;left:9.74vw;top:1.1vw;font-size:6.38vw;font-weight:400;color:#fd6b6b}.mediator-splash-page .mediator .emphasis{font-weight:600}.mediator-splash-page .middleman{position:absolute;left:-19vw;top:20vw;transform:rotate(90deg);font-weight:500;font-size:10vw;color:#333}.mediator-splash-page .peace-maker{position:absolute;width:25vw;color:#888;font-weight:500;font-size:9vw;left:16vw;top:6vw;line-height:1.5}.mediator-splash-page .speaks-truth{position:absolute;left:16vw;top:18vw;font-size:3vw;font-weight:900;color:#333;white-space:nowrap}.mediator-splash-page .in-between{position:absolute;left:12vw;top:31vw;font-size:7.5vw;font-weight:200;color:#333;line-height:1.5}.mediator-splash-page .voice-of-society{position:absolute;left:12vw;top:41vw;font-size:10vw;font-weight:900;color:#333;white-space:nowrap}.mediator-splash-page .bridge{position:absolute;left:34vw;top:11vw;font-size:11vw;font-weight:900;color:#333}.mediator-splash-page .different-views{position:absolute;left:57vw;top:2vw;font-weight:700;font-size:6vw;text-align:right;color:#777;line-height:1;white-space:nowrap}.mediator-splash-page .introduce{position:absolute;left:57vw;top:15vw;transform:rotate(-90deg);font-weight:500;font-size:10vw;color:#333}.mediator-splash-page .knowledgable{position:absolute;left:52vw;top:28vw;font-weight:900;font-size:6vw;width:80vw;color:#333}.mediator-splash-page .speak-cant{position:absolute;left:56vw;top:28vw;font-weight:900;font-size:4vw;width:80vw;color:#787878}.mediator-splash-page .open-up{position:absolute;left:60vw;top:33vw;font-weight:900;font-size:3.3vw;width:80vw;color:#333}.mediator-splash-page .link-between{position:absolute;text-align:right;left:21vw;top:33vw;font-weight:400;font-size:4vw;width:80vw;color:#333}.video-modal{position:fixed;overflow:hidden;left:0;top:0;width:100vw;height:100vw;background-color:#000;z-index:1000}.video-modal .video.hidden{opacity:0;visibility:hidden}.video-modal.small{transform:scale(0.1) translate(500vw, -500vh);border-radius:50vw;background-color:#333;cursor:pointer}.x-button{color:#fff;position:absolute;left:5vw;top:5vw;font-size:5vw;font-weight:900;transition:all .5s ease;cursor:pointer}.x-button:hover{opacity:.6}@keyframes move{100%{transform:translate3d(0, 0, -1000px)}}.container{transition:all .5s ease;position:fixed;width:100vw;height:100vh;transform-style:preserve-3d}.container.hidden{opacity:0}.bubble-wrap{margin:0 auto;width:500px;height:500px;transform-style:preserve-3d;transform-origin:center center;perspective:600px}.bubble{position:absolute;opacity:.7;border-radius:50%;animation:move 3s infinite}.bubble:nth-child(1){height:13px;width:13px;animation-delay:-0.2s;transform:translate3d(32px, 330px, 1573px);background:#d92685}.bubble:nth-child(2){height:2px;width:2px;animation-delay:-0.4s;transform:translate3d(563px, 899px, 1891px);background:#d92671}.bubble:nth-child(3){height:29px;width:29px;animation-delay:-0.6s;transform:translate3d(271px, 70px, 1977px);background:#5026d9}.bubble:nth-child(4){height:18px;width:18px;animation-delay:-0.8s;transform:translate3d(180px, 174px, 1408px);background:#2691d9}.bubble:nth-child(5){height:8px;width:8px;animation-delay:-1s;transform:translate3d(132px, 879px, 453px);background:#26d944}.bubble:nth-child(6){height:26px;width:26px;animation-delay:-1.2s;transform:translate3d(696px, 20px, 1783px);background:#7ad926}.bubble:nth-child(7){height:6px;width:6px;animation-delay:-1.4s;transform:translate3d(29px, 378px, 1916px);background:#d9268e}.bubble:nth-child(8){height:13px;width:13px;animation-delay:-1.6s;transform:translate3d(478px, 200px, 1639px);background:#d92f26}.bubble:nth-child(9){height:18px;width:18px;animation-delay:-1.8s;transform:translate3d(836px, 147px, 1762px);background:#26d968}.bubble:nth-child(10){height:5px;width:5px;animation-delay:-2s;transform:translate3d(472px, 365px, 60px);background:#d92653}.bubble:nth-child(11){height:6px;width:6px;animation-delay:-2.2s;transform:translate3d(114px, 54px, 865px);background:#77d926}.bubble:nth-child(12){height:19px;width:19px;animation-delay:-2.4s;transform:translate3d(758px, 76px, 791px);background:#65d926}.bubble:nth-child(13){height:6px;width:6px;animation-delay:-2.6s;transform:translate3d(843px, 578px, 1318px);background:#d95326}.bubble:nth-child(14){height:14px;width:14px;animation-delay:-2.8s;transform:translate3d(882px, 115px, 13px);background:#26d971}.bubble:nth-child(15){height:4px;width:4px;animation-delay:-3s;transform:translate3d(12px, 342px, 451px);background:#6bd926}.bubble:nth-child(16){height:18px;width:18px;animation-delay:-3.2s;transform:translate3d(637px, 22px, 846px);background:#264ad9}.bubble:nth-child(17){height:16px;width:16px;animation-delay:-3.4s;transform:translate3d(654px, 829px, 807px);background:#265cd9}.bubble:nth-child(18){height:7px;width:7px;animation-delay:-3.6s;transform:translate3d(180px, 677px, 276px);background:#77d926}.bubble:nth-child(19){height:27px;width:27px;animation-delay:-3.8s;transform:translate3d(543px, 68px, 1831px);background:#26cdd9}.bubble:nth-child(20){height:5px;width:5px;animation-delay:-4s;transform:translate3d(784px, 170px, 1258px);background:#d99126}.bubble:nth-child(21){height:22px;width:22px;animation-delay:-4.2s;transform:translate3d(350px, 434px, 1295px);background:#26acd9}.bubble:nth-child(22){height:6px;width:6px;animation-delay:-4.4s;transform:translate3d(273px, 863px, 1362px);background:#d9266e}.bubble:nth-child(23){height:4px;width:4px;animation-delay:-4.6s;transform:translate3d(484px, 79px, 8px);background:#2cd926}.bubble:nth-child(24){height:22px;width:22px;animation-delay:-4.8s;transform:translate3d(312px, 606px, 720px);background:#26d9bb}.bubble:nth-child(25){height:24px;width:24px;animation-delay:-5s;transform:translate3d(473px, 778px, 878px);background:#62d926}.bubble:nth-child(26){height:17px;width:17px;animation-delay:-5.2s;transform:translate3d(568px, 904px, 506px);background:#26d959}.bubble:nth-child(27){height:11px;width:11px;animation-delay:-5.4s;transform:translate3d(778px, 83px, 419px);background:#26d94d}.bubble:nth-child(28){height:2px;width:2px;animation-delay:-5.6s;transform:translate3d(817px, 324px, 937px);background:#d9d026}.bubble:nth-child(29){height:27px;width:27px;animation-delay:-5.8s;transform:translate3d(311px, 576px, 733px);background:#d92626}.bubble:nth-child(30){height:3px;width:3px;animation-delay:-6s;transform:translate3d(37px, 432px, 1328px);background:#3526d9}.bubble:nth-child(31){height:16px;width:16px;animation-delay:-6.2s;transform:translate3d(743px, 52px, 1208px);background:#266bd9}.bubble:nth-child(32){height:24px;width:24px;animation-delay:-6.4s;transform:translate3d(795px, 224px, 316px);background:#26d9b2}.bubble:nth-child(33){height:19px;width:19px;animation-delay:-6.6s;transform:translate3d(500px, 230px, 848px);background:#2632d9}.bubble:nth-child(34){height:18px;width:18px;animation-delay:-6.8s;transform:translate3d(850px, 768px, 1455px);background:#c126d9}.bubble:nth-child(35){height:14px;width:14px;animation-delay:-7s;transform:translate3d(317px, 900px, 521px);background:#26c4d9}.bubble:nth-child(36){height:6px;width:6px;animation-delay:-7.2s;transform:translate3d(115px, 214px, 1636px);background:#2f26d9}.bubble:nth-child(37){height:17px;width:17px;animation-delay:-7.4s;transform:translate3d(548px, 953px, 1139px);background:#3b26d9}.bubble:nth-child(38){height:29px;width:29px;animation-delay:-7.6s;transform:translate3d(554px, 359px, 580px);background:#2626d9}.bubble:nth-child(39){height:11px;width:11px;animation-delay:-7.8s;transform:translate3d(669px, 87px, 1704px);background:#d9c126}.bubble:nth-child(40){height:23px;width:23px;animation-delay:-8s;transform:translate3d(429px, 964px, 604px);background:#85d926}.bubble:nth-child(41){height:3px;width:3px;animation-delay:-8.2s;transform:translate3d(62px, 572px, 1896px);background:#9ad926}.bubble:nth-child(42){height:10px;width:10px;animation-delay:-8.4s;transform:translate3d(979px, 165px, 1717px);background:#26d985}.bubble:nth-child(43){height:4px;width:4px;animation-delay:-8.6s;transform:translate3d(593px, 351px, 1925px);background:#26d965}.bubble:nth-child(44){height:16px;width:16px;animation-delay:-8.8s;transform:translate3d(866px, 227px, 1921px);background:#2638d9}.bubble:nth-child(45){height:14px;width:14px;animation-delay:-9s;transform:translate3d(450px, 592px, 122px);background:#d9b826}.bubble:nth-child(46){height:2px;width:2px;animation-delay:-9.2s;transform:translate3d(300px, 562px, 1639px);background:#9ad926}.bubble:nth-child(47){height:15px;width:15px;animation-delay:-9.4s;transform:translate3d(156px, 967px, 169px);background:#269dd9}.bubble:nth-child(48){height:21px;width:21px;animation-delay:-9.6s;transform:translate3d(588px, 278px, 787px);background:#53d926}.bubble:nth-child(49){height:14px;width:14px;animation-delay:-9.8s;transform:translate3d(107px, 874px, 78px);background:#26a9d9}.bubble:nth-child(50){height:18px;width:18px;animation-delay:-10s;transform:translate3d(615px, 248px, 833px);background:#d96e26}.bubble:nth-child(51){height:20px;width:20px;animation-delay:-10.2s;transform:translate3d(773px, 614px, 165px);background:#26a3d9}.bubble:nth-child(52){height:26px;width:26px;animation-delay:-10.4s;transform:translate3d(303px, 411px, 771px);background:#d926d0}.bubble:nth-child(53){height:7px;width:7px;animation-delay:-10.6s;transform:translate3d(100px, 555px, 100px);background:#26d97a}.bubble:nth-child(54){height:19px;width:19px;animation-delay:-10.8s;transform:translate3d(891px, 970px, 264px);background:#2677d9}.bubble:nth-child(55){height:13px;width:13px;animation-delay:-11s;transform:translate3d(321px, 135px, 682px);background:#26d92c}.bubble:nth-child(56){height:11px;width:11px;animation-delay:-11.2s;transform:translate3d(897px, 990px, 1721px);background:#d96526}.bubble:nth-child(57){height:12px;width:12px;animation-delay:-11.4s;transform:translate3d(931px, 146px, 174px);background:#cd26d9}.bubble:nth-child(58){height:30px;width:30px;animation-delay:-11.6s;transform:translate3d(352px, 722px, 1513px);background:#26acd9}.bubble:nth-child(59){height:14px;width:14px;animation-delay:-11.8s;transform:translate3d(215px, 75px, 1828px);background:#53d926}.bubble:nth-child(60){height:5px;width:5px;animation-delay:-12s;transform:translate3d(654px, 229px, 1695px);background:#d97a26}.bubble:nth-child(61){height:15px;width:15px;animation-delay:-12.2s;transform:translate3d(688px, 736px, 1148px);background:#263ed9}.bubble:nth-child(62){height:16px;width:16px;animation-delay:-12.4s;transform:translate3d(710px, 104px, 823px);background:#d98526}.bubble:nth-child(63){height:18px;width:18px;animation-delay:-12.6s;transform:translate3d(467px, 797px, 261px);background:#7d26d9}.bubble:nth-child(64){height:21px;width:21px;animation-delay:-12.8s;transform:translate3d(868px, 460px, 1117px);background:#d92688}.bubble:nth-child(65){height:28px;width:28px;animation-delay:-13s;transform:translate3d(258px, 589px, 178px);background:#26d6d9}.bubble:nth-child(66){height:23px;width:23px;animation-delay:-13.2s;transform:translate3d(429px, 737px, 677px);background:#d92629}.bubble:nth-child(67){height:2px;width:2px;animation-delay:-13.4s;transform:translate3d(602px, 257px, 76px);background:#2674d9}.bubble:nth-child(68){height:26px;width:26px;animation-delay:-13.6s;transform:translate3d(198px, 172px, 507px);background:#d97d26}.bubble:nth-child(69){height:7px;width:7px;animation-delay:-13.8s;transform:translate3d(339px, 779px, 1488px);background:#d9267a}.bubble:nth-child(70){height:16px;width:16px;animation-delay:-14s;transform:translate3d(907px, 471px, 974px);background:#32d926}.bubble:nth-child(71){height:17px;width:17px;animation-delay:-14.2s;transform:translate3d(437px, 898px, 769px);background:#d94a26}.bubble:nth-child(72){height:25px;width:25px;animation-delay:-14.4s;transform:translate3d(622px, 413px, 1553px);background:#d93b26}.bubble:nth-child(73){height:3px;width:3px;animation-delay:-14.6s;transform:translate3d(480px, 798px, 1051px);background:#26d941}.bubble:nth-child(74){height:30px;width:30px;animation-delay:-14.8s;transform:translate3d(829px, 608px, 1375px);background:#26d96e}.bubble:nth-child(75){height:30px;width:30px;animation-delay:-15s;transform:translate3d(121px, 40px, 1103px);background:#7726d9}.bubble:nth-child(76){height:28px;width:28px;animation-delay:-15.2s;transform:translate3d(644px, 504px, 449px);background:#be26d9}.bubble:nth-child(77){height:3px;width:3px;animation-delay:-15.4s;transform:translate3d(798px, 458px, 713px);background:#26d944}.bubble:nth-child(78){height:17px;width:17px;animation-delay:-15.6s;transform:translate3d(163px, 216px, 1969px);background:#7ad926}.bubble:nth-child(79){height:14px;width:14px;animation-delay:-15.8s;transform:translate3d(718px, 625px, 608px);background:#26d9af}.bubble:nth-child(80){height:27px;width:27px;animation-delay:-16s;transform:translate3d(732px, 81px, 1484px);background:#a9d926}.bubble:nth-child(81){height:20px;width:20px;animation-delay:-16.2s;transform:translate3d(666px, 772px, 23px);background:#2926d9}.bubble:nth-child(82){height:18px;width:18px;animation-delay:-16.4s;transform:translate3d(103px, 153px, 83px);background:#d926b2}.bubble:nth-child(83){height:3px;width:3px;animation-delay:-16.6s;transform:translate3d(850px, 349px, 1805px);background:#d926d3}.bubble:nth-child(84){height:12px;width:12px;animation-delay:-16.8s;transform:translate3d(496px, 782px, 1839px);background:#2671d9}.bubble:nth-child(85){height:30px;width:30px;animation-delay:-17s;transform:translate3d(824px, 703px, 1802px);background:#26d950}.bubble:nth-child(86){height:21px;width:21px;animation-delay:-17.2s;transform:translate3d(471px, 637px, 529px);background:#d93826}.bubble:nth-child(87){height:16px;width:16px;animation-delay:-17.4s;transform:translate3d(149px, 486px, 1343px);background:#d95326}.bubble:nth-child(88){height:2px;width:2px;animation-delay:-17.6s;transform:translate3d(5px, 850px, 1311px);background:#2668d9}.bubble:nth-child(89){height:24px;width:24px;animation-delay:-17.8s;transform:translate3d(733px, 2px, 428px);background:#d9a926}.bubble:nth-child(90){height:2px;width:2px;animation-delay:-18s;transform:translate3d(56px, 895px, 1426px);background:#26d929}.bubble:nth-child(91){height:27px;width:27px;animation-delay:-18.2s;transform:translate3d(473px, 881px, 437px);background:#6e26d9}.bubble:nth-child(92){height:28px;width:28px;animation-delay:-18.4s;transform:translate3d(97px, 500px, 1344px);background:#d92691}.bubble:nth-child(93){height:5px;width:5px;animation-delay:-18.6s;transform:translate3d(726px, 571px, 803px);background:#d92694}.bubble:nth-child(94){height:6px;width:6px;animation-delay:-18.8s;transform:translate3d(66px, 377px, 943px);background:#26d9b2}.bubble:nth-child(95){height:30px;width:30px;animation-delay:-19s;transform:translate3d(434px, 688px, 662px);background:#d926b2}.bubble:nth-child(96){height:28px;width:28px;animation-delay:-19.2s;transform:translate3d(297px, 465px, 851px);background:#2682d9}.bubble:nth-child(97){height:20px;width:20px;animation-delay:-19.4s;transform:translate3d(79px, 105px, 1648px);background:#8ed926}.bubble:nth-child(98){height:17px;width:17px;animation-delay:-19.6s;transform:translate3d(352px, 101px, 381px);background:#d9ca26}.bubble:nth-child(99){height:15px;width:15px;animation-delay:-19.8s;transform:translate3d(378px, 805px, 1520px);background:#d926ca}.bubble:nth-child(100){height:28px;width:28px;animation-delay:-20s;transform:translate3d(844px, 745px, 1750px);background:#26d9c7}.works-cited-page .title{font-size:4vw;font-weight:900;color:#333;position:absolute;left:50vw;top:10vw;transform:translateX(-50%)}.works-cited-page .cite-container{position:absolute;left:5vw;padding:5vw;width:80vw;border-radius:.5vw;top:calc(15vw + 5vh);background-color:#fff;box-shadow:0 2px 30px 0 rgba(0,0,0,.5)}.works-cited-page .citation{font-size:2vw;padding-left:4vw;text-indent:-4vw;margin:0 0 2vw}.works-cited-page .citation .it{font-style:italic}body{margin:0;padding:0;overflow-x:hidden;font-family:\"Source Sans Pro\",\"sans-serif\";font-weight:400}.splash-page{cursor:pointer}\n");
/* harmony default export */ __webpack_exports__["default"] = (seminarStyle);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/consulters.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/consulters.js */"./pages/consulters.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "animejs":
/*!**************************!*\
  !*** external "animejs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ })

/******/ });
//# sourceMappingURL=consulters.js.map