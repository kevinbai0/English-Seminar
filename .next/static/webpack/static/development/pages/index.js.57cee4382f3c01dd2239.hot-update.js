webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_LandingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/LandingPage */ "./src/components/LandingPage.js");
/* harmony import */ var _src_js_getNavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/getNavBar */ "./src/js/getNavBar.js");
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_LandingPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navigationBar: Object(_src_js_getNavBar__WEBPACK_IMPORTED_MODULE_2__["default"])(0, false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

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
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "nav-items",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
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
              lineNumber: 38
            },
            __self: this
          });
        })));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HamburgerNavigation, {
        navItems: this.props.navItems,
        colorState: this.props.lightBar ? "light" : "dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
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
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "nav-icon",
        className: menuClass,
        onClick: this.toggleHamburger,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.colorState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-nav-items-container " + classAddonNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, this.props.navItems.map(function (navItem, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: classAddonItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: navItem.link,
          onClick: function onClick(e) {
            return _this4.toggleHamburger;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, navItem.name)));
      })));
    }
  }]);

  return HamburgerNavigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/js/getNavBar.js":
/*!*****************************!*\
  !*** ./src/js/getNavBar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavigationBar */ "./src/components/NavigationBar.js");
var _jsxFileName = "/Users/kevinbai/Programming/websites/english-seminar/src/js/getNavBar.js";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var getNavBar = function getNavBar(selected, isLight) {
  var _ref;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navItems: (_ref = {
      name: "Home",
      link: "/"
    }, _defineProperty(_ref, "name", "Consulters"), _defineProperty(_ref, "link", "/consulters"), _defineProperty(_ref, "name", "Mediators"), _defineProperty(_ref, "link", "/mediators"), _defineProperty(_ref, "name", "Commentators"), _defineProperty(_ref, "link", "/commentators"), _ref),
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

/***/ })

})
//# sourceMappingURL=index.js.57cee4382f3c01dd2239.hot-update.js.map