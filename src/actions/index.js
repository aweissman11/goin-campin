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

export const setCampsList = (campsList) => {
  return {
    type: 'SET_CAMPS_LIST',
    campsList
  }
}

export const loading = (message, isLoading) => {
  console.log('loading:', isLoading, message)
  return {
    type: 'LOADING',
    message,
    isLoading
  }
}

export const hasErrored = (message, isLoading) => {
  return {
    type: 'HAS_ERRORED',
    message,
    isLoading
  }
}