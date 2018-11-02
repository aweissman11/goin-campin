import { combineReducers } from 'redux';

import { currentLocation } from './currentLocation';
import { hikesList } from './hikesList';

export const rootReducer = combineReducers({
  currentLocation,
  hikesList
})