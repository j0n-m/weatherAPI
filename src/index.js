import './style.css';

const API_KEY = '89d2133b42d54c8fa95201905232808';

const getCurrentWeather = async function getCurrentWeather(location) {
  const url = 'http://api.weatherapi.com/v1';
  const currentEndPoint = '/current.json';

  try {
    const response = await fetch(`${url}${currentEndPoint}?key=${API_KEY}&q=${location}`);
    const currentWeatherData = await response.json();
    return currentWeatherData;
  } catch (err) {
    console.log(err);
  }
};

const handleCurrentWeatherRequest = async function handleCurrentWeatherRequest(location = 'kansas city') {
  const weatherData = await getForecastWeather(location);
  console.log(weatherData);
};
// handleCurrentWeatherRequest('64153');

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

const weatherController = function weatherController() {
  const getForecastWeather = async function getForecastWeather(location) {
    const url = 'http://api.weatherapi.com/v1';
    const forecastEndPoint = '/forecast.json';
    try {
      const response = await fetch(`${url}${forecastEndPoint}?key=${API_KEY}&q=${location}&days=3&aqi=yes&alerts=yes`);
      const forecastWeatherData = await response.json();
      return forecastWeatherData;
    } catch (err) {
      console.log(err);
    }
  };

  return { getForecastWeather };
};

const screenController = async function screenController() {
  console.log('running the screenController');
  const weatherControl = weatherController();

  // DOM ELEMENTS
  const locationSearchBtn = document.querySelector('.searchBtn');
  const searchForm = document.querySelector('#locationForm');
  const searchTextBox = document.querySelector('.searchBox');
  const tempUnitsBtn = document.querySelector('.tempUnits');

  // FUNCTION EXPRESSIONS
  const displayWeatherData = function displayWeatherData(weather) {
    console.log(weather);
  };
  const searchBtnHandler = function searchBtnHandler() {
    if (searchTextBox.validity.valueMissing) {
      console.log('invalid');
      searchTextBox.setCustomValidity('Enter a City or Zip Code');
    } else {
      searchTextBox.setCustomValidity('');
    }
  };
  const searchFormHandler = async function searchFormHandler(e) {
    e.preventDefault();
    const userLocation = searchTextBox.value;
    console.log('Getting weather information..');
    try {
      const forecastData = await weatherControl.getForecastWeather(userLocation);
      displayWeatherData(forecastData);
    } catch (err) {
      console.log(err);
    }
  };

  // DOM EVENT LISTENERS
  locationSearchBtn.addEventListener('click', searchBtnHandler);
  searchForm.addEventListener('submit', searchFormHandler);
};

screenController();
