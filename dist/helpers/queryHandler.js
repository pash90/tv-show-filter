"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryHandler = void 0;

var _ = require("./");

/** Helpers */
var queryHandler = function queryHandler(request, response) {
  var body = '';
  request.on('data', function (chunk) {
    return body += chunk.toString();
  });
  request.on('end', function () {
    var parsedBody; // Check if body is parsable JSON

    try {
      parsedBody = JSON.parse(body);
    } catch (err) {
      return response.status(400).type('application/json').send({
        error: 'Could not decode request: JSON parsing failed'
      });
    } // const payload = JSON.parse(JSON.stringify(parsedBody)) as FilterRequest;


    if (!parsedBody) {
      return response.status(400).type('application/json').send({
        error: 'Could not decode request: No data provided'
      });
    }

    var _parsedBody = parsedBody,
        payload = _parsedBody.payload;
    console.log('payload', payload); // Now we know payload is not empty, is formatted and properly usable

    var filteredTVShows = payload.filter(_.showIsValid); // We have the list of shows that are valid

    var formattedTVShows = filteredTVShows.map(function (show) {
      var image = show.image,
          slug = show.slug,
          title = show.title;
      /**
       * Here I am not checking for whether or the above 3 props
       * are defined or not. This is because the spec asks for
       * filtering based on two props - episodeCount & drm - only and not anything else
       */

      return {
        image: image ? image.showImage : '',
        slug: slug,
        title: title
      };
    });
    return response.status(200).type('application/json').send({
      response: formattedTVShows
    });
  });
};

