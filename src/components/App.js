import "../styles/App.css";
import "../styles/ForecastDetails.css";
import { React, useEffect, useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "./getForecast";

function App() {
	const [forecasts, setForecasts] = useState([]);
	const [location, setLocation] = useState({ city: "", country: "" });
	const [selectedDate, setSelectedDate] = useState(0);

	const handleSelectedForecast = (date) => {
		setSelectedDate(date);
	};
	const selectedForecast = forecasts.find(
		(forecast) => forecast.date === selectedDate
	);
	const { city, country } = location;

	useEffect(() => {
		getForecast(setForecasts, setLocation, setSelectedDate);
	}, []);

	return (
		<div className="weather-app">
			<h1>Weather App</h1>
			<LocationDetails city={city} country={country} />
			<ForecastSummaries
				forecasts={forecasts}
				onForecastSelect={handleSelectedForecast}
			/>
			{selectedForecast && 
				<ForecastDetails className="forecast-details" forecast={selectedForecast} />
			}
		</div>
	);
}

export default App;
