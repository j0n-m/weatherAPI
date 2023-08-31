import './style.css';

const API_KEY = '89d2133b42d54c8fa95201905232808';

const getCurrentWeather = async function getCurrentWeather(location) {
  const url = 'http://api.weatherapi.com/v1';
  const currentEndPoint = '/current.json';
  const forecastEndPoint = '/forecast.json';

  try {
    const response = await fetch(`${url}${currentEndPoint}?key=${API_KEY}&q=${location}`);
    const currentWeatherData = await response.json();
    return currentWeatherData;
  } catch (err) {
    console.log(err);
  }
};

const handleCurrentWeatherRequest = async function handleCurrentWeatherRequest(location = 'kansas city') {
  const weatherData = await getCurrentWeather(location);
  console.log(weatherData);
};
handleCurrentWeatherRequest('64153');

// const getForecastWeather
// const handleForecastWeather

/*
-All user can do is enter location and get data from that location;
-I control the what data can be returned (forecast and current) as long as I have the location string
-A DOMController module
-A weatherController module
 -important to create separate functions that call the forecast and current weather data independantly
 -maybe one handler that calls both functions with a Promise.all
 -then to extract data from the promise.all array, use destructuring -> [a,b] = promise.all then return {a,b}
*/
