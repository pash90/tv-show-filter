"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showIsValid = void 0;

var showIsValid = function showIsValid(show) {
  var episodeCount = show.episodeCount,
      drm = show.drm;

  if (drm && drm === true && episodeCount && episodeCount >= 0) {
    return true;
  }

  return false;
};

exports.showIsValid = showIsValid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3V0aWxpdGllcy50cyJdLCJuYW1lcyI6WyJzaG93SXNWYWxpZCIsInNob3ciLCJlcGlzb2RlQ291bnQiLCJkcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQTJCO0FBQUEsTUFDN0NDLFlBRDZDLEdBQ3ZCRCxJQUR1QixDQUM3Q0MsWUFENkM7QUFBQSxNQUMvQkMsR0FEK0IsR0FDdkJGLElBRHVCLENBQy9CRSxHQUQrQjs7QUFHckQsTUFBSUEsR0FBRyxJQUFJQSxHQUFHLEtBQUssSUFBZixJQUF1QkQsWUFBdkIsSUFBdUNBLFlBQVksSUFBSSxDQUEzRCxFQUE4RDtBQUM3RCxXQUFPLElBQVA7QUFDQTs7QUFFRCxTQUFPLEtBQVA7QUFDQSxDQVJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVFZTaG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3Qgc2hvd0lzVmFsaWQgPSAoc2hvdzogVFZTaG93KTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IHsgZXBpc29kZUNvdW50LCBkcm0gfSA9IHNob3c7XG5cblx0aWYgKGRybSAmJiBkcm0gPT09IHRydWUgJiYgZXBpc29kZUNvdW50ICYmIGVwaXNvZGVDb3VudCA+PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuIl19