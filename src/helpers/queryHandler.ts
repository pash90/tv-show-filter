/** Helpers */
import { showIsValid } from './';

/** Types */
import { Request, Response } from 'express';
import { FilterRequest, TVShow } from '../types';

export const queryHandler = (request: Request, response: Response) => {
	const { payload } = request.body as FilterRequest;
	let formattedPayload;

	// Check if JSON is valid or not
	try {
		formattedPayload = JSON.parse(JSON.stringify(payload));
	} catch (error) {
		response.status(400).send({
			error: 'Could not decode request: JSON parsing failed'
		});
	}

	// Now we know payload is formatted and usable properly
	const filteredTVShows = (formattedPayload as TVShow[]).filter(showIsValid);

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

	response.status(200).send({
		response: formattedTVShows
	});
};
