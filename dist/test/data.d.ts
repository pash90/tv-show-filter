export declare const SampleTVShows: {
    withDrmAndEpisodes: {
        country: string;
        description: string;
        drm: boolean;
        episodeCount: number;
        genre: string;
        image: {
            showImage: string;
        };
        language: string;
        nextEpisode: undefined;
        primaryColour: string;
        seasons: {
            slug: string;
        }[];
        slug: string;
        title: string;
        tvChannel: string;
    };
    withDrmButNoEpisodes: {
        country: string;
        description: string;
        drm: boolean;
        episodeCount: number;
        genre: string;
        image: {
            showImage: string;
        };
        language: string;
        nextEpisode: {
            channel: undefined;
            channelLogo: string;
            date: undefined;
            html: string;
            url: string;
        };
        primaryColour: string;
        seasons: undefined;
        slug: string;
        title: string;
        tvChannel: string;
    };
    withoutDrmButWithEpisodes: {
        country: string;
        description: string;
        drm: boolean;
        episodeCount: number;
        genre: string;
        image: {
            showImage: string;
        };
        language: string;
        nextEpisode: {
            channel: undefined;
            channelLogo: string;
            date: undefined;
            html: string;
            url: string;
        };
        primaryColour: string;
        seasons: undefined;
        slug: string;
        title: string;
        tvChannel: string;
    };
    withoutDrmAndEpisodes: {
        slug: string;
        title: string;
        tvChannel: string;
    };
};
export declare const SampleQuery: {
    payload: ({
        country: string;
        description: string;
        drm: boolean;
        episodeCount: number;
        genre: string;
        image: {
            showImage: string;
        };
        language: string;
        nextEpisode: null;
        primaryColour: string;
        seasons: {
            slug: string;
        }[];
        slug: string;
        title: string;
        tvChannel: string;
    } | {
        slug: string;
        title: string;
        tvChannel: string;
        country?: undefined;
        description?: undefined;
        drm?: undefined;
        episodeCount?: undefined;
        genre?: undefined;
        image?: undefined;
        language?: undefined;
        nextEpisode?: undefined;
        primaryColour?: undefined;
        seasons?: undefined;
    } | {
        country: string;
        description: string;
        drm: boolean;
        episodeCount: number;
        genre: string;
        image: {
            showImage: string;
        };
        language: string;
        nextEpisode: {
            channel: null;
            channelLogo: string;
            date: null;
            html: string;
            url: string;
        };
        primaryColour: string;
        seasons: {
            slug: string;
        }[];
        slug: string;
        title: string;
        tvChannel: string;
    } | {
        country: string;
        description: string;
        drm: boolean;
        episodeCount: number;
        genre: string;
        image: {
            showImage: string;
        };
        language: string;
        nextEpisode: {
            channel: null;
            channelLogo: string;
            date: null;
            html: string;
            url: string;
        };
        primaryColour: string;
        seasons: null;
        slug: string;
        title: string;
        tvChannel: string;
    })[];
    skip: number;
    take: number;
    totalRecords: number;
};
