"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerLayout = exports.MainLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 0 1.5rem;\n\twidth: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 2rem;\n\theight: 100%;\n\tdisplay: flex;\n\tgap: 1.5rem; // Reduced from 2rem\n\t\n\t@media (max-width: 768px) {\n\t\tpadding: 1rem;\n\t\tflex-direction: column;\n\t\tgap: 1rem;\n\n\t\t& > nav {\n\t\t\tmargin-bottom: 1rem;\n\t\t}\n\t}\n"]);

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