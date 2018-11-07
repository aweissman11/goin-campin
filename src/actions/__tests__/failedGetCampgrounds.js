import { getCampsList } from '../getCampgroundsThunk';
import { setCampsList, hasErrored } from '../index';

import { mockCamps } from '../__mocks__/mockCamps';

describe('getCampsList', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  })


  it('should dispatch an error if it catches one', async () => {
    const mockMessage = 'camps.map is not a function'
    
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({
        ok: false,
        error: {
          message: mockMessage
        }
      })
    ))

    const thunk = getCampsList(mockCamps);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('', true))

  })
  

})