import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({ videoList: videoList, currentVideo: currentVideo });

export default rootReducer;
