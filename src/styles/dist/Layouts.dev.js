"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerLayout = exports.MainLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 0 clamp(0.5rem, 2vw, 1.5rem);\n\twidth: 100%;\n\ttransition: padding 0.3s ease;\n\n\t@media (max-width: 1024px) {\n\t\tpadding: 0 1rem;\n\t}\n\t@media (max-width: 768px) {\n\t\tpadding: 0 0.5rem;\n\t}\n\t@media (max-width: 480px) {\n\t\tpadding: 0 0.1rem;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tpadding: clamp(1rem, 4vw, 2rem);\n\t/* allow the main layout to grow on small screens instead of forcing a fixed height */\n\tmin-height: calc(100vh - 4rem);\n\tdisplay: flex;\n\tgap: clamp(0.5rem, 2vw, 1.5rem);\n\ttransition: all 0.3s ease;\n\n\t// Large desktop\n\t@media (min-width: 1200px) {\n\t\tpadding: 2.5rem 4rem;\n\t\tgap: 2rem;\n\t}\n\n\t// Desktop\n\t@media (max-width: 1200px) and (min-width: 1025px) {\n\t\tpadding: 2rem 2.5rem;\n\t\tgap: 1.5rem;\n\t}\n\n\t// Tablet landscape\n\t@media (max-width: 1024px) and (min-width: 769px) {\n\t\tpadding: 1.5rem 1.5rem;\n\t\tgap: 1rem;\n\t}\n\n\t// Tablet portrait\n\t@media (max-width: 768px) and (min-width: 601px) {\n\t\tflex-direction: column;\n\t\tpadding: 1rem 0.5rem;\n\t\tgap: 0.75rem;\n\t\t& > nav {\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t}\n\n\t// Large phones\n\t@media (max-width: 600px) and (min-width: 481px) {\n\t\tflex-direction: column;\n\t\tpadding: 0.75rem 0.25rem;\n\t\tgap: 0.5rem;\n\t}\n\n\t// Small phones\n\t@media (max-width: 480px) {\n\t\tflex-direction: column;\n\t\tpadding: 0.5rem 0.1rem;\n\t\tgap: 0.25rem;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainLayout = _styledComponents["default"].div(_templateObject());

exports.MainLayout = MainLayout;

var InnerLayout = _styledComponents["default"].div(_templateObject2());

exports.InnerLayout = InnerLayout;