export interface TVShow {
	country?: string;
	description?: string;
	drm?: boolean;
	episodeCount?: number;
	genre?: string;
	image?: {
		showImage: string;
	};
	language?: string;
	nextEpisode?: {
		channel?: string;
		channelLogo: string;
		date?: string;
		html: string;
		url: string;
	};
	primaryColour?: string;
	seasons?: [
		{
			slug: string;
		}
	];
	slug: string;
	title: string;
	tvChannel: string;
}

export interface FilterRequest {
	payload: TVShow[];
	skip: number;
	take: number;
	totalRecords: number;
}
