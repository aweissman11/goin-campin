export const campgroundCleaner = (camps) => {
  const cleanCamps = camps.map( camp => {
    return {
      name: camp.attributes.facilityName.toUpperCase(),
      photo: `http://www.reserveamerica.com${camp.attributes.faciltyPhoto}`,
      lat: camp.attributes.latitude,
      long: camp.attributes.longitude,
      wAmps: camp.attributes.sitesWithAmps,
      wPets: camp.attributes.sitesWithPetsAllowed,
      wSewer: camp.attributes.sitesWithSewerHookup,
      wHose: camp.attributes.sitesWithWaterHookup,
      wWater: camp.attributes.sitesWithWaterfront,
      id: camp.attributes.facilityID,
      forecast: cleanForecast(camp.forecast.list)
    }
  })
  return cleanCamps;
}

export const cleanForecast = (forecastList) => {
  const fortyWeatherChecks = forecastList.map( check => {
    return {
      date: check.dt_txt,
      humidity: check.main.humidity,
      temp: check.main.temp,
      max: check.main.temp_max,
      min: check.main.temp_min,
      descrip: check.weather[0].description,
      summary: check.weather[0].main,
      icon: `http://openweathermap.org/img/w/${check.weather[0].icon}.png`,
      windSpeed: check.wind.speed
    }
  })
  return fortyWeatherChecks
}