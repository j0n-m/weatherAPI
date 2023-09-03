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
      const response = await fetch(`${url}${forecastEndPoint}?key=${API_KEY}&q=${location}&days=3&aqi=yes&alerts=yes`, { mode: 'cors' });
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
  const extractTimeShort = function extractTimeShort(time) {
    const newDate = time.replaceAll('-', '/');
    return format(new Date(newDate), 'E, LLL. d');
  };
  function getIconSource(imgLink) {
    const imgArr = imgLink.split('');
    return (`http://${imgArr.slice(2).join('')}`);
  }
  const updateForecastCards = function updateForecastCards(forecastWeather) {
    const cardHeader = document.querySelectorAll('.smallCardHeader');
    const cardLogo = document.querySelectorAll('.smallCardLogo');
    const highTempValue = document.querySelectorAll('.hiTemp');
    const lowTempValue = document.querySelectorAll('.loTemp');
    const conditionTitle = document.querySelectorAll('.smallCardCondition');
    const rainChance = document.querySelectorAll('.smallCardRainChance');
    const humidity = document.querySelectorAll('.smallCardHumidity');
    const uvIndex = document.querySelectorAll('.smallCardUVIndex');
    const forecastDaysArray = [...forecastWeather.forecast.forecastday];
    forecastDaysArray.forEach((day, index) => {
      cardHeader[index].textContent = extractTimeShort(day.date);
      cardLogo[index].src = getIconSource(day.day.condition.icon);
      highTempValue[index].textContent = `${day.day[`maxtemp_${tempUnit}`]}° Hi`;
      lowTempValue[index].textContent = `/ ${day.day[`mintemp_${tempUnit}`]}° Lo`;
      conditionTitle[index].textContent = `${day.day.condition.text}`;
      rainChance[index].textContent = `Precip. ${day.day.daily_chance_of_rain}%`;
      humidity[index].textContent = `${day.day.avghumidity}%`;
      uvIndex[index].textContent = `${day.day.uv}`;
    });
    console.log(forecastWeather);
  };
  const updateCurrentWeatherCard = function updateCurrentWeatherCard(currentWeather) {
    const currentCard = document.querySelector('.currentCard');
    const forecastCard = document.querySelector('.forecastCard');
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
    const currentPressure = document.querySelector('.pressureValue');
    const currentRainChance = document.querySelector('.rainChanceValue');
    const currentWindGust = document.querySelector('.windGustValue');
    const weatherAlert = document.querySelector('.weatherAlert');
    const currentSunrise = document.querySelector('.sunriseValue');
    const currentSunset = document.querySelector('.sunsetValue');
    const currentMoonrise = document.querySelector('.moonriseValue');
    const currentMoonset = document.querySelector('.moonsetValue');
    const weatherAlerts = currentWeather.alerts.alert.length;

    contentDiv.replaceChildren(); // Remove the current card's contents
    contentDiv.appendChild(cardTemplate[0]); // appends the default card template to page, read to be overwritten
    contentDiv.appendChild(cardTemplate[1]);
    currentCard.classList.remove('hide');
    forecastCard.classList.remove('hide');
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
    currentWindGust.textContent = `${currentWeather.current.gust_mph} mph`;
    currentPressure.textContent = `${currentWeather.current.pressure_in} in`;
    currentRainChance.textContent = `${currentWeather.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    currentSunrise.textContent = `${currentWeather.forecast.forecastday[0].astro.sunrise}`;
    currentSunset.textContent = `${currentWeather.forecast.forecastday[0].astro.sunset}`;
    currentMoonrise.textContent = `${currentWeather.forecast.forecastday[0].astro.moonrise}`;
    currentMoonset.textContent = `${currentWeather.forecast.forecastday[0].astro.moonset}`;

    if (weatherAlerts) {
      weatherAlert.textContent = `${currentWeather.alerts.alert[0].headline}`;
    }
    updateForecastCards(currentWeather);
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
console.log('(NOTE) NEED TO ADD: \n*sunrise/sunset times');
screenController();
