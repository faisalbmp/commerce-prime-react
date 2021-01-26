import { combineReducers } from 'redux';

import { default as globalReducer } from './globalSlice';
import homeReducer from '../features/Home/homeSlice'
import bagReducer from '../features/Bags/BagsSlice'

export default combineReducers({
  global: globalReducer,
  home: homeReducer,
  bags: bagReducer,
});
