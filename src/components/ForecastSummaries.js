import React from "react";
import ForecastSummary from "./ForecastSummary";
import '../styles/ForecastSummaries.css'

export default function ForecastSummaries({ forecasts, onForecastSelect }) {
	return (
		<div className="forecast-summaries">
			{forecasts.map((day) => (
				<ForecastSummary
                    key={day.date}
					date={day.date}
					temperature={day.temperature.max}
					description={day.description}
					icon={day.icon.toString()}
					onSelect={onForecastSelect}
				/>
			))}
			;
		</div>
	);
}
