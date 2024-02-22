import "../styles/App.css";
import "../styles/ForecastDetails.css"
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
	const { city, country } = location;
	return (
		<div className="weather-app">
			<h1>Weather App</h1>
			<LocationDetails city={city} country={country} />
			<ForecastSummaries forecasts={forecasts} />
			<ForecastDetails className="forecast-details" forecast={forecasts[0]} />
		</div>
	);
}

export default App;
