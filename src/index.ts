/** Libraries */
import express from 'express';

/** Helpers */
import { queryHandler } from './helpers';

/** Initialisation */
const app = express();

app.use(
	express.json({
		verify: (request, response, buffer, encoding) => {
			try {
				JSON.parse(buffer.toString());
			} catch (err) {
				response.statusCode = 400;
				response.setHeader('ContentType', 'application/json');
				response.write(
					JSON.stringify({
						error: 'Could not decode request: JSON parsing failed'
					})
				);
			}
		}
	})
);

app.post('/', queryHandler);

app.listen(9000);

export default app; // for testing
