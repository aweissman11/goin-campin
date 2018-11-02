export const hikesList = (state = [], action) => {
  switch(action.type) {
    case 'SET_HIKES_LIST' :
      return action.hikesList;
    default:
      return state;
  }
}

export default hikesList;