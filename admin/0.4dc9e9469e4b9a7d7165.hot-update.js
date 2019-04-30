webpackHotUpdate(0,{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageTemplate", function() { return IndexPageTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(291);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(132);
/* harmony import */ var _components_Birthdays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(292);
/* harmony import */ var _components_InAndOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(293);

var _jsxFileName = "C:\\dev\\gatsby\\flashjg-gatsby\\src\\templates\\index-page.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).enterModule;
  enterModule && enterModule(module);
})();






var IndexPageTemplate = function IndexPageTemplate(_ref) {
  var image = _ref.image,
      title = _ref.title,
      subtitle = _ref.subtitle,
      heading = _ref.heading,
      mainpitch = _ref.mainpitch,
      description = _ref.description,
      birthdays = _ref.birthdays,
      inandout = _ref.inandout,
      myentrada = _ref.myentrada;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "full-width-image margin-top-0",
    style: {
      backgroundImage: "url(" + (!!image.childImageSharp ? image.childImageSharp.fluid.src : image) + ")",
      backgroundPosition: "top left",
      backgroundAttachment: "fixed"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      height: "150px",
      lineHeight: "1",
      justifyContent: "space-around",
      alignItems: "left",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",
    style: {
      boxShadow: "rgb(27,55,101) 0.5rem 0px 0px, rgb(27,55,101) -0.5rem 0px 0px",
      backgroundColor: "rgb(27,55,101)",
      color: "white",
      lineHeight: "1",
      padding: "0.25em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, title), subtitle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",
    style: {
      boxShadow: "rgb(27,55,101) 0.5rem 0px 0px, rgb(27,55,101) -0.5rem 0px 0px",
      backgroundColor: "rgb(27,55,101)",
      color: "white",
      lineHeight: "1",
      padding: "0.25em",
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, subtitle) : "")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "section section--gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "column is-10 is-offset-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, mainpitch.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, mainpitch.description))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "column is-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "has-text-weight-semibold is-size-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, heading), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, description))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Birthdays__WEBPACK_IMPORTED_MODULE_4__["default"], {
    birthdays: birthdays,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InAndOut__WEBPACK_IMPORTED_MODULE_5__["default"], {
    inandout: inandout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), myentrada && myentrada.cities && myentrada.cities.length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "column is-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/img/my-entrada.png",
    alt: "my-entrada",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, myentrada.cities.map(function (c, i) {
    console.log("IMAGE:" + c.image.url);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "column is-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "has-text-weight-semibold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, c.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: !!c.image.childImageSharp ? c.image.childImageSharp.fluid.src : c.image,
      alt: "my-entrada",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "column is-12 has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "btn",
    href: "https://myentrada.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Ir a my entrada"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))))))));
};
IndexPageTemplate.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  mainpitch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  birthdays: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  inandout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

var IndexPage = function IndexPage(_ref2) {
  var data = _ref2.data;
  var frontmatter = data.markdownRemark.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IndexPageTemplate, {
    image: frontmatter.image,
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    heading: frontmatter.heading,
    mainpitch: frontmatter.mainpitch,
    description: frontmatter.description,
    birthdays: frontmatter.birthdays,
    inandout: frontmatter.inandout,
    myentrada: frontmatter.myentrada,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }));
};

IndexPage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    markdownRemark: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      frontmatter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
    })
  })
};
var _default = IndexPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3357075281";
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(IndexPageTemplate, "IndexPageTemplate", "C:\\dev\\gatsby\\flashjg-gatsby\\src\\templates\\index-page.js");
  reactHotLoader.register(IndexPage, "IndexPage", "C:\\dev\\gatsby\\flashjg-gatsby\\src\\templates\\index-page.js");
  reactHotLoader.register(pageQuery, "pageQuery", "C:\\dev\\gatsby\\flashjg-gatsby\\src\\templates\\index-page.js");
  reactHotLoader.register(_default, "default", "C:\\dev\\gatsby\\flashjg-gatsby\\src\\templates\\index-page.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ })

})
//# sourceMappingURL=0.4dc9e9469e4b9a7d7165.hot-update.js.map