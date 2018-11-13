/** Libraries */
import express from 'express';

/** Helpers */
import { queryHandler } from './helpers';

/** Initialisation */
const app = express();

app.use(
	express.urlencoded({
		extended: false
	})
);
// app.use(express.json());

app.post('/', queryHandler);

app.listen(process.env.PORT || 3000);

export default app; // for testing
