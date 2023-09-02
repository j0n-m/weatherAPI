import './style.css';
import { formatDistance, format } from 'date-fns';
import showError from './error';

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
      if (!response.ok) {
        throw new Error('Invalid Location');
      }
      const forecastWeatherData = await response.json();
      return forecastWeatherData;
    } catch (err) {
      console.log('1:', err);
      showError(err);
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
  let tempUnit = tempUnitsBtn.dataset.temp;
  const contentDiv = document.querySelector('.content');
  const cardTemplate = [...contentDiv.children];

  // FUNCTION EXPRESSIONS
  const displayWeatherData = function displayWeatherData(weather) {
    console.log('displaying weather', weather);
  };
  const extractTime = function extractTime(time) {
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
    };
    return new Date(time).toLocaleDateString('en-US', options);
  };
  function getIconSource(imgLink) {
    const imgArr = imgLink.split('');
    return (`http://${imgArr.slice(2).join('')}`);
  }
  const updateCurrentWeatherCard = function updateCurrentWeatherCard(currentWeather) {
    const currentCard = document.querySelector('.currentCard');
    const currentTempLabel = document.querySelector('.current-temp-label');
    const currentCity = document.querySelector('.current-city-label');
    const currentConditions = document.querySelector('.current-conditions-label');
    const currentRealFeel = document.querySelector('.current-realfeel-label');
    const currentTimeLabel = document.querySelector('.current-time-label');
    const currentWeatherLogo = document.querySelector('#weatherLogo');
    const currentWind = document.querySelector('.current-wind-label');
    const currentUVIndex = document.querySelector('.uvIndexValue');
    const currentHumidity = document.querySelector('.humidityValue');
    const currentVisibility = document.querySelector('.visibilityValue');

    contentDiv.replaceChildren(); // Remove the current card's contents
    contentDiv.appendChild(cardTemplate[0]); // appends the default card template to page, read to be overwritten
    currentCard.classList.remove('hide');
    currentTempLabel.textContent = `${currentWeather.current[`temp_${tempUnit}`]}°${tempUnit.toUpperCase()}`;
    currentCity.textContent = `Current - ${currentWeather.location.name}, ${currentWeather.location.region}, ${currentWeather.location.country}`;
    currentConditions.textContent = `${currentWeather.current.condition.text}`;
    currentRealFeel.textContent = `${currentWeather.current[`feelslike_${tempUnit}`]}°${tempUnit.toUpperCase()}`;
    currentTimeLabel.textContent = extractTime(currentWeather.current.last_updated);
    currentWind.textContent = `${currentWeather.current.wind_dir} ${currentWeather.current.wind_mph} mph`;
    currentWeatherLogo.src = getIconSource(currentWeather.current.condition.icon);
    currentUVIndex.textContent = `${currentWeather.current.uv}`;
    currentHumidity.textContent = `${currentWeather.current.humidity}%`;
    currentVisibility.textContent = `${currentWeather.current.vis_miles} mi`;
  };
  const toggleTempUnit = function toggleTempUnit() {
    switch (tempUnitsBtn.dataset.temp) {
      case 'f':
        tempUnitsBtn.dataset.temp = 'c';
        tempUnitsBtn.textContent = '°C';
        break;
      case 'c':
        tempUnitsBtn.dataset.temp = 'f';
        tempUnitsBtn.textContent = '°F';
        break;
      default:
        break;
    }
    tempUnit = tempUnitsBtn.dataset.temp;
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
      if (!forecastData) {
        return;
      }
      displayWeatherData(forecastData);
      updateCurrentWeatherCard(forecastData);
    } catch (err) {
      console.log('Error2', err);
    }
  };

  // DOM EVENT LISTENERS
  locationSearchBtn.addEventListener('click', searchBtnHandler);
  searchForm.addEventListener('submit', searchFormHandler);
  tempUnitsBtn.addEventListener('click', toggleTempUnit);
};
console.log('(NOTE) NEED TO ADD: \n*3-day forecast \n*sunrise/sunset times');
screenController();
