/** Libraries */
import { describe, it } from 'mocha';
import { expect } from 'chai';

/** Helpers(to test) */
import { showIsValid } from '../helpers';

/** Sample Data(compiled from example request data) */
import { SampleTVShows } from './data';

describe('showIsValid', () => {
	it('Accepts a TV Show with DRM and at least one episode ', () => {
		expect(showIsValid(SampleTVShows.withDrmAndEpisodes)).to.equal(true);
	});

	it('Rejects a TV Show without DRM', () => {
		expect(showIsValid(SampleTVShows.withoutDrmButWithEpisodes)).to.equal(
			false
		);
		expect(showIsValid(SampleTVShows.withoutDrmAndEpisodes)).to.equal(false);
	});

	it('Rejects a TV Show without episodes', () => {
		expect(showIsValid(SampleTVShows.withDrmButNoEpisodes)).to.equal(false);
		expect(showIsValid(SampleTVShows.withoutDrmAndEpisodes)).to.equal(false);
	});

	it('Rejects a TV Show without episodes and without DRM', () => {
		expect(showIsValid(SampleTVShows.withoutDrmAndEpisodes)).to.equal(false);
	});
});
