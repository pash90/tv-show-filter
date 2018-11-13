"use strict";

var _mocha = require("mocha");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireWildcard(require("chai"));

var _ = _interopRequireDefault(require("../"));

var _data = require("./data");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Libraries */

/** Components */

/** Data(to test) */

/** Initialisation */
_chai.default.use(_chaiHttp.default);

(0, _mocha.describe)('queryHandler', function () {
  it('Should return a list of filtered shows when JSON is properly formatted', function () {
    _chai.default.request(_.default).post('/').send(_data.SampleQuery).end(function (error, response) {
      (0, _chai.expect)(response).to.have.status(200);
      (0, _chai.expect)(response.body.response).to.have.length(7);
      (0, _chai.expect)(error).to.be.null;
    });
  });
  it('Should return an error when no data is supplied in the request', function () {
    _chai.default.request(_.default).post('/').end(function (error, response) {
      (0, _chai.expect)(response).to.have.status(400);
      (0, _chai.expect)(response.body.error).to.be.a('string');
      (0, _chai.expect)(response.body.error).to.equal('No data provided in the request: JSON parsing failed');
      (0, _chai.expect)(error).to.be.null;
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3F1ZXJ5SGFuZGxlci50cyJdLCJuYW1lcyI6WyJjaGFpIiwidXNlIiwiY2hhaUhUVFAiLCJpdCIsInJlcXVlc3QiLCJhcHAiLCJwb3N0Iiwic2VuZCIsIlNhbXBsZVF1ZXJ5IiwiZW5kIiwiZXJyb3IiLCJyZXNwb25zZSIsInRvIiwiaGF2ZSIsInN0YXR1cyIsImJvZHkiLCJsZW5ndGgiLCJiZSIsIm51bGwiLCJhIiwiZXF1YWwiXSwibWFwcGluZ3MiOiI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBTUE7Ozs7OztBQVpBOztBQUtBOztBQU1BOztBQUdBO0FBQ0FBLGNBQUtDLEdBQUwsQ0FBU0MsaUJBQVQ7O0FBRUEscUJBQVMsY0FBVCxFQUF5QixZQUFNO0FBQzlCQyxFQUFBQSxFQUFFLENBQUMsd0VBQUQsRUFBMkUsWUFBTTtBQUNsRkgsa0JBQ0VJLE9BREYsQ0FDVUMsU0FEVixFQUVFQyxJQUZGLENBRU8sR0FGUCxFQUdFQyxJQUhGLENBR09DLGlCQUhQLEVBSUVDLEdBSkYsQ0FJTSxVQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBcUI7QUFDekIsd0JBQU9BLFFBQVAsRUFBaUJDLEVBQWpCLENBQW9CQyxJQUFwQixDQUF5QkMsTUFBekIsQ0FBZ0MsR0FBaEM7QUFDQSx3QkFBT0gsUUFBUSxDQUFDSSxJQUFULENBQWNKLFFBQXJCLEVBQStCQyxFQUEvQixDQUFrQ0MsSUFBbEMsQ0FBdUNHLE1BQXZDLENBQThDLENBQTlDO0FBQ0Esd0JBQU9OLEtBQVAsRUFBY0UsRUFBZCxDQUFpQkssRUFBakIsQ0FBb0JDLElBQXBCO0FBQ0EsS0FSRjtBQVNBLEdBVkMsQ0FBRjtBQVlBZixFQUFBQSxFQUFFLENBQUMsZ0VBQUQsRUFBbUUsWUFBTTtBQUMxRUgsa0JBQ0VJLE9BREYsQ0FDVUMsU0FEVixFQUVFQyxJQUZGLENBRU8sR0FGUCxFQUdFRyxHQUhGLENBR00sVUFBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQXFCO0FBQ3pCLHdCQUFPQSxRQUFQLEVBQWlCQyxFQUFqQixDQUFvQkMsSUFBcEIsQ0FBeUJDLE1BQXpCLENBQWdDLEdBQWhDO0FBQ0Esd0JBQU9ILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjTCxLQUFyQixFQUE0QkUsRUFBNUIsQ0FBK0JLLEVBQS9CLENBQWtDRSxDQUFsQyxDQUFvQyxRQUFwQztBQUNBLHdCQUFPUixRQUFRLENBQUNJLElBQVQsQ0FBY0wsS0FBckIsRUFBNEJFLEVBQTVCLENBQStCUSxLQUEvQixDQUNDLHNEQUREO0FBR0Esd0JBQU9WLEtBQVAsRUFBY0UsRUFBZCxDQUFpQkssRUFBakIsQ0FBb0JDLElBQXBCO0FBQ0EsS0FWRjtBQVdBLEdBWkMsQ0FBRjtBQWFBLENBMUJEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIExpYnJhcmllcyAqL1xuaW1wb3J0IHsgZGVzY3JpYmUgfSBmcm9tICdtb2NoYSc7XG5pbXBvcnQgY2hhaUhUVFAgZnJvbSAnY2hhaS1odHRwJztcbmltcG9ydCBjaGFpLCB7IGV4cGVjdCB9IGZyb20gJ2NoYWknO1xuXG4vKiogQ29tcG9uZW50cyAqL1xuaW1wb3J0IGFwcCBmcm9tICcuLi8nO1xuXG4vKiogSGVscGVycyh0byB0ZXN0KSAqL1xuaW1wb3J0IHsgcXVlcnlIYW5kbGVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbi8qKiBEYXRhKHRvIHRlc3QpICovXG5pbXBvcnQgeyBTYW1wbGVRdWVyeSB9IGZyb20gJy4vZGF0YSc7XG5cbi8qKiBJbml0aWFsaXNhdGlvbiAqL1xuY2hhaS51c2UoY2hhaUhUVFApO1xuXG5kZXNjcmliZSgncXVlcnlIYW5kbGVyJywgKCkgPT4ge1xuXHRpdCgnU2hvdWxkIHJldHVybiBhIGxpc3Qgb2YgZmlsdGVyZWQgc2hvd3Mgd2hlbiBKU09OIGlzIHByb3Blcmx5IGZvcm1hdHRlZCcsICgpID0+IHtcblx0XHRjaGFpXG5cdFx0XHQucmVxdWVzdChhcHApXG5cdFx0XHQucG9zdCgnLycpXG5cdFx0XHQuc2VuZChTYW1wbGVRdWVyeSlcblx0XHRcdC5lbmQoKGVycm9yLCByZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRleHBlY3QocmVzcG9uc2UpLnRvLmhhdmUuc3RhdHVzKDIwMCk7XG5cdFx0XHRcdGV4cGVjdChyZXNwb25zZS5ib2R5LnJlc3BvbnNlKS50by5oYXZlLmxlbmd0aCg3KTtcblx0XHRcdFx0ZXhwZWN0KGVycm9yKS50by5iZS5udWxsO1xuXHRcdFx0fSk7XG5cdH0pO1xuXG5cdGl0KCdTaG91bGQgcmV0dXJuIGFuIGVycm9yIHdoZW4gbm8gZGF0YSBpcyBzdXBwbGllZCBpbiB0aGUgcmVxdWVzdCcsICgpID0+IHtcblx0XHRjaGFpXG5cdFx0XHQucmVxdWVzdChhcHApXG5cdFx0XHQucG9zdCgnLycpXG5cdFx0XHQuZW5kKChlcnJvciwgcmVzcG9uc2UpID0+IHtcblx0XHRcdFx0ZXhwZWN0KHJlc3BvbnNlKS50by5oYXZlLnN0YXR1cyg0MDApO1xuXHRcdFx0XHRleHBlY3QocmVzcG9uc2UuYm9keS5lcnJvcikudG8uYmUuYSgnc3RyaW5nJyk7XG5cdFx0XHRcdGV4cGVjdChyZXNwb25zZS5ib2R5LmVycm9yKS50by5lcXVhbChcblx0XHRcdFx0XHQnTm8gZGF0YSBwcm92aWRlZCBpbiB0aGUgcmVxdWVzdDogSlNPTiBwYXJzaW5nIGZhaWxlZCdcblx0XHRcdFx0KTtcblx0XHRcdFx0ZXhwZWN0KGVycm9yKS50by5iZS5udWxsO1xuXHRcdFx0fSk7XG5cdH0pO1xufSk7XG4iXX0=