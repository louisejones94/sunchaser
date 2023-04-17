import { useState, useEffect } from "react";
import Forecast from "./Forecast";

export default function Place() {
    const [zipCode, setZipCode] = useState("");
    const [forecast, setForecast] = useState(null);
    
    // useEffect(function() {
    //     console.log("button clicked")
    // }, [zipCode])
    
    function handleChange(e) {
        e.preventDefault();
        let newZip = e.target.value;
        setZipCode(newZip);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&zip=${zipCode},us&appid=052f26926ae9784c2d677ca7bc5dec98`)
            .then((response) => response.json())
            .then((results) => {
                setForecast({
                    location: results.name
                    ,description: results.weather[0].description
                    ,temperature: Math.round(results.main.temp)
                }) 

            })
            .catch((error) => console.log("Error! ", error))
    }
    
    return (
        <div>
            <h1>Weather</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="zipcode">Please enter your zip code:</label>
                <input
                    name="zipcode"
                    type="text"
                    required
                    placeholder="Zip code"
                    value={zipCode}
                    onChange={handleChange}
                />
                <button type="submit">Get forecast</button>
                {forecast && <Forecast forecast={forecast}/>}
            </form>
        </div>
    )
}