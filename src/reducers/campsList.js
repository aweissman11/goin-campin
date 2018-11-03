export const campsList = (state = [], action) => {
  switch(action.type) {
    case 'SET_CAMPS_LIST' :
      return action.campsList;
    default:
      return state;
  }
}

export default campsList;