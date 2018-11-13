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
app.listen(9000);
var _default = app; // for testing

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJ1c2UiLCJleHByZXNzIiwianNvbiIsInZlcmlmeSIsInJlcXVlc3QiLCJyZXNwb25zZSIsImJ1ZmZlciIsImVuY29kaW5nIiwiSlNPTiIsInBhcnNlIiwidG9TdHJpbmciLCJlcnIiLCJzdGF0dXNDb2RlIiwic2V0SGVhZGVyIiwid3JpdGUiLCJzdHJpbmdpZnkiLCJlcnJvciIsInBvc3QiLCJxdWVyeUhhbmRsZXIiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFHQTs7OztBQUpBOztBQUdBOztBQUdBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHLHVCQUFaO0FBRUFBLEdBQUcsQ0FBQ0MsR0FBSixDQUNDQyxpQkFBUUMsSUFBUixDQUFhO0FBQ1pDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQW9CQyxNQUFwQixFQUE0QkMsUUFBNUIsRUFBeUM7QUFDaEQsUUFBSTtBQUNIQyxNQUFBQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsTUFBTSxDQUFDSSxRQUFQLEVBQVg7QUFDQSxLQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ2JOLE1BQUFBLFFBQVEsQ0FBQ08sVUFBVCxHQUFzQixHQUF0QjtBQUNBUCxNQUFBQSxRQUFRLENBQUNRLFNBQVQsQ0FBbUIsYUFBbkIsRUFBa0Msa0JBQWxDO0FBQ0FSLE1BQUFBLFFBQVEsQ0FBQ1MsS0FBVCxDQUNDTixJQUFJLENBQUNPLFNBQUwsQ0FBZTtBQUNkQyxRQUFBQSxLQUFLLEVBQUU7QUFETyxPQUFmLENBREQ7QUFLQTtBQUNEO0FBYlcsQ0FBYixDQUREO0FBa0JBakIsR0FBRyxDQUFDa0IsSUFBSixDQUFTLEdBQVQsRUFBY0MscUJBQWQ7QUFFQW5CLEdBQUcsQ0FBQ29CLE1BQUosQ0FBVyxJQUFYO2VBRWVwQixHLEVBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogTGlicmFyaWVzICovXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuLyoqIEhlbHBlcnMgKi9cbmltcG9ydCB7IHF1ZXJ5SGFuZGxlciB9IGZyb20gJy4vaGVscGVycyc7XG5cbi8qKiBJbml0aWFsaXNhdGlvbiAqL1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuXHRleHByZXNzLmpzb24oe1xuXHRcdHZlcmlmeTogKHJlcXVlc3QsIHJlc3BvbnNlLCBidWZmZXIsIGVuY29kaW5nKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRKU09OLnBhcnNlKGJ1ZmZlci50b1N0cmluZygpKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRyZXNwb25zZS5zdGF0dXNDb2RlID0gNDAwO1xuXHRcdFx0XHRyZXNwb25zZS5zZXRIZWFkZXIoJ0NvbnRlbnRUeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0XHRcdFx0cmVzcG9uc2Uud3JpdGUoXG5cdFx0XHRcdFx0SlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdFx0ZXJyb3I6ICdDb3VsZCBub3QgZGVjb2RlIHJlcXVlc3Q6IEpTT04gcGFyc2luZyBmYWlsZWQnXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG4pO1xuXG5hcHAucG9zdCgnLycsIHF1ZXJ5SGFuZGxlcik7XG5cbmFwcC5saXN0ZW4oOTAwMCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsgLy8gZm9yIHRlc3RpbmdcbiJdfQ==