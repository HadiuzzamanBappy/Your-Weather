const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");
const errorMessage = document.getElementById("error-message");

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
  cityInput.value = name; // Optional: auto-fill city input
  const html = `
      <h2>${name}, ${sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${
        weather[0].icon
      }@2x.png" alt="${weather[0].main}" />
      <div class="details">
      <p><strong>${Math.round(main.temp)}°C</strong> - ${
    weather[0].description
  }</p>
      <p>Humidity: ${main.humidity}%</p>
      <p>Wind: ${wind.speed} m/s</p>
      </div>
    `;
  weatherInfo.innerHTML = html;
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
