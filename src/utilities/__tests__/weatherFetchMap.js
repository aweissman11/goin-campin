import { weatherFetchMap } from '../weatherFetchMap';

describe('weatherFetchMap', () => {
  it('should ', async () => {
    const mockCamps = [
      {
        name: 'becket',
        attributes: {
          latitude: 34,
          longitude: 45
        }
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({ ok: true, json: () => Promise.resolve('Forecast Object') })
    ));

    const expected = [{"attributes": {"latitude": 34, "longitude": 45}, "forecast": "Forecast Object", "name": "becket"}]
    const result = await weatherFetchMap(mockCamps);

    expect(result).toEqual(expected)
  })
  
})