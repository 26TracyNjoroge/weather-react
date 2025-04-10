import React from "react";
import FormattedDate from "./FormattedDate";

function WeatherInfo(props) {
    return (
        <div>
            <h1>{props.data.city}</h1>
                <ul>
                    <li><FormattedDate date={props.data.date}/></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <img src={props.data.icon} alt={props.data.iconName} />
                        <span className="temperature">{Math.round(props.data.temperature)}</span>
                        <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Wind: {props.data.wind}%</li>
                            <li>Humidity: {props.data.humidity}km/hr</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}
export default WeatherInfo;