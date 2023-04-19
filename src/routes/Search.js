import { useState, useEffect } from "react";
// import Forecast from "../components/Forecast";
import {sortByKey} from "../helpers/sort.js";
import DropDown from "../components/DropDown";
import DatePicker from "../components/DatePicker";
import SunnyPlacesList from "../components/SunnyPlacesList";

export default function Search({addPlaceToShortlist, removePlaceFromShortlist}) {
    const [forecasts, setForecasts] = useState(null);
    const [locationOptions, setLocationOptions] = useState(null);
    const [locationChoice, setLocationChoice] = useState("");
    const [dateChoice, setDateChoice] = useState(new Date().toJSON().slice(0, 10));
    const [forecastParameters, setForecastParameters] = useState(null);
    

    function handleSelectChange(e) {
        let newUserLocation = e.target.value;
        // Maximum call stack error, so first check the locationChoice has changed before updating the State
        if (newUserLocation !== locationChoice) {
            setLocationChoice(newUserLocation);
        }
    }
    
    const handleDateChange = (e) => {
        let newDate = e.target.value;
        if (newDate !== dateChoice) {
            setDateChoice(e.target.value);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        // Get the forecast for the selected location


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
            })
            .catch((error) => console.log("Error! ", error))
    // Only run one time        
    }, []);

    // Function to get the full list of weather forecasts for all locations in the UK
    useEffect(function() {
        fetch(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/all?res=daily&key=b480fa2d-ce6d-41ba-aaed-aaa13d81ae62`)
            .then((response) => response.json())
            .then((results) => {
                console.log('Got all the forecasts!')
                // Split the API response into parameters and forecasts
                let parameters = results.SiteRep.Wx.Param;
                setForecastParameters(parameters);
                let forecasts = results.SiteRep.DV.Location;
                setForecasts(forecasts);
            })
            .catch((error) => console.log("Error! ", error))
    }, []);
    
    return (
        <div>
            <h1>Let's chase the sun!</h1>
            <h2>First things first, let's see if there's sun where you are...</h2>
            <form onSubmit={handleSubmit}>
                <DropDown locationOptions={locationOptions} locationChoice={locationChoice} handleSelectChange={handleSelectChange} />
                <DatePicker dateChoice={dateChoice} handleDateChange={handleDateChange} />
                <button type="submit">Is it sunny near me?</button>
            </form>
            {/* Show a foreceast for the selection location */}
            {/* {forecasts && <Forecast forecasts={forecasts} placeID={locationChoice}/>} */}
            {/* If it's sunny, show a happy message. */}
            {/* If it's not sunny, show the list of sunny places */}
            
            {forecasts && <SunnyPlacesList forecasts={forecasts} dateChoice={dateChoice} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} />}
        </div>
    )
}