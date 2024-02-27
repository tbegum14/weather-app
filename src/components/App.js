import "../styles/App.css";
import "../styles/ForecastDetails.css";
import { React, useEffect, useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";

function App() {
	const [forecasts, setForecasts] = useState([]);
	const [location, setLocation] = useState({ city: "", country: "" });
	const [selectedDate, setSelectedDate] = useState(0);
	const [searchText, setSearchText] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSelectedForecast = (date) => {
		setSelectedDate(date);
	};
	const selectedForecast = forecasts.find(
		(forecast) => forecast.date === selectedDate
	);
	const { city, country } = location;

	const handleCitySearch = () => {
		getForecast(
			setErrorMessage,
			searchText,
			setForecasts,
			setLocation,
			setSelectedDate
		);
	};

	useEffect(() => {
		getForecast(
			setErrorMessage,
			searchText,
			setForecasts,
			setLocation,
			setSelectedDate
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="weather-app">
			<h1>Weather App</h1>
			<LocationDetails city={city} country={country} errorMessage={errorMessage} />
			<SearchForm
				searchText={searchText}
				setSearchText={setSearchText}
				onSubmit={handleCitySearch}
			/>
			{!errorMessage && (
				<>
					<ForecastSummaries
						forecasts={forecasts}
						onForecastSelect={handleSelectedForecast}
					/>
					{selectedForecast && (
						<ForecastDetails
							className="forecast-details"
							forecast={selectedForecast}
						/>
					)}
				</>
			)}
		</div>
	);
}

export default App;
