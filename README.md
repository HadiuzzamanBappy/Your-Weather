# Dynamic Weather App

A responsive and user-friendly weather application that displays real-time weather data using the OpenWeatherMap API. Users can search for any city's current weather and automatically see weather based on their current location on page load.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

* **Current Location Weather**: Automatically fetches and displays weather based on the user's geolocation.
* **City Weather Search**: Users can search weather by any city name worldwide.
* **Real-Time Data**: Displays current temperature, weather conditions, humidity, and wind speed.
* **Weather Icons**: Uses condition-based icons from OpenWeatherMap.
* **Error Handling**: Friendly messages for invalid city input or geolocation failure.
* **Responsive Design**: Clean, responsive layout that works on desktop and mobile.

---

## Technologies Used

* **HTML5** – Markup and structure
* **CSS3** – Styling and layout
* **JavaScript (ES6+)** – Dynamic behavior and API integration
* **OpenWeatherMap API** – To fetch live weather data

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (for API calls)

### Installation

1. **Clone the repository (or download ZIP):**
    ```bash
    git clone https://github.com/your-username/weather-app
    ```
    Or download the ZIP and extract it.

2. **Navigate to the project directory:**
    ```bash
    cd weather-app
    ```

3. **Add your OpenWeatherMap API key** to `script.js`:
    ```javascript
    const API_KEY = 'YOUR_API_KEY_HERE';
    ```

4. **Open `index.html`** in your browser to run the app.

---

## Usage

1. On page load, the app will try to detect your current location and show weather data.
2. You can manually type a city name (e.g., "London", "New York", "Dhaka") and press "Search".
3. The app will display:
   - City and country
   - Temperature in Celsius
   - Weather description and icon
   - Humidity and wind speed
4. If the city is not found or location access is denied, an error message will be shown.

---

## API Integration

This project uses the **OpenWeatherMap API**:

- **Website**: https://openweathermap.org/api
- You need to register for a free API key and insert it in `script.js`.

---

## Project Structure
currency-converter/
├── index.html        // Main HTML file
├── resources/        // Folder for images and other resources
│   ├── css/          // CSS files
│   ├── fonts/        // Font files
│   ├── img/          // Image files
│   ├── js/           // JavaScript files
│   └── vendor/       // Third-party libraries
└── README.md         // This file

---

## Contributing

Contributions are welcome! If you’d like to improve this app, follow the steps below:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

Your Name – [hbappy79@gmail.com](mailto:hbappy79@gmail.com)
