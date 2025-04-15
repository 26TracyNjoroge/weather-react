import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "CLEAR_DAY",
    "few-clouds-night": "CLEAR_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "mist-day": "FOG",
    "mist-night": "FOG",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN"
};
    return ( 
        <ReactAnimatedWeather
            icon={codeMapping[props.code]}
            color="black"
            size="54"
            animate={true}
      />
    )
}