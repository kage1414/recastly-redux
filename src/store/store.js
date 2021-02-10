import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

let initialState = {
  videos: exampleVideoData,
  currentVideo: exampleVideoData[0],
  searchValue: ''
};

let enhancer = applyMiddleware(thunk);

const store = createStore(rootReducer, initialState, enhancer);
