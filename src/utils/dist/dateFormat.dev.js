"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateFormat = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dateFormat = function dateFormat(date) {
  return (0, _moment["default"])(date).format("DD-MM-YYYY");
};

exports.dateFormat = dateFormat;