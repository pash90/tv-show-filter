/** Helpers */
import { showIsValid } from './';

/** Types */
import { Request, Response } from 'express';
import { FilterRequest, TVShow } from '../types';

export const queryHandler = (request: Request, response: Response) => {
	let body = '';
	request.on('data', chunk => (body += chunk.toString()));

	request.on('end', () => {
		let parsedBody;

		// Check if body is parsable JSON
		try {
			parsedBody = JSON.parse(body);
		} catch (err) {
			return response
				.status(400)
				.type('application/json')
				.send({
					error: 'Could not decode request: JSON parsing failed'
				});
		}

		// const payload = JSON.parse(JSON.stringify(parsedBody)) as FilterRequest;
		if (!parsedBody) {
			return response
				.status(400)
				.type('application/json')
				.send({
					error: 'Could not decode request: No data provided'
				});
		}

		const { payload } = parsedBody;
		console.log('payload', payload);

		// Now we know payload is not empty, is formatted and properly usable
		const filteredTVShows = (payload as TVShow[]).filter(showIsValid);

		// We have the list of shows that are valid
		const formattedTVShows = filteredTVShows.map(show => {
			const { image, slug, title } = show;

			/**
			 * Here I am not checking for whether or the above 3 props
			 * are defined or not. This is because the spec asks for
			 * filtering based on two props - episodeCount & drm - only and not anything else
			 */
			return {
				image: image ? image.showImage : '',
				slug,
				title
			};
		});

		return response
			.status(200)
			.type('application/json')
			.send({
				response: formattedTVShows
			});
	});
};