exports.queryHandler = queryHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL3F1ZXJ5SGFuZGxlci50cyJdLCJuYW1lcyI6WyJxdWVyeUhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJib2R5Iiwib24iLCJjaHVuayIsInRvU3RyaW5nIiwicGFyc2VkQm9keSIsIkpTT04iLCJwYXJzZSIsImVyciIsInN0YXR1cyIsInR5cGUiLCJzZW5kIiwiZXJyb3IiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkVFZTaG93cyIsImZpbHRlciIsInNob3dJc1ZhbGlkIiwiZm9ybWF0dGVkVFZTaG93cyIsIm1hcCIsInNob3ciLCJpbWFnZSIsInNsdWciLCJ0aXRsZSIsInNob3dJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQURBO0FBT08sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsT0FBRCxFQUFtQkMsUUFBbkIsRUFBMEM7QUFDckUsTUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQUYsRUFBQUEsT0FBTyxDQUFDRyxFQUFSLENBQVcsTUFBWCxFQUFtQixVQUFBQyxLQUFLO0FBQUEsV0FBS0YsSUFBSSxJQUFJRSxLQUFLLENBQUNDLFFBQU4sRUFBYjtBQUFBLEdBQXhCO0FBRUFMLEVBQUFBLE9BQU8sQ0FBQ0csRUFBUixDQUFXLEtBQVgsRUFBa0IsWUFBTTtBQUN2QixRQUFJRyxVQUFKLENBRHVCLENBR3ZCOztBQUNBLFFBQUk7QUFDSEEsTUFBQUEsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sSUFBWCxDQUFiO0FBQ0EsS0FGRCxDQUVFLE9BQU9PLEdBQVAsRUFBWTtBQUNiLGFBQU9SLFFBQVEsQ0FDYlMsTUFESyxDQUNFLEdBREYsRUFFTEMsSUFGSyxDQUVBLGtCQUZBLEVBR0xDLElBSEssQ0FHQTtBQUNMQyxRQUFBQSxLQUFLLEVBQUU7QUFERixPQUhBLENBQVA7QUFNQSxLQWJzQixDQWV2Qjs7O0FBQ0EsUUFBSSxDQUFDUCxVQUFMLEVBQWlCO0FBQ2hCLGFBQU9MLFFBQVEsQ0FDYlMsTUFESyxDQUNFLEdBREYsRUFFTEMsSUFGSyxDQUVBLGtCQUZBLEVBR0xDLElBSEssQ0FHQTtBQUNMQyxRQUFBQSxLQUFLLEVBQUU7QUFERixPQUhBLENBQVA7QUFNQTs7QUF2QnNCLHNCQXlCSFAsVUF6Qkc7QUFBQSxRQXlCZlEsT0F6QmUsZUF5QmZBLE9BekJlO0FBMEJ2QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkYsT0FBdkIsRUExQnVCLENBNEJ2Qjs7QUFDQSxRQUFNRyxlQUFlLEdBQUlILE9BQUQsQ0FBc0JJLE1BQXRCLENBQTZCQyxhQUE3QixDQUF4QixDQTdCdUIsQ0ErQnZCOztBQUNBLFFBQU1DLGdCQUFnQixHQUFHSCxlQUFlLENBQUNJLEdBQWhCLENBQW9CLFVBQUFDLElBQUksRUFBSTtBQUFBLFVBQzVDQyxLQUQ0QyxHQUNyQkQsSUFEcUIsQ0FDNUNDLEtBRDRDO0FBQUEsVUFDckNDLElBRHFDLEdBQ3JCRixJQURxQixDQUNyQ0UsSUFEcUM7QUFBQSxVQUMvQkMsS0FEK0IsR0FDckJILElBRHFCLENBQy9CRyxLQUQrQjtBQUdwRDs7Ozs7O0FBS0EsYUFBTztBQUNORixRQUFBQSxLQUFLLEVBQUVBLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxTQUFULEdBQXFCLEVBRDNCO0FBRU5GLFFBQUFBLElBQUksRUFBSkEsSUFGTTtBQUdOQyxRQUFBQSxLQUFLLEVBQUxBO0FBSE0sT0FBUDtBQUtBLEtBYndCLENBQXpCO0FBZUEsV0FBT3hCLFFBQVEsQ0FDYlMsTUFESyxDQUNFLEdBREYsRUFFTEMsSUFGSyxDQUVBLGtCQUZBLEVBR0xDLElBSEssQ0FHQTtBQUNMWCxNQUFBQSxRQUFRLEVBQUVtQjtBQURMLEtBSEEsQ0FBUDtBQU1BLEdBckREO0FBc0RBLENBMURNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEhlbHBlcnMgKi9cbmltcG9ydCB7IHNob3dJc1ZhbGlkIH0gZnJvbSAnLi8nO1xuXG4vKiogVHlwZXMgKi9cbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBGaWx0ZXJSZXF1ZXN0LCBUVlNob3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBxdWVyeUhhbmRsZXIgPSAocmVxdWVzdDogUmVxdWVzdCwgcmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XG5cdGxldCBib2R5ID0gJyc7XG5cdHJlcXVlc3Qub24oJ2RhdGEnLCBjaHVuayA9PiAoYm9keSArPSBjaHVuay50b1N0cmluZygpKSk7XG5cblx0cmVxdWVzdC5vbignZW5kJywgKCkgPT4ge1xuXHRcdGxldCBwYXJzZWRCb2R5O1xuXG5cdFx0Ly8gQ2hlY2sgaWYgYm9keSBpcyBwYXJzYWJsZSBKU09OXG5cdFx0dHJ5IHtcblx0XHRcdHBhcnNlZEJvZHkgPSBKU09OLnBhcnNlKGJvZHkpO1xuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlXG5cdFx0XHRcdC5zdGF0dXMoNDAwKVxuXHRcdFx0XHQudHlwZSgnYXBwbGljYXRpb24vanNvbicpXG5cdFx0XHRcdC5zZW5kKHtcblx0XHRcdFx0XHRlcnJvcjogJ0NvdWxkIG5vdCBkZWNvZGUgcmVxdWVzdDogSlNPTiBwYXJzaW5nIGZhaWxlZCdcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocGFyc2VkQm9keSkpIGFzIEZpbHRlclJlcXVlc3Q7XG5cdFx0aWYgKCFwYXJzZWRCb2R5KSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2Vcblx0XHRcdFx0LnN0YXR1cyg0MDApXG5cdFx0XHRcdC50eXBlKCdhcHBsaWNhdGlvbi9qc29uJylcblx0XHRcdFx0LnNlbmQoe1xuXHRcdFx0XHRcdGVycm9yOiAnQ291bGQgbm90IGRlY29kZSByZXF1ZXN0OiBObyBkYXRhIHByb3ZpZGVkJ1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCB7IHBheWxvYWQgfSA9IHBhcnNlZEJvZHk7XG5cdFx0Y29uc29sZS5sb2coJ3BheWxvYWQnLCBwYXlsb2FkKTtcblxuXHRcdC8vIE5vdyB3ZSBrbm93IHBheWxvYWQgaXMgbm90IGVtcHR5LCBpcyBmb3JtYXR0ZWQgYW5kIHByb3Blcmx5IHVzYWJsZVxuXHRcdGNvbnN0IGZpbHRlcmVkVFZTaG93cyA9IChwYXlsb2FkIGFzIFRWU2hvd1tdKS5maWx0ZXIoc2hvd0lzVmFsaWQpO1xuXG5cdFx0Ly8gV2UgaGF2ZSB0aGUgbGlzdCBvZiBzaG93cyB0aGF0IGFyZSB2YWxpZFxuXHRcdGNvbnN0IGZvcm1hdHRlZFRWU2hvd3MgPSBmaWx0ZXJlZFRWU2hvd3MubWFwKHNob3cgPT4ge1xuXHRcdFx0Y29uc3QgeyBpbWFnZSwgc2x1ZywgdGl0bGUgfSA9IHNob3c7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogSGVyZSBJIGFtIG5vdCBjaGVja2luZyBmb3Igd2hldGhlciBvciB0aGUgYWJvdmUgMyBwcm9wc1xuXHRcdFx0ICogYXJlIGRlZmluZWQgb3Igbm90LiBUaGlzIGlzIGJlY2F1c2UgdGhlIHNwZWMgYXNrcyBmb3Jcblx0XHRcdCAqIGZpbHRlcmluZyBiYXNlZCBvbiB0d28gcHJvcHMgLSBlcGlzb2RlQ291bnQgJiBkcm0gLSBvbmx5IGFuZCBub3QgYW55dGhpbmcgZWxzZVxuXHRcdFx0ICovXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbWFnZTogaW1hZ2UgPyBpbWFnZS5zaG93SW1hZ2UgOiAnJyxcblx0XHRcdFx0c2x1Zyxcblx0XHRcdFx0dGl0bGVcblx0XHRcdH07XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzcG9uc2Vcblx0XHRcdC5zdGF0dXMoMjAwKVxuXHRcdFx0LnR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKVxuXHRcdFx0LnNlbmQoe1xuXHRcdFx0XHRyZXNwb25zZTogZm9ybWF0dGVkVFZTaG93c1xuXHRcdFx0fSk7XG5cdH0pO1xufTtcbiJdfQ==