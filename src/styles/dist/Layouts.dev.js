"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerLayout = exports.MainLayout = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 0 1.5rem;\n\twidth: 95%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 2rem;\n\tmargin-top: -1.5rem;\n\theight: 100%;\n\tdisplay: flex;\n\tgap: 2rem;\n\tflex: 1;\n"]);

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