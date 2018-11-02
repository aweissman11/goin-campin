export const setCurrentLocation = (location) => {
  return {
    type: 'SET_CURRENT_LOCATION',
    location
  }
}

export const setHikesList = (hikesList) => {
  return {
    type: 'SET_HIKES_LIST',
    hikesList
  }
}