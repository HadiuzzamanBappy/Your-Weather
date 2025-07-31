const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");
const errorMessage = document.getElementById("error-message");

const weatherImage = document.getElementById("weather-img");
const tempValue = document.getElementById("temp-value");
const feelsLike = document.getElementById("feels-like");
const cityValMain = document.getElementById("city-val-main");
const cloudValue = document.getElementById("cloud-val");
const cloudType = document.getElementById("cloud-type");
const minVal = document.getElementById("min-val");
const maxVal = document.getElementById("max-val");

const humidVal = document.getElementById("humid-val");
const airPressureVal = document.getElementById("air-pressure-val");
const visibilityVal = document.getElementById("visibility-val");
const airSpeedVal = document.getElementById("air-speed-val");
const airDirectionVal = document.getElementById("air-direction-val");

const cityVal = document.getElementById("city-val");
const sunriseVal = document.getElementById("sunrise");
const sunsetVal = document.getElementById("sunset");

const timezoneVal = document.getElementById("zone-val");
const dateVal = document.getElementById("date-val");
const timeVal = document.getElementById("time-val");


const API_KEY = "bcb44f061755696992d5dda0720dad41";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  weatherInfo.classList.remove("active");
  errorMessage.classList.remove("active");
  errorMessage.textContent = "";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.add("active");
  }
});

// Display the weather data
function displayWeather(data) {
  const { name, sys, main, weather, wind } = data;

  cityInput.value = name;

  weatherImage.src = `https://openweathermap.org/img/wn/${weather[0].icon
    }@2x.png`;
  tempValue.innerHTML = `${Math.round(main.temp)}<span class="text-caption">°C</span>`;
  feelsLike.innerText = `Feels like ${Math.round(main.feels_like)}°C`;
  cityValMain.innerText = `${name}, ${sys.country}`;
  cloudType.innerText = `${weather[0].description}`;
  cloudValue.innerText = `${data.clouds.all}% Clouds`;
  minVal.innerText = `${Math.round(main.temp_min)}°C`;
  maxVal.innerText = `${Math.round(main.temp_max)}°C`;

  humidVal.innerText = `${main.humidity}%`;
  airPressureVal.innerText = `${main.pressure} hPa`;
  visibilityVal.innerText = `${data.visibility / 1000} km`;
  airSpeedVal.innerText = `${wind.speed} m/s`;
  airDirectionVal.innerText = `${wind.deg}°`;

  cityVal.innerText = `${name}, ${sys.country}`;
  sunriseVal.innerText = `at ${new Date(sys.sunrise * 1000).toLocaleTimeString()}`;
  sunsetVal.innerText = `at ${new Date(sys.sunset * 1000).toLocaleTimeString()}`;

  timezoneVal.innerText = `UTC${(data.timezone / 3600 >= 0 ? '+' : '')}${data.timezone / 3600}h`;
  dateVal.innerText = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  // Update time every second
  const updateTime = () => {
    timeVal.innerText = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };
  updateTime();
  setInterval(updateTime, 1000);

  weatherInfo.classList.add("active");
  errorMessage.classList.remove("active");
}

// Load weather for current location on page load
window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation);
  } else {
    errorMessage.textContent = "Geolocation is not supported by your browser.";
    errorMessage.classList.add("active");
  }
});

function successLocation(position) {
  const { latitude, longitude } = position.coords;
  getWeatherByCoords(latitude, longitude);
}

function errorLocation() {
  errorMessage.textContent = "Unable to retrieve your location.";
  errorMessage.classList.add("active");
}

async function getWeatherByCoords(lat, lon) {
  weatherInfo.classList.remove("active");
  errorMessage.textContent = "";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.classList.add("active");
  }
}
