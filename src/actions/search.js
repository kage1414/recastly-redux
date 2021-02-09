import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  var obj = {
    key: YOUTUBE_API_KEY,
    query: q,
    max: 5
  };

  // Call searchYouTube and save to variable
  var videoResults = searchYouTube(obj);
  // Call change videoList and changeVIdeo with resulting data
  var dispatchActions = () => {
    dispatch(changeVideoList(videoResults));
    dispatch(changeVideo(videoResults[0]));
  };

  return dispatchActions;
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;

// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({items}) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({responseJSON}) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };
