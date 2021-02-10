import Redux from 'redux';

const videoListReducer = (state = [] /*= sampleData*/, action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state;
  }
};

export default videoListReducer;
