import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from 'axios';
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

function Weather(props) {
    const [weatherData, setweatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        // console.log(response.data)
       setweatherData({
        ready: true,
        coordinates: response.data.coordinates,
        city: response.data.city,
        date: new Date(response.data.time * 1000),
        description: response.data.condition.description,
        icon: response.data.condition.icon,
        iconName: response.data.condition.icon,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity
       });
    }

    function search() {
        const apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&umits=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search()
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city.."
                            className="form-control"
                            autoFocus={true}
                            onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn w-100 search-button" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
        )
    } else {
        search();
        return("Loading..")
    }

    
}

export default Weather;