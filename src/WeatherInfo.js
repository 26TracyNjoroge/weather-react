import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                        <div className="d-flex">
                                <WeatherIcon code={props.data.icon} alt={props.data.iconName} size={54}/>
                                <WeatherTemperature celsius={props.data.temperature} />
                        </div>
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