import { getCampWeather } from '../getCampWeatherThunk';
import { setCampsList } from '../index';
import { campgroundCleaner } from '../../utilities/campgroundCleaner';

import { mockCamps } from '../__mocks__/mockCamps';

jest.mock('../../utilities/campgroundCleaner', () => ({
  campgroundCleaner: () => [1, 2, 3]
}));

describe('getCampWeather', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  })


  it('should dispatch setCampsList', async () => {
    const thunk = getCampWeather(mockCamps);
    const expected = campgroundCleaner(mockCamps);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setCampsList(expected))
  })
})