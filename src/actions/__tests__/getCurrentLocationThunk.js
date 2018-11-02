/* eslint-disable */
import { getCurrentLocation } from '../getCurrentLocationThunk';
import { setCurrentLocation } from '../index';

// jest.mock('../movieListThunk.js')

describe('getCurrentLocation', () => {
  let mockDispatch;
  const mockLocation = [3, 4];

  beforeEach(()=> {
    mockDispatch = jest.fn()
  })

  it('calls dispatch with setCurrentLocation(location)', () => {
    const thunk = getCurrentLocation(mockLocation)
    
    thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalled()
  })
})

  // it.skip('should dispatch hasErrored(true) if the response is not ok', async () => {
  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     ok: false
  //   }))

  //   const fakeMovies = {title: 'Back To The Future'}

  //   const thunk = getCurrentLocation(null)

  //   await thunk(mockDispatch)

  //   expect(mockDispatch).toHaveBeenCalledWith(setHasErrored(true))
  //   expect(mockDispatch).not.toHaveBeenCalledWith(isLoading(false))
  // })

  // it('should dispatch getCurrentLocation if the response is ok', async () => {
  //   const fakeMovies = {title: 'Back To The Future'}

  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     ok: true,
  //      json: () => Promise.resolve({
  //       title: 'Back To The Future'
  //     })
  //   }))

  //   const thunk = getCurrentLocation()

  //   await thunk(mockDispatch)

  //   expect(mockDispatch).toHaveBeenCalledWith(setMovieList(fakeMovies))
  // })