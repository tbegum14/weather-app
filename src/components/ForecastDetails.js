import React from "react";

export default function ForecastDetails({forecast}) {
    const {date, temperature, humidity, wind} = forecast
    const formattedDate = new Date(date).toDateString()
    return <div className="forecast-details">
        <h2>{formattedDate}</h2>
        <p>Max temperature: {temperature.max}</p>
        <p>Min temperature: {temperature.min}</p>
        <p>Humidity: {humidity}</p>
        <p>Wind: {wind.speed}</p>
    </div>

}