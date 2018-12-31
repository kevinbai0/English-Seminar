webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ThesisPage.js":
/*!**************************************!*\
  !*** ./src/components/ThesisPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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

/***/ })

})
//# sourceMappingURL=index.js.543e8adcf229b35a8598.hot-update.js.map