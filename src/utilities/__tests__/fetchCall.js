/* eslint-disable */
import fetchCall from '../fetchCall';

describe('fetchCall', () => {
  let mockUrl;

  beforeEach(() => {
    mockUrl = ''
  })


  it('should call fetch w/ the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({ ok: true, json: () => Promise.resolve({ok: true}) })
    ))

    await fetchCall(mockUrl);
    expect (window.fetch).toHaveBeenCalledWith(mockUrl);
  })

  it('should return the response', async () => {
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({ ok: true, json: () => Promise.resolve('Promise resolved') })
    ))

    const result = await fetchCall(mockUrl);
    expect(result).toEqual('Promise resolved')
  })

  it('should throw an error if failed', async () => {
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({ ok: false })
    ))

    await expect(fetchCall(mockUrl)).rejects.toThrow()
  })
  
})