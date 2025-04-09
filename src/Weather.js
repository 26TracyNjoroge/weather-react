import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";

function Weather(props) {
    const [weatherData, setweatherData] = useState({ ready: false});

    function handleResponse(response) {
        console.log(response.data.wind.speed)
       setweatherData({
        ready: true,
        city: response.data.city,
        date: "Wednesday 07:00",
        description: response.data.condition.description,
        icon: response.data.condition.icon_url,
        iconName: response.data.condition.icon,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity
       });
       
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city.."
                            className="form-control"
                            autoFocus={true}
                            />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <img src={weatherData.icon} alt={weatherData.iconName} />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Wind: {weatherData.wind}%</li>
                            <li>Humidity: {weatherData.humidity}km/hr</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
      
    const apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&umits=metric`;
    axios.get(apiUrl).then(handleResponse);


        return("Loading..")
    }

    
}

export default Weather;