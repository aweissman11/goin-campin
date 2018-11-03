export const currentLocation = (state = [], action) => {
  switch(action.type) {
    case 'SET_CURRENT_LOCATION' :
      return action.location;
    default:
      return state;
  }
}

export default currentLocation;