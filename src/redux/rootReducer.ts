import { combineReducers } from '@reduxjs/toolkit';
import imageReducer from './slices/imageSlice';

const rootReducer = combineReducers({
  images: imageReducer,
});

export default rootReducer;