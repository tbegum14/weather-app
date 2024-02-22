import React from "react";
import iconData from '../data/iconData.json'


export default function ForecastSummary(props){
    const {key, date, temperature, description, icon } = props
    const weatherCode = `${icon.slice(0,1)}00`;
    const formattedDate= new Date(date).toDateString()
    return <div className="forecast-summary">
        <h3 className="forecast-summary_date">{formattedDate}</h3>
        <div className="forecast-summary_icon">
            <img src={iconData[weatherCode]} alt="icon" />
        </div>
        <h2 className="forecast-summary_temp">{temperature}<span>&#8451;</span></h2>
        <h2 className="forecast-summary_desc">{description}</h2>
        <p>More details</p>
    </div>
}