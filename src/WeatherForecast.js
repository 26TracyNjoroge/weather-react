import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from 'axios';


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setforecastData] = useState(null);

    useEffect(() => {
        setLoaded(false)
    }, [props.coordinates]);

    function handleResponse(response) {
        setforecastData(response.data.daily);
        setLoaded(true);
    }

    
    if(loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecastData.map(function(dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast}/>
                                </div>
                            );
                        } else {
                            return null;
                        }

                    })}
                    
                </div>
            </div>
        )
    } else {
        let apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`

        axios.get(apiUrl).then(handleResponse);

    }

   
}