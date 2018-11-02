import * as Actions from '../index';

describe('actions', () => {
  it('should have a type of SET_CURRENT_LOCATION', () => {
    const location = [3, 4];
    
    const expected = {
      type: 'SET_CURRENT_LOCATION',
      location
    }

    const result = Actions.setCurrentLocation(location);

    expect(result).toEqual(expected)
  })
})