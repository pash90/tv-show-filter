"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleQuery = exports.SampleTVShows = void 0;
var SampleTVShows = {
  withDrmAndEpisodes: {
    country: 'UK',
    description: "What's life like when you have enough children to field your own football team?",
    drm: true,
    episodeCount: 3,
    genre: 'Reality',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg'
    },
    language: 'English',
    nextEpisode: undefined,
    primaryColour: '#ff7800',
    seasons: [{
      slug: 'show/16kidsandcounting/season/1'
    }],
    slug: 'show/16kidsandcounting',
    title: '16 Kids and Counting',
    tvChannel: 'GEM'
  },
  withDrmButNoEpisodes: {
    country: 'USA',
    description: "Another year of bachelorhood brought many new adventures for roommates Walden Schmidt and Alan Harper. After his girlfriend turned down his marriage proposal, Walden was thrown back into the dating world in a serious way. The guys may have thought things were going to slow down once Jake got transferred to Japan, but they're about to be proven wrong when a niece of Alan's, who shares more than a few characteristics with her father, shows up at the beach house.",
    drm: true,
    episodeCount: 0,
    genre: 'Comedy',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/TwoandahHalfMen_V2.jpg'
    },
    language: 'English',
    nextEpisode: {
      channel: undefined,
      channelLogo: 'http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif',
      date: undefined,
      html: 'Next episode airs: <span> 10:00pm Monday on<br><span class="visit">Visit the Official Website</span></span>',
      url: 'http://channelnine.ninemsn.com.au/twoandahalfmen/'
    },
    primaryColour: '#ff7800',
    seasons: undefined,
    slug: 'show/twoandahalfmen',
    title: 'Two and a Half Men',
    tvChannel: 'Channel 9'
  },
  withoutDrmButWithEpisodes: {
    country: 'AUS',
    description: 'Join the most dynamic TV judging panel Australia has ever seen as they uncover the next breed of superstars every Sunday night. UK comedy royalty Dawn French, international pop superstar Geri Halliwell, (in) famous Aussie straight-talking radio jock Kyle Sandilands, and chart -topping former AGT alumni Timomatic.',
    drm: false,
    episodeCount: 2,
    genre: 'Reality',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/AGT.jpg'
    },
    language: 'English',
    nextEpisode: {
      channel: undefined,
      channelLogo: 'http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif',
      date: undefined,
      html: 'Next episode airs:<span>6:30pm Sunday on<br><span class="visit">Visit the Official Website</span></span>',
      url: 'http://agt.ninemsn.com.au'
    },
    primaryColour: '#df0000',
    seasons: undefined,
    slug: 'show/australiasgottalent',
    title: "Australia's Got Talent",
    tvChannel: 'Channel 9'
  },
  withoutDrmAndEpisodes: {
    slug: 'show/seapatrol',
    title: 'Sea Patrol',
    tvChannel: 'Channel 9'
  }
};
exports.SampleTVShows = SampleTVShows;
var SampleQuery = {
  payload: [{
    country: 'UK',
    description: "What's life like when you have enough children to field your own football team?",
    drm: true,
    episodeCount: 3,
    genre: 'Reality',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg'
    },
    language: 'English',
    nextEpisode: null,
    primaryColour: '#ff7800',
    seasons: [{
      slug: 'show/16kidsandcounting/season/1'
    }],
    slug: 'show/16kidsandcounting',
    title: '16 Kids and Counting',
    tvChannel: 'GEM'
  }, {
    slug: 'show/seapatrol',
    title: 'Sea Patrol',
    tvChannel: 'Channel 9'
  }, {
    country: ' USA',
    description: "The Taste puts 16 culinary competitors in the kitchen, where four of the World's most notable culinary masters of the food world judges their creations based on a blind taste. Join judges Anthony Bourdain, Nigella Lawson, Ludovic Lefebvre and Brian Malarkey in this pressure-packed contest where a single spoonful can catapult a contender to the top or send them packing.",
    drm: true,
    episodeCount: 2,
    genre: 'Reality',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/TheTaste1280.jpg'
    },
    language: 'English',
    nextEpisode: {
      channel: null,
      channelLogo: 'http://mybeautifulcatchupservice.com/img/player/logo_go.gif',
      date: null,
      html: '<br><span class="visit">Visit the Official Website</span></span>',
      url: 'http://go.ninemsn.com.au/'
    },
    primaryColour: '#df0000',
    seasons: [{
      slug: 'show/thetaste/season/1'
    }],
    slug: 'show/thetaste',
    title: 'The Taste',
    tvChannel: 'GEM'
  }, {
    country: 'UK',
    description: 'The series follows the adventures of International Rescue, an organisation created to help those in grave danger using technically advanced equipment and machinery. The series focuses on the head of the organisation, ex-astronaut Jeff Tracy, and his five sons who piloted the "Thunderbird" machines.',
    drm: true,
    episodeCount: 24,
    genre: 'Action',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/Thunderbirds_1280.jpg'
    },
    language: 'English',
    nextEpisode: null,
    primaryColour: '#0084da',
    seasons: [{
      slug: 'show/thunderbirds/season/1'
    }, {
      slug: 'show/thunderbirds/season/3'
    }, {
      slug: 'show/thunderbirds/season/4'
    }, {
      slug: 'show/thunderbirds/season/5'
    }, {
      slug: 'show/thunderbirds/season/6'
    }, {
      slug: 'show/thunderbirds/season/8'
    }],
    slug: 'show/thunderbirds',
    title: 'Thunderbirds',
    tvChannel: 'Channel 9'
  }, {
    country: 'USA',
    description: "A sleepy little village, Crystal Cove boasts a long history of ghost sightings, poltergeists, demon possessions, phantoms and other paranormal occurrences. The renowned sleuthing team of Fred, Daphne, Velma, Shaggy and Scooby-Doo prove all of this simply isn't real, and along the way, uncover a larger, season-long mystery that will change everything.",
    drm: true,
    episodeCount: 4,
    genre: 'Kids',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/ScoobyDoo1280.jpg'
    },
    language: 'English',
    nextEpisode: null,
    primaryColour: '#1b9e00',
    seasons: [{
      slug: 'show/scoobydoomysteryincorporated/season/1'
    }],
    slug: 'show/scoobydoomysteryincorporated',
    title: 'Scooby-Doo! Mystery Incorporated',
    tvChannel: 'GO!'
  }, {
    country: 'USA',
    description: 'Toy Hunter follows toy and collectibles expert and dealer Jordan Hembrough as he scours the U.S. for hidden treasures to sell to buyers around the world. In each episode, he travels from city to city, strategically manoeuvring around reluctant sellers, abating budgets, and avoiding unforeseen roadblocks.',
    drm: true,
    episodeCount: 2,
    genre: 'Reality',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/ToyHunter1280.jpg'
    },
    language: 'English',
    nextEpisode: null,
    primaryColour: '#0084da',
    seasons: [{
      slug: 'show/toyhunter/season/1'
    }],
    slug: 'show/toyhunter',
    title: 'Toy Hunter',
    tvChannel: 'GO!'
  }, {
    country: 'AUS',
    description: "A series of documentary specials featuring some of the world's most frightening moments, greatest daredevils and craziest weddings.",
    drm: true,
    episodeCount: 1,
    genre: 'Documentary',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/Worlds1280.jpg'
    },
    language: 'English',
    nextEpisode: null,
    primaryColour: '#ff7800',
    seasons: [{
      slug: 'show/worlds/season/1'
    }],
    slug: 'show/worlds',
    title: "World's...",
    tvChannel: 'Channel 9'
  }, {
    country: 'USA',
    description: "Another year of bachelorhood brought many new adventures for roommates Walden Schmidt and Alan Harper. After his girlfriend turned down his marriage proposal, Walden was thrown back into the dating world in a serious way. The guys may have thought things were going to slow down once Jake got transferred to Japan, but they're about to be proven wrong when a niece of Alan's, who shares more than a few characteristics with her father, shows up at the beach house.",
    drm: true,
    episodeCount: 0,
    genre: 'Comedy',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/TwoandahHalfMen_V2.jpg'
    },
    language: 'English',
    nextEpisode: {
      channel: null,
      channelLogo: 'http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif',
      date: null,
      html: 'Next episode airs: <span> 10:00pm Monday on<br><span class="visit">Visit the Official Website</span></span>',
      url: 'http://channelnine.ninemsn.com.au/twoandahalfmen/'
    },
    primaryColour: '#ff7800',
    seasons: null,
    slug: 'show/twoandahalfmen',
    title: 'Two and a Half Men',
    tvChannel: 'Channel 9'
  }, {
    country: 'USA',
    description: "Simmering with supernatural elements and featuring familiar and fan-favourite characters from the immensely popular drama The Vampire Diaries, it's The Originals. This sexy new series centres on the Original vampire family and the dangerous vampire/werewolf hybrid, Klaus, who returns to the magical melting pot that is the French Quarter of New Orleans, a town he helped build centuries ago.",
    drm: true,
    episodeCount: 1,
    genre: 'Action',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/TheOriginals1280.jpg'
    },
    language: 'English',
    nextEpisode: {
      channel: null,
      channelLogo: 'http://mybeautifulcatchupservice.com/img/player/logo_go.gif',
      date: null,
      html: '<br><span class="visit">Visit the Official Website</span></span>',
      url: 'http://go.ninemsn.com.au/'
    },
    primaryColour: '#df0000',
    seasons: [{
      slug: 'show/theoriginals/season/1'
    }],
    slug: 'show/theoriginals',
    title: 'The Originals',
    tvChannel: 'GO!'
  }, {
    country: 'AUS',
    description: 'Join the most dynamic TV judging panel Australia has ever seen as they uncover the next breed of superstars every Sunday night. UK comedy royalty Dawn French, international pop superstar Geri Halliwell, (in) famous Aussie straight-talking radio jock Kyle Sandilands, and chart -topping former AGT alumni Timomatic.',
    drm: false,
    episodeCount: 0,
    genre: 'Reality',
    image: {
      showImage: 'http://mybeautifulcatchupservice.com/img/shows/AGT.jpg'
    },
    language: 'English',
    nextEpisode: {
      channel: null,
      channelLogo: 'http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif',
      date: null,
      html: 'Next episode airs:<span>6:30pm Sunday on<br><span class="visit">Visit the Official Website</span></span>',
      url: 'http://agt.ninemsn.com.au'
    },
    primaryColour: '#df0000',
    seasons: null,
    slug: 'show/australiasgottalent',
    title: "Australia's Got Talent",
    tvChannel: 'Channel 9'
  }],
  skip: 0,
  take: 10,
  totalRecords: 75
};
exports.SampleQuery = SampleQuery;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2RhdGEudHMiXSwibmFtZXMiOlsiU2FtcGxlVFZTaG93cyIsIndpdGhEcm1BbmRFcGlzb2RlcyIsImNvdW50cnkiLCJkZXNjcmlwdGlvbiIsImRybSIsImVwaXNvZGVDb3VudCIsImdlbnJlIiwiaW1hZ2UiLCJzaG93SW1hZ2UiLCJsYW5ndWFnZSIsIm5leHRFcGlzb2RlIiwidW5kZWZpbmVkIiwicHJpbWFyeUNvbG91ciIsInNlYXNvbnMiLCJzbHVnIiwidGl0bGUiLCJ0dkNoYW5uZWwiLCJ3aXRoRHJtQnV0Tm9FcGlzb2RlcyIsImNoYW5uZWwiLCJjaGFubmVsTG9nbyIsImRhdGUiLCJodG1sIiwidXJsIiwid2l0aG91dERybUJ1dFdpdGhFcGlzb2RlcyIsIndpdGhvdXREcm1BbmRFcGlzb2RlcyIsIlNhbXBsZVF1ZXJ5IiwicGF5bG9hZCIsInNraXAiLCJ0YWtlIiwidG90YWxSZWNvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxhQUFhLEdBQUc7QUFDNUJDLEVBQUFBLGtCQUFrQixFQUFFO0FBQ25CQyxJQUFBQSxPQUFPLEVBQUUsSUFEVTtBQUVuQkMsSUFBQUEsV0FBVyxFQUNWLGlGQUhrQjtBQUluQkMsSUFBQUEsR0FBRyxFQUFFLElBSmM7QUFLbkJDLElBQUFBLFlBQVksRUFBRSxDQUxLO0FBTW5CQyxJQUFBQSxLQUFLLEVBQUUsU0FOWTtBQU9uQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ05DLE1BQUFBLFNBQVMsRUFDUjtBQUZLLEtBUFk7QUFXbkJDLElBQUFBLFFBQVEsRUFBRSxTQVhTO0FBWW5CQyxJQUFBQSxXQUFXLEVBQUVDLFNBWk07QUFhbkJDLElBQUFBLGFBQWEsRUFBRSxTQWJJO0FBY25CQyxJQUFBQSxPQUFPLEVBQUUsQ0FDUjtBQUNDQyxNQUFBQSxJQUFJLEVBQUU7QUFEUCxLQURRLENBZFU7QUFtQm5CQSxJQUFBQSxJQUFJLEVBQUUsd0JBbkJhO0FBb0JuQkMsSUFBQUEsS0FBSyxFQUFFLHNC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Q0MsTUFBQUEsSUFBSSxFQUFFO0FBRFAsS0FEUSxDQXRCVjtBQTJCQ0EsSUFBQUEsSUFBSSxFQUFFLG1CQTNCUDtBQTRCQ0MsSUFBQUEsS0FBSyxFQUFFLGVBNUJSO0FBNkJDQyxJQUFBQSxTQUFTLEVBQUU7QUE3QlosR0FsTVEsRUFpT1I7QUFDQ2QsSUFBQUEsT0FBTyxFQUFFLEtBRFY7QUFFQ0MsSUFBQUEsV0FBVyxFQUNWLDRUQUhGO0FBSUNDLElBQUFBLEdBQUcsRUFBRSxLQUpOO0FBS0NDLElBQUFBLFlBQVksRUFBRSxDQUxmO0FBTUNDLElBQUFBLEtBQUssRUFBRSxTQU5SO0FBT0NDLElBQUFBLEtBQUssRUFBRTtBQUNOQyxNQUFBQSxTQUFTLEVBQUU7QUFETCxLQVBSO0FBVUNDLElBQUFBLFFBQVEsRUFBRSxTQVZYO0FBV0NDLElBQUFBLFdBQVcsRUFBRTtBQUNaUSxNQUFBQSxPQUFPLEVBQUUsSUFERztBQUVaQyxNQUFBQSxXQUFXLEVBQ1Ysa0VBSFc7QUFJWkMsTUFBQUEsSUFBSSxFQUFFLElBSk07QUFLWkMsTUFBQUEsSUFBSSxFQUNILDBHQU5XO0FBT1pDLE1BQUFBLEdBQUcsRUFBRTtBQVBPLEtBWGQ7QUFvQkNWLElBQUFBLGFBQWEsRUFBRSxTQXBCaEI7QUFxQkNDLElBQUFBLE9BQU8sRUFBRSxJQXJCVjtBQXNCQ0MsSUFBQUEsSUFBSSxFQUFFLDBCQXRCUDtBQXVCQ0MsSUFBQUEsS0FBSyxFQUFFLHdCQXZCUjtBQXdCQ0MsSUFBQUEsU0FBUyxFQUFFO0FBeEJaLEdBak9RLENBRGlCO0FBNlAxQlcsRUFBQUEsSUFBSSxFQUFFLENBN1BvQjtBQThQMUJDLEVBQUFBLElBQUksRUFBRSxFQTlQb0I7QUErUDFCQyxFQUFBQSxZQUFZLEVBQUU7QUEvUFksQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU2FtcGxlVFZTaG93cyA9IHtcblx0d2l0aERybUFuZEVwaXNvZGVzOiB7XG5cdFx0Y291bnRyeTogJ1VLJyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFwiV2hhdCdzIGxpZmUgbGlrZSB3aGVuIHlvdSBoYXZlIGVub3VnaCBjaGlsZHJlbiB0byBmaWVsZCB5b3VyIG93biBmb290YmFsbCB0ZWFtP1wiLFxuXHRcdGRybTogdHJ1ZSxcblx0XHRlcGlzb2RlQ291bnQ6IDMsXG5cdFx0Z2VucmU6ICdSZWFsaXR5Jyxcblx0XHRpbWFnZToge1xuXHRcdFx0c2hvd0ltYWdlOlxuXHRcdFx0XHQnaHR0cDovL215YmVhdXRpZnVsY2F0Y2h1cHNlcnZpY2UuY29tL2ltZy9zaG93cy8xNktpZHNhbmRDb3VudGluZzEyODAuanBnJ1xuXHRcdH0sXG5cdFx0bGFuZ3VhZ2U6ICdFbmdsaXNoJyxcblx0XHRuZXh0RXBpc29kZTogdW5kZWZpbmVkLFxuXHRcdHByaW1hcnlDb2xvdXI6ICcjZmY3ODAwJyxcblx0XHRzZWFzb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNsdWc6ICdzaG93LzE2a2lkc2FuZGNvdW50aW5nL3NlYXNvbi8xJ1xuXHRcdFx0fVxuXHRcdF0sXG5cdFx0c2x1ZzogJ3Nob3cvMTZraWRzYW5kY291bnRpbmcnLFxuXHRcdHRpdGxlOiAnMTYgS2lkcyBhbmQgQ291bnRpbmcnLFxuXHRcdHR2Q2hhbm5lbDogJ0dFTSdcblx0fSxcblx0d2l0aERybUJ1dE5vRXBpc29kZXM6IHtcblx0XHRjb3VudHJ5OiAnVVNBJyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFwiQW5vdGhlciB5ZWFyIG9mIGJhY2hlbG9yaG9vZCBicm91Z2h0IG1hbnkgbmV3IGFkdmVudHVyZXMgZm9yIHJvb21tYXRlcyBXYWxkZW4gU2NobWlkdCBhbmQgQWxhbiBIYXJwZXIuIEFmdGVyIGhpcyBnaXJsZnJpZW5kIHR1cm5lZCBkb3duIGhpcyBtYXJyaWFnZSBwcm9wb3NhbCwgV2FsZGVuIHdhcyB0aHJvd24gYmFjayBpbnRvIHRoZSBkYXRpbmcgd29ybGQgaW4gYSBzZXJpb3VzIHdheS4gVGhlIGd1eXMgbWF5IGhhdmUgdGhvdWdodCB0aGluZ3Mgd2VyZSBnb2luZyB0byBzbG93IGRvd24gb25jZSBKYWtlIGdvdCB0cmFuc2ZlcnJlZCB0byBKYXBhbiwgYnV0IHRoZXkncmUgYWJvdXQgdG8gYmUgcHJvdmVuIHdyb25nIHdoZW4gYSBuaWVjZSBvZiBBbGFuJ3MsIHdobyBzaGFyZXMgbW9yZSB0aGFuIGEgZmV3IGNoYXJhY3RlcmlzdGljcyB3aXRoIGhlciBmYXRoZXIsIHNob3dzIHVwIGF0IHRoZSBiZWFjaCBob3VzZS5cIixcblx0XHRkcm06IHRydWUsXG5cdFx0ZXBpc29kZUNvdW50OiAwLFxuXHRcdGdlbnJlOiAnQ29tZWR5Jyxcblx0XHRpbWFnZToge1xuXHRcdFx0c2hvd0ltYWdlOlxuXHRcdFx0XHQnaHR0cDovL215YmVhdXRpZnVsY2F0Y2h1cHNlcnZpY2UuY29tL2ltZy9zaG93cy9Ud29hbmRhaEhhbGZNZW5fVjIuanBnJ1xuXHRcdH0sXG5cdFx0bGFuZ3VhZ2U6ICdFbmdsaXNoJyxcblx0XHRuZXh0RXBpc29kZToge1xuXHRcdFx0Y2hhbm5lbDogdW5kZWZpbmVkLFxuXHRcdFx0Y2hhbm5lbExvZ286XG5cdFx0XHRcdCdodHRwOi8vbXliZWF1dGlmdWxjYXRjaHVwc2VydmljZS5jb20vaW1nL3BsYXllci9DaDlfbmV3X2xvZ28uZ2lmJyxcblx0XHRcdGRhdGU6IHVuZGVmaW5lZCxcblx0XHRcdGh0bWw6XG5cdFx0XHRcdCdOZXh0IGVwaXNvZGUgYWlyczogPHNwYW4+IDEwOjAwcG0gTW9uZGF5IG9uPGJyPjxzcGFuIGNsYXNzPVwidmlzaXRcIj5WaXNpdCB0aGUgT2ZmaWNpYWwgV2Vic2l0ZTwvc3Bhbj48L3NwYW4+Jyxcblx0XHRcdHVybDogJ2h0dHA6Ly9jaGFubmVsbmluZS5uaW5lbXNuLmNvbS5hdS90d29hbmRhaGFsZm1lbi8nXG5cdFx0fSxcblx0XHRwcmltYXJ5Q29sb3VyOiAnI2ZmNzgwMCcsXG5cdFx0c2Vhc29uczogdW5kZWZpbmVkLFxuXHRcdHNsdWc6ICdzaG93L3R3b2FuZGFoYWxmbWVuJyxcblx0XHR0aXRsZTogJ1R3byBhbmQgYSBIYWxmIE1lbicsXG5cdFx0dHZDaGFubmVsOiAnQ2hhbm5lbCA5J1xuXHR9LFxuXHR3aXRob3V0RHJtQnV0V2l0aEVwaXNvZGVzOiB7XG5cdFx0Y291bnRyeTogJ0FVUycsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHQnSm9pbiB0aGUgbW9zdCBkeW5hbWljIFRWIGp1ZGdpbmcgcGFuZWwgQXVzdHJhbGlhIGhhcyBldmVyIHNlZW4gYXMgdGhleSB1bmNvdmVyIHRoZSBuZXh0IGJyZWVkIG9mIHN1cGVyc3RhcnMgZXZlcnkgU3VuZGF5IG5pZ2h0LiBVSyBjb21lZHkgcm95YWx0eSBEYXduIEZyZW5jaCwgaW50ZXJuYXRpb25hbCBwb3Agc3VwZXJzdGFyIEdlcmkgSGFsbGl3ZWxsLCAoaW4pIGZhbW91cyBBdXNzaWUgc3RyYWlnaHQtdGFsa2luZyByYWRpbyBqb2NrIEt5bGUgU2FuZGlsYW5kcywgYW5kIGNoYXJ0IC10b3BwaW5nIGZvcm1lciBBR1QgYWx1bW5pIFRpbW9tYXRpYy4nLFxuXHRcdGRybTogZmFsc2UsXG5cdFx0ZXBpc29kZUNvdW50OiAyLFxuXHRcdGdlbnJlOiAnUmVhbGl0eScsXG5cdFx0aW1hZ2U6IHtcblx0XHRcdHNob3dJbWFnZTogJ2h0dHA6Ly9teWJlYXV0aWZ1bGNhdGNodXBzZXJ2aWNlLmNvbS9pbWcvc2hvd3MvQUdULmpwZydcblx0XHR9LFxuXHRcdGxhbmd1YWdlOiAnRW5nbGlzaCcsXG5cdFx0bmV4dEVwaXNvZGU6IHtcblx0XHRcdGNoYW5uZWw6IHVuZGVmaW5lZCxcblx0XHRcdGNoYW5uZWxMb2dvOlxuXHRcdFx0XHQnaHR0cDovL215YmVhdXRpZnVsY2F0Y2h1cHNlcnZpY2UuY29tL2ltZy9wbGF5ZXIvQ2g5X25ld19sb2dvLmdpZicsXG5cdFx0XHRkYXRlOiB1bmRlZmluZWQsXG5cdFx0XHRodG1sOlxuXHRcdFx0XHQnTmV4dCBlcGlzb2RlIGFpcnM6PHNwYW4+NjozMHBtIFN1bmRheSBvbjxicj48c3BhbiBjbGFzcz1cInZpc2l0XCI+VmlzaXQgdGhlIE9mZmljaWFsIFdlYnNpdGU8L3NwYW4+PC9zcGFuPicsXG5cdFx0XHR1cmw6ICdodHRwOi8vYWd0Lm5pbmVtc24uY29tLmF1J1xuXHRcdH0sXG5cdFx0cHJpbWFyeUNvbG91cjogJyNkZjAwMDAnLFxuXHRcdHNlYXNvbnM6IHVuZGVmaW5lZCxcblx0XHRzbHVnOiAnc2hvdy9hdXN0cmFsaWFzZ290dGFsZW50Jyxcblx0XHR0aXRsZTogXCJBdXN0cmFsaWEncyBHb3QgVGFsZW50XCIsXG5cdFx0dHZDaGFubmVsOiAnQ2hhbm5lbCA5J1xuXHR9LFxuXHR3aXRob3V0RHJtQW5kRXBpc29kZXM6IHtcblx0XHRzbHVnOiAnc2hvdy9zZWFwYXRyb2wnLFxuXHRcdHRpdGxlOiAnU2VhIFBhdHJvbCcsXG5cdFx0dHZDaGFubmVsOiAnQ2hhbm5lbCA5J1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgU2FtcGxlUXVlcnkgPSB7XG5cdHBheWxvYWQ6IFtcblx0XHR7XG5cdFx0XHRjb3VudHJ5OiAnVUsnLFxuXHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFwiV2hhdCdzIGxpZmUgbGlrZSB3aGVuIHlvdSBoYXZlIGVub3VnaCBjaGlsZHJlbiB0byBmaWVsZCB5b3VyIG93biBmb290YmFsbCB0ZWFtP1wiLFxuXHRcdFx0ZHJtOiB0cnVlLFxuXHRcdFx0ZXBpc29kZUNvdW50OiAzLFxuXHRcdFx0Z2VucmU6ICdSZWFsaXR5Jyxcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdHNob3dJbWFnZTpcblx0XHRcdFx0XHQnaHR0cDovL215YmVhdXRpZnVsY2F0Y2h1cHNlcnZpY2UuY29tL2ltZy9zaG93cy8xNktpZHNhbmRDb3VudGluZzEyODAuanBnJ1xuXHRcdFx0fSxcblx0XHRcdGxhbmd1YWdlOiAnRW5nbGlzaCcsXG5cdFx0XHRuZXh0RXBpc29kZTogbnVsbCxcblx0XHRcdHByaW1hcnlDb2xvdXI6ICcjZmY3ODAwJyxcblx0XHRcdHNlYXNvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93LzE2a2lkc2FuZGNvdW50aW5nL3NlYXNvbi8xJ1xuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0c2x1ZzogJ3Nob3cvMTZraWRzYW5kY291bnRpbmcnLFxuXHRcdFx0dGl0bGU6ICcxNiBLaWRzIGFuZCBDb3VudGluZycsXG5cdFx0XHR0dkNoYW5uZWw6ICdHRU0nXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzbHVnOiAnc2hvdy9zZWFwYXRyb2wnLFxuXHRcdFx0dGl0bGU6ICdTZWEgUGF0cm9sJyxcblx0XHRcdHR2Q2hhbm5lbDogJ0NoYW5uZWwgOSdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGNvdW50cnk6ICcgVVNBJyxcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcIlRoZSBUYXN0ZSBwdXRzIDE2IGN1bGluYXJ5IGNvbXBldGl0b3JzIGluIHRoZSBraXRjaGVuLCB3aGVyZSBmb3VyIG9mIHRoZSBXb3JsZCdzIG1vc3Qgbm90YWJsZSBjdWxpbmFyeSBtYXN0ZXJzIG9mIHRoZSBmb29kIHdvcmxkIGp1ZGdlcyB0aGVpciBjcmVhdGlvbnMgYmFzZWQgb24gYSBibGluZCB0YXN0ZS4gSm9pbiBqdWRnZXMgQW50aG9ueSBCb3VyZGFpbiwgTmlnZWxsYSBMYXdzb24sIEx1ZG92aWMgTGVmZWJ2cmUgYW5kIEJyaWFuIE1hbGFya2V5IGluIHRoaXMgcHJlc3N1cmUtcGFja2VkIGNvbnRlc3Qgd2hlcmUgYSBzaW5nbGUgc3Bvb25mdWwgY2FuIGNhdGFwdWx0IGEgY29udGVuZGVyIHRvIHRoZSB0b3Agb3Igc2VuZCB0aGVtIHBhY2tpbmcuXCIsXG5cdFx0XHRkcm06IHRydWUsXG5cdFx0XHRlcGlzb2RlQ291bnQ6IDIsXG5cdFx0XHRnZW5yZTogJ1JlYWxpdHknLFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0c2hvd0ltYWdlOlxuXHRcdFx0XHRcdCdodHRwOi8vbXliZWF1dGlmdWxjYXRjaHVwc2VydmljZS5jb20vaW1nL3Nob3dzL1RoZVRhc3RlMTI4MC5qcGcnXG5cdFx0XHR9LFxuXHRcdFx0bGFuZ3VhZ2U6ICdFbmdsaXNoJyxcblx0XHRcdG5leHRFcGlzb2RlOiB7XG5cdFx0XHRcdGNoYW5uZWw6IG51bGwsXG5cdFx0XHRcdGNoYW5uZWxMb2dvOlxuXHRcdFx0XHRcdCdodHRwOi8vbXliZWF1dGlmdWxjYXRjaHVwc2VydmljZS5jb20vaW1nL3BsYXllci9sb2dvX2dvLmdpZicsXG5cdFx0XHRcdGRhdGU6IG51bGwsXG5cdFx0XHRcdGh0bWw6XG5cdFx0XHRcdFx0Jzxicj48c3BhbiBjbGFzcz1cInZpc2l0XCI+VmlzaXQgdGhlIE9mZmljaWFsIFdlYnNpdGU8L3NwYW4+PC9zcGFuPicsXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9nby5uaW5lbXNuLmNvbS5hdS8nXG5cdFx0XHR9LFxuXHRcdFx0cHJpbWFyeUNvbG91cjogJyNkZjAwMDAnLFxuXHRcdFx0c2Vhc29uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2x1ZzogJ3Nob3cvdGhldGFzdGUvc2Vhc29uLzEnXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRzbHVnOiAnc2hvdy90aGV0YXN0ZScsXG5cdFx0XHR0aXRsZTogJ1RoZSBUYXN0ZScsXG5cdFx0XHR0dkNoYW5uZWw6ICdHRU0nXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRjb3VudHJ5OiAnVUsnLFxuXHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdCdUaGUgc2VyaWVzIGZvbGxvd3MgdGhlIGFkdmVudHVyZXMgb2YgSW50ZXJuYXRpb25hbCBSZXNjdWUsIGFuIG9yZ2FuaXNhdGlvbiBjcmVhdGVkIHRvIGhlbHAgdGhvc2UgaW4gZ3JhdmUgZGFuZ2VyIHVzaW5nIHRlY2huaWNhbGx5IGFkdmFuY2VkIGVxdWlwbWVudCBhbmQgbWFjaGluZXJ5LiBUaGUgc2VyaWVzIGZvY3VzZXMgb24gdGhlIGhlYWQgb2YgdGhlIG9yZ2FuaXNhdGlvbiwgZXgtYXN0cm9uYXV0IEplZmYgVHJhY3ksIGFuZCBoaXMgZml2ZSBzb25zIHdobyBwaWxvdGVkIHRoZSBcIlRodW5kZXJiaXJkXCIgbWFjaGluZXMuJyxcblx0XHRcdGRybTogdHJ1ZSxcblx0XHRcdGVwaXNvZGVDb3VudDogMjQsXG5cdFx0XHRnZW5yZTogJ0FjdGlvbicsXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHRzaG93SW1hZ2U6XG5cdFx0XHRcdFx0J2h0dHA6Ly9teWJlYXV0aWZ1bGNhdGNodXBzZXJ2aWNlLmNvbS9pbWcvc2hvd3MvVGh1bmRlcmJpcmRzXzEyODAuanBnJ1xuXHRcdFx0fSxcblx0XHRcdGxhbmd1YWdlOiAnRW5nbGlzaCcsXG5cdFx0XHRuZXh0RXBpc29kZTogbnVsbCxcblx0XHRcdHByaW1hcnlDb2xvdXI6ICcjMDA4NGRhJyxcblx0XHRcdHNlYXNvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93L3RodW5kZXJiaXJkcy9zZWFzb24vMSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93L3RodW5kZXJiaXJkcy9zZWFzb24vMydcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93L3RodW5kZXJiaXJkcy9zZWFzb24vNCdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93L3RodW5kZXJiaXJkcy9zZWFzb24vNSdcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93L3RodW5kZXJiaXJkcy9zZWFzb24vNidcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93L3RodW5kZXJiaXJkcy9zZWFzb24vOCdcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdHNsdWc6ICdzaG93L3RodW5kZXJiaXJkcycsXG5cdFx0XHR0aXRsZTogJ1RodW5kZXJiaXJkcycsXG5cdFx0XHR0dkNoYW5uZWw6ICdDaGFubmVsIDknXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRjb3VudHJ5OiAnVVNBJyxcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcIkEgc2xlZXB5IGxpdHRsZSB2aWxsYWdlLCBDcnlzdGFsIENvdmUgYm9hc3RzIGEgbG9uZyBoaXN0b3J5IG9mIGdob3N0IHNpZ2h0aW5ncywgcG9sdGVyZ2Vpc3RzLCBkZW1vbiBwb3NzZXNzaW9ucywgcGhhbnRvbXMgYW5kIG90aGVyIHBhcmFub3JtYWwgb2NjdXJyZW5jZXMuIFRoZSByZW5vd25lZCBzbGV1dGhpbmcgdGVhbSBvZiBGcmVkLCBEYXBobmUsIFZlbG1hLCBTaGFnZ3kgYW5kIFNjb29ieS1Eb28gcHJvdmUgYWxsIG9mIHRoaXMgc2ltcGx5IGlzbid0IHJlYWwsIGFuZCBhbG9uZyB0aGUgd2F5LCB1bmNvdmVyIGEgbGFyZ2VyLCBzZWFzb24tbG9uZyBteXN0ZXJ5IHRoYXQgd2lsbCBjaGFuZ2UgZXZlcnl0aGluZy5cIixcblx0XHRcdGRybTogdHJ1ZSxcblx0XHRcdGVwaXNvZGVDb3VudDogNCxcblx0XHRcdGdlbnJlOiAnS2lkcycsXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHRzaG93SW1hZ2U6XG5cdFx0XHRcdFx0J2h0dHA6Ly9teWJlYXV0aWZ1bGNhdGNodXBzZXJ2aWNlLmNvbS9pbWcvc2hvd3MvU2Nvb2J5RG9vMTI4MC5qcGcnXG5cdFx0XHR9LFxuXHRcdFx0bGFuZ3VhZ2U6ICdFbmdsaXNoJyxcblx0XHRcdG5leHRFcGlzb2RlOiBudWxsLFxuXHRcdFx0cHJpbWFyeUNvbG91cjogJyMxYjllMDAnLFxuXHRcdFx0c2Vhc29uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2x1ZzogJ3Nob3cvc2Nvb2J5ZG9vbXlzdGVyeWluY29ycG9yYXRlZC9zZWFzb24vMSdcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdHNsdWc6ICdzaG93L3Njb29ieWRvb215c3RlcnlpbmNvcnBvcmF0ZWQnLFxuXHRcdFx0dGl0bGU6ICdTY29vYnktRG9vISBNeXN0ZXJ5IEluY29ycG9yYXRlZCcsXG5cdFx0XHR0dkNoYW5uZWw6ICdHTyEnXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRjb3VudHJ5OiAnVVNBJyxcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHQnVG95IEh1bnRlciBmb2xsb3dzIHRveSBhbmQgY29sbGVjdGlibGVzIGV4cGVydCBhbmQgZGVhbGVyIEpvcmRhbiBIZW1icm91Z2ggYXMgaGUgc2NvdXJzIHRoZSBVLlMuIGZvciBoaWRkZW4gdHJlYXN1cmVzIHRvIHNlbGwgdG8gYnV5ZXJzIGFyb3VuZCB0aGUgd29ybGQuIEluIGVhY2ggZXBpc29kZSwgaGUgdHJhdmVscyBmcm9tIGNpdHkgdG8gY2l0eSwgc3RyYXRlZ2ljYWxseSBtYW5vZXV2cmluZyBhcm91bmQgcmVsdWN0YW50IHNlbGxlcnMsIGFiYXRpbmcgYnVkZ2V0cywgYW5kIGF2b2lkaW5nIHVuZm9yZXNlZW4gcm9hZGJsb2Nrcy4nLFxuXHRcdFx0ZHJtOiB0cnVlLFxuXHRcdFx0ZXBpc29kZUNvdW50OiAyLFxuXHRcdFx0Z2VucmU6ICdSZWFsaXR5Jyxcblx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdHNob3dJbWFnZTpcblx0XHRcdFx0XHQnaHR0cDovL215YmVhdXRpZnVsY2F0Y2h1cHNlcnZpY2UuY29tL2ltZy9zaG93cy9Ub3lIdW50ZXIxMjgwLmpwZydcblx0XHRcdH0sXG5cdFx0XHRsYW5ndWFnZTogJ0VuZ2xpc2gnLFxuXHRcdFx0bmV4dEVwaXNvZGU6IG51bGwsXG5cdFx0XHRwcmltYXJ5Q29sb3VyOiAnIzAwODRkYScsXG5cdFx0XHRzZWFzb25zOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzbHVnOiAnc2hvdy90b3lodW50ZXIvc2Vhc29uLzEnXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRzbHVnOiAnc2hvdy90b3lodW50ZXInLFxuXHRcdFx0dGl0bGU6ICdUb3kgSHVudGVyJyxcblx0XHRcdHR2Q2hhbm5lbDogJ0dPISdcblx0XHR9LFxuXHRcdHtcblx0XHRcdGNvdW50cnk6ICdBVVMnLFxuXHRcdFx0ZGVzY3JpcHRpb246XG5cdFx0XHRcdFwiQSBzZXJpZXMgb2YgZG9jdW1lbnRhcnkgc3BlY2lhbHMgZmVhdHVyaW5nIHNvbWUgb2YgdGhlIHdvcmxkJ3MgbW9zdCBmcmlnaHRlbmluZyBtb21lbnRzLCBncmVhdGVzdCBkYXJlZGV2aWxzIGFuZCBjcmF6aWVzdCB3ZWRkaW5ncy5cIixcblx0XHRcdGRybTogdHJ1ZSxcblx0XHRcdGVwaXNvZGVDb3VudDogMSxcblx0XHRcdGdlbnJlOiAnRG9jdW1lbnRhcnknLFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0c2hvd0ltYWdlOlxuXHRcdFx0XHRcdCdodHRwOi8vbXliZWF1dGlmdWxjYXRjaHVwc2VydmljZS5jb20vaW1nL3Nob3dzL1dvcmxkczEyODAuanBnJ1xuXHRcdFx0fSxcblx0XHRcdGxhbmd1YWdlOiAnRW5nbGlzaCcsXG5cdFx0XHRuZXh0RXBpc29kZTogbnVsbCxcblx0XHRcdHByaW1hcnlDb2xvdXI6ICcjZmY3ODAwJyxcblx0XHRcdHNlYXNvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93L3dvcmxkcy9zZWFzb24vMSdcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdHNsdWc6ICdzaG93L3dvcmxkcycsXG5cdFx0XHR0aXRsZTogXCJXb3JsZCdzLi4uXCIsXG5cdFx0XHR0dkNoYW5uZWw6ICdDaGFubmVsIDknXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRjb3VudHJ5OiAnVVNBJyxcblx0XHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0XHRcIkFub3RoZXIgeWVhciBvZiBiYWNoZWxvcmhvb2QgYnJvdWdodCBtYW55IG5ldyBhZHZlbnR1cmVzIGZvciByb29tbWF0ZXMgV2FsZGVuIFNjaG1pZHQgYW5kIEFsYW4gSGFycGVyLiBBZnRlciBoaXMgZ2lybGZyaWVuZCB0dXJuZWQgZG93biBoaXMgbWFycmlhZ2UgcHJvcG9zYWwsIFdhbGRlbiB3YXMgdGhyb3duIGJhY2sgaW50byB0aGUgZGF0aW5nIHdvcmxkIGluIGEgc2VyaW91cyB3YXkuIFRoZSBndXlzIG1heSBoYXZlIHRob3VnaHQgdGhpbmdzIHdlcmUgZ29pbmcgdG8gc2xvdyBkb3duIG9uY2UgSmFrZSBnb3QgdHJhbnNmZXJyZWQgdG8gSmFwYW4sIGJ1dCB0aGV5J3JlIGFib3V0IHRvIGJlIHByb3ZlbiB3cm9uZyB3aGVuIGEgbmllY2Ugb2YgQWxhbidzLCB3aG8gc2hhcmVzIG1vcmUgdGhhbiBhIGZldyBjaGFyYWN0ZXJpc3RpY3Mgd2l0aCBoZXIgZmF0aGVyLCBzaG93cyB1cCBhdCB0aGUgYmVhY2ggaG91c2UuXCIsXG5cdFx0XHRkcm06IHRydWUsXG5cdFx0XHRlcGlzb2RlQ291bnQ6IDAsXG5cdFx0XHRnZW5yZTogJ0NvbWVkeScsXG5cdFx0XHRpbWFnZToge1xuXHRcdFx0XHRzaG93SW1hZ2U6XG5cdFx0XHRcdFx0J2h0dHA6Ly9teWJlYXV0aWZ1bGNhdGNodXBzZXJ2aWNlLmNvbS9pbWcvc2hvd3MvVHdvYW5kYWhIYWxmTWVuX1YyLmpwZydcblx0XHRcdH0sXG5cdFx0XHRsYW5ndWFnZTogJ0VuZ2xpc2gnLFxuXHRcdFx0bmV4dEVwaXNvZGU6IHtcblx0XHRcdFx0Y2hhbm5lbDogbnVsbCxcblx0XHRcdFx0Y2hhbm5lbExvZ286XG5cdFx0XHRcdFx0J2h0dHA6Ly9teWJlYXV0aWZ1bGNhdGNodXBzZXJ2aWNlLmNvbS9pbWcvcGxheWVyL0NoOV9uZXdfbG9nby5naWYnLFxuXHRcdFx0XHRkYXRlOiBudWxsLFxuXHRcdFx0XHRodG1sOlxuXHRcdFx0XHRcdCdOZXh0IGVwaXNvZGUgYWlyczogPHNwYW4+IDEwOjAwcG0gTW9uZGF5IG9uPGJyPjxzcGFuIGNsYXNzPVwidmlzaXRcIj5WaXNpdCB0aGUgT2ZmaWNpYWwgV2Vic2l0ZTwvc3Bhbj48L3NwYW4+Jyxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2NoYW5uZWxuaW5lLm5pbmVtc24uY29tLmF1L3R3b2FuZGFoYWxmbWVuLydcblx0XHRcdH0sXG5cdFx0XHRwcmltYXJ5Q29sb3VyOiAnI2ZmNzgwMCcsXG5cdFx0XHRzZWFzb25zOiBudWxsLFxuXHRcdFx0c2x1ZzogJ3Nob3cvdHdvYW5kYWhhbGZtZW4nLFxuXHRcdFx0dGl0bGU6ICdUd28gYW5kIGEgSGFsZiBNZW4nLFxuXHRcdFx0dHZDaGFubmVsOiAnQ2hhbm5lbCA5J1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0Y291bnRyeTogJ1VTQScsXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0XCJTaW1tZXJpbmcgd2l0aCBzdXBlcm5hdHVyYWwgZWxlbWVudHMgYW5kIGZlYXR1cmluZyBmYW1pbGlhciBhbmQgZmFuLWZhdm91cml0ZSBjaGFyYWN0ZXJzIGZyb20gdGhlIGltbWVuc2VseSBwb3B1bGFyIGRyYW1hIFRoZSBWYW1waXJlIERpYXJpZXMsIGl0J3MgVGhlIE9yaWdpbmFscy4gVGhpcyBzZXh5IG5ldyBzZXJpZXMgY2VudHJlcyBvbiB0aGUgT3JpZ2luYWwgdmFtcGlyZSBmYW1pbHkgYW5kIHRoZSBkYW5nZXJvdXMgdmFtcGlyZS93ZXJld29sZiBoeWJyaWQsIEtsYXVzLCB3aG8gcmV0dXJucyB0byB0aGUgbWFnaWNhbCBtZWx0aW5nIHBvdCB0aGF0IGlzIHRoZSBGcmVuY2ggUXVhcnRlciBvZiBOZXcgT3JsZWFucywgYSB0b3duIGhlIGhlbHBlZCBidWlsZCBjZW50dXJpZXMgYWdvLlwiLFxuXHRcdFx0ZHJtOiB0cnVlLFxuXHRcdFx0ZXBpc29kZUNvdW50OiAxLFxuXHRcdFx0Z2VucmU6ICdBY3Rpb24nLFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0c2hvd0ltYWdlOlxuXHRcdFx0XHRcdCdodHRwOi8vbXliZWF1dGlmdWxjYXRjaHVwc2VydmljZS5jb20vaW1nL3Nob3dzL1RoZU9yaWdpbmFsczEyODAuanBnJ1xuXHRcdFx0fSxcblx0XHRcdGxhbmd1YWdlOiAnRW5nbGlzaCcsXG5cdFx0XHRuZXh0RXBpc29kZToge1xuXHRcdFx0XHRjaGFubmVsOiBudWxsLFxuXHRcdFx0XHRjaGFubmVsTG9nbzpcblx0XHRcdFx0XHQnaHR0cDovL215YmVhdXRpZnVsY2F0Y2h1cHNlcnZpY2UuY29tL2ltZy9wbGF5ZXIvbG9nb19nby5naWYnLFxuXHRcdFx0XHRkYXRlOiBudWxsLFxuXHRcdFx0XHRodG1sOlxuXHRcdFx0XHRcdCc8YnI+PHNwYW4gY2xhc3M9XCJ2aXNpdFwiPlZpc2l0IHRoZSBPZmZpY2lhbCBXZWJzaXRlPC9zcGFuPjwvc3Bhbj4nLFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vZ28ubmluZW1zbi5jb20uYXUvJ1xuXHRcdFx0fSxcblx0XHRcdHByaW1hcnlDb2xvdXI6ICcjZGYwMDAwJyxcblx0XHRcdHNlYXNvbnM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNsdWc6ICdzaG93L3RoZW9yaWdpbmFscy9zZWFzb24vMSdcblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHRcdHNsdWc6ICdzaG93L3RoZW9yaWdpbmFscycsXG5cdFx0XHR0aXRsZTogJ1RoZSBPcmlnaW5hbHMnLFxuXHRcdFx0dHZDaGFubmVsOiAnR08hJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0Y291bnRyeTogJ0FVUycsXG5cdFx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdFx0J0pvaW4gdGhlIG1vc3QgZHluYW1pYyBUViBqdWRnaW5nIHBhbmVsIEF1c3RyYWxpYSBoYXMgZXZlciBzZWVuIGFzIHRoZXkgdW5jb3ZlciB0aGUgbmV4dCBicmVlZCBvZiBzdXBlcnN0YXJzIGV2ZXJ5IFN1bmRheSBuaWdodC4gVUsgY29tZWR5IHJveWFsdHkgRGF3biBGcmVuY2gsIGludGVybmF0aW9uYWwgcG9wIHN1cGVyc3RhciBHZXJpIEhhbGxpd2VsbCwgKGluKSBmYW1vdXMgQXVzc2llIHN0cmFpZ2h0LXRhbGtpbmcgcmFkaW8gam9jayBLeWxlIFNhbmRpbGFuZHMsIGFuZCBjaGFydCAtdG9wcGluZyBmb3JtZXIgQUdUIGFsdW1uaSBUaW1vbWF0aWMuJyxcblx0XHRcdGRybTogZmFsc2UsXG5cdFx0XHRlcGlzb2RlQ291bnQ6IDAsXG5cdFx0XHRnZW5yZTogJ1JlYWxpdHknLFxuXHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0c2hvd0ltYWdlOiAnaHR0cDovL215YmVhdXRpZnVsY2F0Y2h1cHNlcnZpY2UuY29tL2ltZy9zaG93cy9BR1QuanBnJ1xuXHRcdFx0fSxcblx0XHRcdGxhbmd1YWdlOiAnRW5nbGlzaCcsXG5cdFx0XHRuZXh0RXBpc29kZToge1xuXHRcdFx0XHRjaGFubmVsOiBudWxsLFxuXHRcdFx0XHRjaGFubmVsTG9nbzpcblx0XHRcdFx0XHQnaHR0cDovL215YmVhdXRpZnVsY2F0Y2h1cHNlcnZpY2UuY29tL2ltZy9wbGF5ZXIvQ2g5X25ld19sb2dvLmdpZicsXG5cdFx0XHRcdGRhdGU6IG51bGwsXG5cdFx0XHRcdGh0bWw6XG5cdFx0XHRcdFx0J05leHQgZXBpc29kZSBhaXJzOjxzcGFuPjY6MzBwbSBTdW5kYXkgb248YnI+PHNwYW4gY2xhc3M9XCJ2aXNpdFwiPlZpc2l0IHRoZSBPZmZpY2lhbCBXZWJzaXRlPC9zcGFuPjwvc3Bhbj4nLFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vYWd0Lm5pbmVtc24uY29tLmF1J1xuXHRcdFx0fSxcblx0XHRcdHByaW1hcnlDb2xvdXI6ICcjZGYwMDAwJyxcblx0XHRcdHNlYXNvbnM6IG51bGwsXG5cdFx0XHRzbHVnOiAnc2hvdy9hdXN0cmFsaWFzZ290dGFsZW50Jyxcblx0XHRcdHRpdGxlOiBcIkF1c3RyYWxpYSdzIEdvdCBUYWxlbnRcIixcblx0XHRcdHR2Q2hhbm5lbDogJ0NoYW5uZWwgOSdcblx0XHR9XG5cdF0sXG5cdHNraXA6IDAsXG5cdHRha2U6IDEwLFxuXHR0b3RhbFJlY29yZHM6IDc1XG59O1xuIl19