import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="d-flex justify-content-between">
                    <div>
                        <h1>{props.data.city}</h1>
                        <FormattedDate date={props.data.date}/>
                        <div className="WeatherInfo-icon">
                            <WeatherIcon code={props.data.icon} alt={props.data.iconName} size={62}/>
                            <div className="text-capitalize">{props.data.description}</div>
                        </div>
                    </div>
                    <div className="WeatherInfo-description">
                        <div className="WeatherInfo-temp">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                        <div>Wind: {props.data.wind}%</div>
                        <div>Humidity: {props.data.humidity}km/hr</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WeatherInfo;