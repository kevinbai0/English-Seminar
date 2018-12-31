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
/* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavigationBar */ "./src/components/NavigationBar.js");
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
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavigationBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), _style__WEBPACK_IMPORTED_MODULE_7__["default"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          opacity: this.state.isAnimated ? 1 : 0,
          transition: "all 0.5s ease"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.props.navigationBar), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        in: !this.state.isAnimated,
        timeout: 4000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
            lineNumber: 48
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        in: this.state.isAnimated,
        timeout: 4000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, function (state) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EvidencePage__WEBPACK_IMPORTED_MODULE_4__["default"], {
          subprongs: _js_data__WEBPACK_IMPORTED_MODULE_5__["default"].Commentator,
          state: state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
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

/***/ }),

/***/ "./src/components/NavigationBar.js":
/*!*****************************************!*\
  !*** ./src/components/NavigationBar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
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
      width: window.innerWidth
    };
    return _this;
  }

  _createClass(NavigationBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.resizeListener);
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

      if (this.state.width >= 800) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "nav-items",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
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
              lineNumber: 37
            },
            __self: this
          });
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HamburgerNavigation, {
        navItems: this.props.navItems,
        colorState: this.props.lightBar ? "light" : "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
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
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "nav-icon",
        className: menuClass,
        onClick: this.toggleHamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-nav-items-container " + classAddonNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.props.navItems.map(function (navItem, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: classAddonItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          to: navItem.link,
          onClick: function onClick(e) {
            return _this4.toggleHamburger;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, navItem.name));
      })));
    }
  }]);

  return HamburgerNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ })

})
//# sourceMappingURL=commentators.js.ed5e54da6a2d89499641.hot-update.js.map