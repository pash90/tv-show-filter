/** Libraries */
import { describe, it } from 'mocha';
import { expect } from 'chai';

/** Helpers(to test) */
import { showIsValid } from '../helpers';

/** Sample Data(compiled from example request data) */
const tvShowWithDrmAndEpisodes = {
		country: 'UK',
		description:
			"What's life like when you have enough children to field your own football team?",
		drm: true,
		episodeCount: 3,
		genre: 'Reality',
		image: {
			showImage:
				'http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg'
		},
		language: 'English',
		nextEpisode: undefined,
		primaryColour: '#ff7800',
		seasons: [
			{
				slug: 'show/16kidsandcounting/season/1'
			}
		],
		slug: 'show/16kidsandcounting',
		title: '16 Kids and Counting',
		tvChannel: 'GEM'
	},
	tvShowWithDrmButNoEpisodes = {
		country: 'USA',
		description:
			"Another year of bachelorhood brought many new adventures for roommates Walden Schmidt and Alan Harper. After his girlfriend turned down his marriage proposal, Walden was thrown back into the dating world in a serious way. The guys may have thought things were going to slow down once Jake got transferred to Japan, but they're about to be proven wrong when a niece of Alan's, who shares more than a few characteristics with her father, shows up at the beach house.",
		drm: true,
		episodeCount: 0,
		genre: 'Comedy',
		image: {
			showImage:
				'http://mybeautifulcatchupservice.com/img/shows/TwoandahHalfMen_V2.jpg'
		},
		language: 'English',
		nextEpisode: {
			channel: undefined,
			channelLogo:
				'http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif',
			date: undefined,
			html:
				'Next episode airs: <span> 10:00pm Monday on<br><span class="visit">Visit the Official Website</span></span>',
			url: 'http://channelnine.ninemsn.com.au/twoandahalfmen/'
		},
		primaryColour: '#ff7800',
		seasons: undefined,
		slug: 'show/twoandahalfmen',
		title: 'Two and a Half Men',
		tvChannel: 'Channel 9'
	},
	tvShowWithoutDrmButWithEpisodes = {
		country: 'AUS',
		description:
			'Join the most dynamic TV judging panel Australia has ever seen as they uncover the next breed of superstars every Sunday night. UK comedy royalty Dawn French, international pop superstar Geri Halliwell, (in) famous Aussie straight-talking radio jock Kyle Sandilands, and chart -topping former AGT alumni Timomatic.',
		drm: false,
		episodeCount: 2,
		genre: 'Reality',
		image: {
			showImage: 'http://mybeautifulcatchupservice.com/img/shows/AGT.jpg'
		},
		language: 'English',
		nextEpisode: {
			channel: undefined,
			channelLogo:
				'http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif',
			date: undefined,
			html:
				'Next episode airs:<span>6:30pm Sunday on<br><span class="visit">Visit the Official Website</span></span>',
			url: 'http://agt.ninemsn.com.au'
		},
		primaryColour: '#df0000',
		seasons: undefined,
		slug: 'show/australiasgottalent',
		title: "Australia's Got Talent",
		tvChannel: 'Channel 9'
	},
	tvShowWithoutDrmAndEpisodes = {
		slug: 'show/seapatrol',
		title: 'Sea Patrol',
		tvChannel: 'Channel 9'
	};

describe('showIsValid', () => {
	it('Accepts a TV Show with DRM and at least one episode ', () => {
		expect(showIsValid(tvShowWithDrmAndEpisodes)).to.equal(true);
	});

	it('Rejects a TV Show without DRM', () => {
		expect(showIsValid(tvShowWithoutDrmButWithEpisodes)).to.equal(false);
		expect(showIsValid(tvShowWithoutDrmAndEpisodes)).to.equal(false);
	});

	it('Rejects a TV Show without episodes', () => {
		expect(showIsValid(tvShowWithDrmButNoEpisodes)).to.equal(false);
		expect(showIsValid(tvShowWithoutDrmAndEpisodes)).to.equal(false);
	});

	it('Rejects a TV Show without episodes and without DRM', () => {
		expect(showIsValid(tvShowWithoutDrmAndEpisodes)).to.equal(false);
	});
});
