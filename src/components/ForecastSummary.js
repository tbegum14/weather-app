import React from "react";
import iconData from '../data/iconData.json'


export default function ForecastSummary(props){
    const {date, temperature, description, icon, onSelect } = props
    const weatherCode = `${icon.slice(0,1)}00`;
    const formattedDate= new Date(date).toDateString()
    return <div className="forecast-summary" data-testid="forecast-summary">
        <h3 className="forecast-summary_date">{formattedDate}</h3>
        <div className="forecast-summary_icon" data-testid="forecast-icon" >
            <img src={iconData[weatherCode]} alt="icon" />
        </div>
        <h2 className="forecast-summary_temperature">{temperature}<span>&#8451;</span></h2>
        <h2 className="forecast-summary_description">{description}</h2>
        <button type="button" onClick={()=>onSelect(date)}>More details</button>
    </div>
}