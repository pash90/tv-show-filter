import { TVShow } from '../types';

export const showIsValid = (show: TVShow): boolean => {
	const { episodeCount, drm } = show;

	if (drm && drm === true && episodeCount && episodeCount >= 0) {
		return true;
	}

	return false;
};
