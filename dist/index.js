"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Libraries */

/** Helpers */

/** Initialisation */
var app = (0, _express.default)();
app.use(_express.default.urlencoded({
  extended: false
})); // app.use(express.json());

app.post('/', _helpers.queryHandler);
app.listen(process.env.PORT || 3000);
var _default = app; // for testing

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJleHByZXNzIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicG9zdCIsInF1ZXJ5SGFuZGxlciIsImxpc3RlbiIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBR0E7Ozs7QUFKQTs7QUFHQTs7QUFHQTtBQUNBLElBQU1BLEdBQUcsR0FBRyx1QkFBWjtBQUVBQSxHQUFHLENBQUNDLEdBQUosQ0FDQ0MsaUJBQVFDLFVBQVIsQ0FBbUI7QUFDbEJDLEVBQUFBLFFBQVEsRUFBRTtBQURRLENBQW5CLENBREQsRSxDQUtBOztBQUVBSixHQUFHLENBQUNLLElBQUosQ0FBUyxHQUFULEVBQWNDLHFCQUFkO0FBRUFOLEdBQUcsQ0FBQ08sTUFBSixDQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUEvQjtlQUVlVixHLEVBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogTGlicmFyaWVzICovXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuLyoqIEhlbHBlcnMgKi9cbmltcG9ydCB7IHF1ZXJ5SGFuZGxlciB9IGZyb20gJy4vaGVscGVycyc7XG5cbi8qKiBJbml0aWFsaXNhdGlvbiAqL1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuXHRleHByZXNzLnVybGVuY29kZWQoe1xuXHRcdGV4dGVuZGVkOiBmYWxzZVxuXHR9KVxuKTtcbi8vIGFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuXG5hcHAucG9zdCgnLycsIHF1ZXJ5SGFuZGxlcik7XG5cbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwOyAvLyBmb3IgdGVzdGluZ1xuIl19