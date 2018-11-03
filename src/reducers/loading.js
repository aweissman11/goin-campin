const defaultState = {
  isLoading: true,
  message: 'booting up...'
}

export const loading = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING' :
      const { message, isLoading } = action
      return { message, isLoading: isLoading };
    default:
      return state;
  }
}

export default loading;