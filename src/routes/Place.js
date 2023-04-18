import { useState, useEffect } from "react";
import Forecast from "../components/Forecast";
import {sortByKey} from "../helpers/sort.js";

export default function Place() {
    const [zipCode, setZipCode] = useState("");
    const [forecast, setForecast] = useState(null);
    const [locationChoices, setLocationChoices] = useState(null);
    const [userLocation, setUserLocation] = useState("");
    
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

    useEffect(function() {
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=b480fa2d-ce6d-41ba-aaed-aaa13d81ae62`)
            .then((response) => response.json())
            .then((results) => {
                const locations = results.Locations.Location.map((item) => ({label: item.name, value:item.id}));
                sortByKey(locations, "label");
                setLocationChoices(locations);
                console.log(locations);
            })
            .catch((error) => console.log("Error! ", error))
      }, []);

    useEffect(function() {
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/all?res=daily&key=b480fa2d-ce6d-41ba-aaed-aaa13d81ae62`)
            .then((response) => response.json())
            .then((results) => {
                console.log('Got all the forecasts!')
                // Organise the hot mess of the API response lol

                // set in State the location, date, lat/long, forecase

                // setForecast({
                //     location: results.name
                //     ,description: results.weather[0].description
                //     ,temperature: Math.round(results.main.temp)
                // }) 
            })
            .catch((error) => console.log("Error! ", error))
    }, []);
    
    return (
        <div>
            <h1>Where are you?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Please choose your current location:
                    <input
                        name="location"
                        type="text"
                        required
                        placeholder="Please select a location"
                        value={userLocation}
                    />
                </label>
                <button type="submit">Get forecast</button>
                {forecast && <Forecast forecast={forecast}/>}
            </form>
        </div>
    )
}