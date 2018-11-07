import { combineReducers } from 'redux';

import { currentLocation } from './currentLocation';
import { hikesList } from './hikesList';
import { campsList } from './campsList';
import { loading } from './loading';
import { hasErrored } from './hasErrored';

export const rootReducer = combineReducers({
  currentLocation,
  hikesList,
  campsList,
  loading,
  hasErrored
})