/* eslint-disable */
import campgroundsFetch from '../campgroundsFetch';

describe('campgroundsFetch', () => {
  let mockUrl;

  beforeEach(() => {
    mockUrl = ''
  })


  it('should call fetch w/ the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({ ok: true, text: () => Promise.resolve('Promise resolved') })
    ))

    await campgroundsFetch(mockUrl);
    expect (window.fetch).toHaveBeenCalledWith(`https://cors-anywhere.herokuapp.com/`);
  })

  it('should return the response', async () => {
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({ ok: true, text: () => Promise.resolve('Promise resolved') })
    ))

    const result = await campgroundsFetch(mockUrl);
    expect(result).toEqual('Promise resolved')
  })

  it('should throw an error if failed', async () => {
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({ ok: false })
    ))

    await expect(campgroundsFetch(mockUrl)).rejects.toThrow()
  })
  
})