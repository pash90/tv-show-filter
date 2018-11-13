"use strict";

var _mocha = require("mocha");

var _chai = require("chai");

var _helpers = require("../helpers");

var _data = require("./data");

/** Libraries */

/** Helpers(to test) */

/** Sample Data(compiled from example request data) */
(0, _mocha.describe)('showIsValid', function () {
  (0, _mocha.it)('Accepts a TV Show with DRM and at least one episode ', function () {
    (0, _chai.expect)((0, _helpers.showIsValid)(_data.SampleTVShows.withDrmAndEpisodes)).to.equal(true);
  });
  (0, _mocha.it)('Rejects a TV Show without DRM', function () {
    (0, _chai.expect)((0, _helpers.showIsValid)(_data.SampleTVShows.withoutDrmButWithEpisodes)).to.equal(false);
    (0, _chai.expect)((0, _helpers.showIsValid)(_data.SampleTVShows.withoutDrmAndEpisodes)).to.equal(false);
  });
  (0, _mocha.it)('Rejects a TV Show without episodes', function () {
    (0, _chai.expect)((0, _helpers.showIsValid)(_data.SampleTVShows.withDrmButNoEpisodes)).to.equal(false);
    (0, _chai.expect)((0, _helpers.showIsValid)(_data.SampleTVShows.withoutDrmAndEpisodes)).to.equal(false);
  });
  (0, _mocha.it)('Rejects a TV Show without episodes and without DRM', function () {
    (0, _chai.expect)((0, _helpers.showIsValid)(_data.SampleTVShows.withoutDrmAndEpisodes)).to.equal(false);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3V0aWxpdGllcy50cyJdLCJuYW1lcyI6WyJTYW1wbGVUVlNob3dzIiwid2l0aERybUFuZEVwaXNvZGVzIiwidG8iLCJlcXVhbCIsIndpdGhvdXREcm1CdXRXaXRoRXBpc29kZXMiLCJ3aXRob3V0RHJtQW5kRXBpc29kZXMiLCJ3aXRoRHJtQnV0Tm9FcGlzb2RlcyJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFDQTs7QUFHQTs7QUFHQTs7QUFSQTs7QUFJQTs7QUFHQTtBQUdBLHFCQUFTLGFBQVQsRUFBd0IsWUFBTTtBQUM3QixpQkFBRyxzREFBSCxFQUEyRCxZQUFNO0FBQ2hFLHNCQUFPLDBCQUFZQSxvQkFBY0Msa0JBQTFCLENBQVAsRUFBc0RDLEVBQXRELENBQXlEQyxLQUF6RCxDQUErRCxJQUEvRDtBQUNBLEdBRkQ7QUFJQSxpQkFBRywrQkFBSCxFQUFvQyxZQUFNO0FBQ3pDLHNCQUFPLDBCQUFZSCxvQkFBY0kseUJBQTFCLENBQVAsRUFBNkRGLEVBQTdELENBQWdFQyxLQUFoRSxDQUNDLEtBREQ7QUFHQSxzQkFBTywwQkFBWUgsb0JBQWNLLHFCQUExQixDQUFQLEVBQXlESCxFQUF6RCxDQUE0REMsS0FBNUQsQ0FBa0UsS0FBbEU7QUFDQSxHQUxEO0FBT0EsaUJBQUcsb0NBQUgsRUFBeUMsWUFBTTtBQUM5QyxzQkFBTywwQkFBWUgsb0JBQWNNLG9CQUExQixDQUFQLEVBQXdESixFQUF4RCxDQUEyREMsS0FBM0QsQ0FBaUUsS0FBakU7QUFDQSxzQkFBTywwQkFBWUgsb0JBQWNLLHFCQUExQixDQUFQLEVBQXlESCxFQUF6RCxDQUE0REMsS0FBNUQsQ0FBa0UsS0FBbEU7QUFDQSxHQUhEO0FBS0EsaUJBQUcsb0RBQUgsRUFBeUQsWUFBTTtBQUM5RCxzQkFBTywwQkFBWUgsb0JBQWNLLHFCQUExQixDQUFQLEVBQXlESCxFQUF6RCxDQUE0REMsS0FBNUQsQ0FBa0UsS0FBbEU7QUFDQSxHQUZEO0FBR0EsQ0FwQkQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogTGlicmFyaWVzICovXG5pbXBvcnQgeyBkZXNjcmliZSwgaXQgfSBmcm9tICdtb2NoYSc7XG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcblxuLyoqIEhlbHBlcnModG8gdGVzdCkgKi9cbmltcG9ydCB7IHNob3dJc1ZhbGlkIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbi8qKiBTYW1wbGUgRGF0YShjb21waWxlZCBmcm9tIGV4YW1wbGUgcmVxdWVzdCBkYXRhKSAqL1xuaW1wb3J0IHsgU2FtcGxlVFZTaG93cyB9IGZyb20gJy4vZGF0YSc7XG5cbmRlc2NyaWJlKCdzaG93SXNWYWxpZCcsICgpID0+IHtcblx0aXQoJ0FjY2VwdHMgYSBUViBTaG93IHdpdGggRFJNIGFuZCBhdCBsZWFzdCBvbmUgZXBpc29kZSAnLCAoKSA9PiB7XG5cdFx0ZXhwZWN0KHNob3dJc1ZhbGlkKFNhbXBsZVRWU2hvd3Mud2l0aERybUFuZEVwaXNvZGVzKSkudG8uZXF1YWwodHJ1ZSk7XG5cdH0pO1xuXG5cdGl0KCdSZWplY3RzIGEgVFYgU2hvdyB3aXRob3V0IERSTScsICgpID0+IHtcblx0XHRleHBlY3Qoc2hvd0lzVmFsaWQoU2FtcGxlVFZTaG93cy53aXRob3V0RHJtQnV0V2l0aEVwaXNvZGVzKSkudG8uZXF1YWwoXG5cdFx0XHRmYWxzZVxuXHRcdCk7XG5cdFx0ZXhwZWN0KHNob3dJc1ZhbGlkKFNhbXBsZVRWU2hvd3Mud2l0aG91dERybUFuZEVwaXNvZGVzKSkudG8uZXF1YWwoZmFsc2UpO1xuXHR9KTtcblxuXHRpdCgnUmVqZWN0cyBhIFRWIFNob3cgd2l0aG91dCBlcGlzb2RlcycsICgpID0+IHtcblx0XHRleHBlY3Qoc2hvd0lzVmFsaWQoU2FtcGxlVFZTaG93cy53aXRoRHJtQnV0Tm9FcGlzb2RlcykpLnRvLmVxdWFsKGZhbHNlKTtcblx0XHRleHBlY3Qoc2hvd0lzVmFsaWQoU2FtcGxlVFZTaG93cy53aXRob3V0RHJtQW5kRXBpc29kZXMpKS50by5lcXVhbChmYWxzZSk7XG5cdH0pO1xuXG5cdGl0KCdSZWplY3RzIGEgVFYgU2hvdyB3aXRob3V0IGVwaXNvZGVzIGFuZCB3aXRob3V0IERSTScsICgpID0+IHtcblx0XHRleHBlY3Qoc2hvd0lzVmFsaWQoU2FtcGxlVFZTaG93cy53aXRob3V0RHJtQW5kRXBpc29kZXMpKS50by5lcXVhbChmYWxzZSk7XG5cdH0pO1xufSk7XG4iXX0=