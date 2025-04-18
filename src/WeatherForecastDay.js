import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temp = Math.round(props.data.temperature.maximum);
        return `${temp}°`
    }

    function minTemperature() {
        let temp = Math.round(props.data.temperature.minimum);
        return `${temp}°`
    }

    function day() {
        let date = new Date(props.data.time * 1000);

        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

        let day = days[date.getDay()];

        return day;

    }


    return (
        <div className="WeatherForecastDay">
             <div className="WeatherForecast-day">{day()}</div>
                    <WeatherIcon code={props.data.condition.icon} size={36}/>
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">
                            {maxTemperature()}
                        </span>
                        <span className="WeatherForecast-temperature-min">
                            {minTemperature()}
                        </span>
                    </div>
        </div>
    )
}