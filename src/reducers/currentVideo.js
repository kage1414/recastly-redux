import Redux from 'redux';
import initialState from '../store/store.js';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (state === undefined) {
    state = initialState;
  }
  if (action.type === 'CHANGE_VIDEO') {
    const newState = state;
    const newCurrentVideo = action.video;
    newState.currentVideo = newCurrentVideo;
    return newState;
  } else {
    return state;
  }
};

export default currentVideoReducer;
