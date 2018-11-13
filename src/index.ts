/** Libraries */
import express from 'express';
import bodyParser from 'body-parser';

/** Helpers */
import { queryHandler } from './helpers';

/** Initialisation */
const app = express();

app.use(bodyParser.json());

app.post('/', queryHandler);

app.listen(9000, () => console.log('Running server at http://localhost:9000'));
