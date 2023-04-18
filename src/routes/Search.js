import { useState, useEffect } from "react";
import Forecast from "../components/Forecast";
import {sortByKey} from "../helpers/sort.js";
import DropDown from "../components/DropDown";
import DatePicker from "../components/DatePicker";

export default function Search() {
    const [zipCode, setZipCode] = useState("");
    const [forecast, setForecast] = useState(null);
    const [locationOptions, setLocationOptions] = useState(null);
    const [locationChoice, setLocationChoice] = useState("");
    const [dateChoice, setDateChoice] = useState(new Date().toJSON().slice(0, 10))
    
    function handleSelectChange(e) {
        e.preventDefault();
        let newUserLocation = e.target.value;
        // Maximum call stack error, so first check the locationChoice has changed before updating the State
        if (newUserLocation !== locationChoice) {
            setLocationChoice(newUserLocation);
        }
    }

    const handleDateChange = (e) => {
        e.preventDefault();
        let newDate = e.target.value;
        if (newDate !== dateChoice) {
            setDateChoice(e.target.value);
        }
    };

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

    // Function to get the list of locations to feed the dropdown options
    useEffect(function() {
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=b480fa2d-ce6d-41ba-aaed-aaa13d81ae62`)
            .then((response) => response.json())
            .then((results) => {
                // Store all the locations in an array to use in the dropdown
                const locations = results.Locations.Location.map((item) => ({label: item.name, value:item.id}));
                // Alphabetical order
                sortByKey(locations, "label");
                setLocationOptions(locations);
                console.log(locations);
            })
            .catch((error) => console.log("Error! ", error))
    // Only run one time        
    }, []);

    // useEffect(function() {
    //     fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/all?res=daily&key=b480fa2d-ce6d-41ba-aaed-aaa13d81ae62`)
    //         .then((response) => response.json())
    //         .then((results) => {
    //             console.log('Got all the forecasts!')
    //             // Organise the hot mess of the API response lol

    //             // set in State the location, date, lat/long, forecast

    //             // setForecast({
    //             //     location: results.name
    //             //     ,description: results.weather[0].description
    //             //     ,temperature: Math.round(results.main.temp)
    //             // }) 
    //         })
    //         .catch((error) => console.log("Error! ", error))
    // }, []);
    
    return (
        <div>
            <h1>Where are you?</h1>
            <form onSubmit={handleSubmit}>
                <DropDown locationOptions={locationOptions} locationChoice={locationChoice} handleSelectChange={handleSelectChange} />
                <DatePicker dateChoice={dateChoice} handleDateChange={handleDateChange} />
                <button type="submit">Get forecast</button>
                {forecast && <Forecast forecast={forecast}/>}
            </form>
        </div>
    )
}