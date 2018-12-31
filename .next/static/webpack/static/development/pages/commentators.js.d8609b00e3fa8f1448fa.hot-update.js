webpackHotUpdate("static/development/pages/commentators.js",{

/***/ "./src/components/CommentatorPage.js":
/*!*******************************************!*\
  !*** ./src/components/CommentatorPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentatorSplashPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentatorSplashPage */ "./src/components/CommentatorSplashPage.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EvidencePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EvidencePage */ "./src/components/EvidencePage.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/data */ "./src/js/data.js");
/* harmony import */ var _ThesisPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThesisPage */ "./src/components/ThesisPage.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style */ "./src/style.js");
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/components/CommentatorPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var CommentatorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommentatorPage, _React$Component);

  function CommentatorPage(props) {
    var _this;

    _classCallCheck(this, CommentatorPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CommentatorPage).call(this, props));
    _this.commentatorSplashRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      isAnimated: false
    };
    return _this;
  }

  _createClass(CommentatorPage, [{
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
        animejs__WEBPACK_IMPORTED_MODULE_3___default()({
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

      console.log(this.state.isAnimated);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "commentator-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, _style__WEBPACK_IMPORTED_MODULE_7__["default"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          opacity: this.state.isAnimated ? 1 : 0,
          transition: "all 0.5s ease"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.navigationBar), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        in: !this.state.isAnimated,
        timeout: 4000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, function (state) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommentatorSplashPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
          state: state,
          shouldAnimate: !_this2.state.isAnimated,
          animationsFinished: _this2.animationsFinished.bind(_this2),
          reference: _this2.commentatorSplashRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        in: this.state.isAnimated,
        timeout: 4000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, function (state) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EvidencePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          subprongs: _js_data__WEBPACK_IMPORTED_MODULE_5__["default"].Commentator,
          state: state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
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
      console.log("Finished");
    }
  }]);

  return CommentatorPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CommentatorPage);

/***/ })

})
//# sourceMappingURL=commentators.js.d8609b00e3fa8f1448fa.hot-update.js.map