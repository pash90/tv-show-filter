/** Helpers */
import { showIsValid } from './';

/** Types */
import { Request, Response } from 'express';
import { FilterRequest, TVShow } from '../types';

export const queryHandler = (request: Request, response: Response) => {
	const { payload } = request.body as FilterRequest;

	// Ensure content type is set properly
	response.contentType('json');

	// Check if there is any data
	if (!payload) {
		response.statusCode = 400;
		response.send({
			error: 'No data provided in the request: JSON parsing failed'
		});
	}

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

	response.statusCode = 200;
	response.send({
		response: formattedTVShows
	});
};
