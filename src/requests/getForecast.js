import axios from "axios";

const getForecast = (
    setErrorMessage,
	searchText,
	setForecasts,
	setLocation,
	setSelectedDate
) => {
	let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

	if (searchText) {
		endpoint += `?city=${searchText}`;
	}

	return axios
		.get(endpoint)
		.then((response) => {
			setSelectedDate(response.data.forecasts[0].date);
			setForecasts(response.data.forecasts);
			setLocation(response.data.location);
		})
		.catch((error) => {
			const { status } = error.response;
			if (status === 404) {
                setErrorMessage("Location is not valid")
				console.error("Location is not valid", error);
			}
			if (status === 500) {
                setErrorMessage("Server Error, try again")
				console.error("Server error", error);
			}
		});
};

export default getForecast;
