export const weatherFetchMap = async (camps) => {
  const weatherCamps = await camps.map( async camp => {
    // commented out to stop making fetch Calls
    // const currentWeather = await fetchCall(urls.currentWeatherUrl([camp.latitude, camp.longitude]))
    const currentWeather = { time: 45345345, condition: 'sunny' }
    return await { ...camp, currentWeather }
  })
  return Promise.all(weatherCamps);
}