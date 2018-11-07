import { getCampWeather } from '../getCampWeatherThunk';
import { setCampsList, hasErrored } from '../index';
import { campgroundCleaner } from '../../utilities/campgroundCleaner';
import { weatherFetchMap } from '../../utilities/weatherFetchMap';

import { mockCamps } from '../__mocks__/mockCamps';

jest.mock('../../utilities/weatherFetchMap', () => ({
  weatherFetchMap: () => ({
    error: {
      message: 'error message'
    }
  })
}));

describe('getCampWeather', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  })


  it('should dispatch an error if it catches one', async () => {
    const mockMessage = 'camps.map is not a function'
    
    window.fetch = jest.fn().mockImplementation(() => ({
      error: {
        message: mockMessage
      }
    }))

    const thunk = getCampWeather(mockCamps);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(mockMessage, true))

  })
  

})