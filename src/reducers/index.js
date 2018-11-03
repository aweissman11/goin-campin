import { combineReducers } from 'redux';

import { currentLocation } from './currentLocation';
import { hikesList } from './hikesList';
import { campsList } from './campsList';

export const rootReducer = combineReducers({
  currentLocation,
  hikesList,
  campsList
})