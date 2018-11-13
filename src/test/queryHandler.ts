/** Libraries */
import { describe } from 'mocha';
import chaiHTTP from 'chai-http';
import chai, { expect } from 'chai';

/** Components */
import app from '../';

/** Helpers(to test) */
import { queryHandler } from '../helpers';

/** Data(to test) */
import { SampleQuery } from './data';

/** Initialisation */
chai.use(chaiHTTP);

describe('queryHandler', () => {
	it('Should return a list of filtered shows when JSON is properly formatted', () => {
		chai
			.request(app)
			.post('/')
			.send(SampleQuery)
			.end((error, response) => {
				expect(response).to.have.status(200);
				expect(response.body.response).to.have.length(7);
				expect(error).to.be.null;
			});
	});

	it('Should return an error when no data is supplied in the request', () => {
		chai
			.request(app)
			.post('/')
			.end((error, response) => {
				expect(response).to.have.status(400);
				expect(response.body.error).to.be.a('string');
				expect(response.body.error).to.equal(
					'No data provided in the request: JSON parsing failed'
				);
				expect(error).to.be.null;
			});
	});
});
