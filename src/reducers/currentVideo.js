import Redux from 'redux';

const currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
    return action.video || null;
  } else {
    return state;
  }
};

export default currentVideoReducer;
