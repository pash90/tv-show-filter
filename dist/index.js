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
app.use(_express.default.json({
  verify: function verify(request, response, buffer, encoding) {
    try {
      JSON.parse(buffer.toString());
    } catch (err) {
      response.statusCode = 400;
      response.setHeader('ContentType', 'application/json');
      response.write(JSON.stringify({
        error: 'Could not decode request: JSON parsing failed'
      }));
    }
  }
}));
app.post('/', _helpers.queryHandler);
app.listen(process.env.PORT || 3000);
var _default = app; // for testing

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJleHByZXNzIiwianNvbiIsInZlcmlmeSIsInJlcXVlc3QiLCJyZXNwb25zZSIsImJ1ZmZlciIsImVuY29kaW5nIiwiSlNPTiIsInBhcnNlIiwidG9TdHJpbmciLCJlcnIiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwid3JpdGUiLCJzdHJpbmdpZnkiLCJlcnJvciIsInBvc3QiLCJxdWVyeUhhbmRsZXIiLCJsaXN0ZW4iLCJwcm9jZXNzIiwiZW52IiwiUE9SVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUdBOzs7O0FBSkE7O0FBR0E7O0FBR0E7QUFDQSxJQUFNQSxHQUFHLEdBQUcsdUJBQVo7QUFFQUEsR0FBRyxDQUFDQyxHQUFKLENBQ0NDLGlCQUFRQyxJQUFSLENBQWE7QUFDWkMsRUFBQUEsTUFBTSxFQUFFLGdCQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBb0JDLE1BQXBCLEVBQTRCQyxRQUE1QixFQUF5QztBQUNoRCxRQUFJO0FBQ0hDLE1BQUFBLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxNQUFNLENBQUNJLFFBQVAsRUFBWDtBQUNBLEtBRkQsQ0FFRSxPQUFPQyxHQUFQLEVBQVk7QUFDYk4sTUFBQUEsUUFBUSxDQUFDTyxVQUFULEdBQXNCLEdBQXRCO0FBQ0FQLE1BQUFBLFFBQVEsQ0FBQ1EsU0FBVCxDQUFtQixhQUFuQixFQUFrQyxrQkFBbEM7QUFDQVIsTUFBQUEsUUFBUSxDQUFDUyxLQUFULENBQ0NOLElBQUksQ0FBQ08sU0FBTCxDQUFlO0FBQ2RDLFFBQUFBLEtBQUssRUFBRTtBQURPLE9BQWYsQ0FERDtBQUtBO0FBQ0Q7QUFiVyxDQUFiLENBREQ7QUFrQkFqQixHQUFHLENBQUNrQixJQUFKLENBQVMsR0FBVCxFQUFjQyxxQkFBZDtBQUVBbkIsR0FBRyxDQUFDb0IsTUFBSixDQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUEvQjtlQUVldkIsRyxFQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIExpYnJhcmllcyAqL1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbi8qKiBIZWxwZXJzICovXG5pbXBvcnQgeyBxdWVyeUhhbmRsZXIgfSBmcm9tICcuL2hlbHBlcnMnO1xuXG4vKiogSW5pdGlhbGlzYXRpb24gKi9cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcblx0ZXhwcmVzcy5qc29uKHtcblx0XHR2ZXJpZnk6IChyZXF1ZXN0LCByZXNwb25zZSwgYnVmZmVyLCBlbmNvZGluZykgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0SlNPTi5wYXJzZShidWZmZXIudG9TdHJpbmcoKSk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0cmVzcG9uc2Uuc3RhdHVzQ29kZSA9IDQwMDtcblx0XHRcdFx0cmVzcG9uc2Uuc2V0SGVhZGVyKCdDb250ZW50VHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cdFx0XHRcdHJlc3BvbnNlLndyaXRlKFxuXHRcdFx0XHRcdEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdGVycm9yOiAnQ291bGQgbm90IGRlY29kZSByZXF1ZXN0OiBKU09OIHBhcnNpbmcgZmFpbGVkJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuKTtcblxuYXBwLnBvc3QoJy8nLCBxdWVyeUhhbmRsZXIpO1xuXG5hcHAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsgLy8gZm9yIHRlc3RpbmdcbiJdfQ==