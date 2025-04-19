"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    :root{\n        --primary-color: #222260;\n        --primary-color2: rgba(34, 34, 96, .6);\n        --primary-color3: rgba(34, 34, 96, .4);\n        --color-green: #42AD00;\n        --color-grey: #aaa;\n        --color-accent: #F56692;\n        --color-delete: #FF0000;\n    }\n\n    body, h1, h2, h3, h4, h5, h6, p, span {\n        font-family: 'Nunito', sans-serif !important;\n    }\n\n    body {\n        font-size: clamp(1rem, 1.5vw, 1.2rem);\n        overflow: hidden;\n        color: rgba(34, 34, 96, .6);\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n        color: var(--primary-color);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyle = GlobalStyle;