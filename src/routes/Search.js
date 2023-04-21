import { useState, useEffect } from "react";
// import Forecast from "../components/Forecast";
import {sortByKey} from "../helpers/sort.js";
import DropDown from "../components/DropDown";
import DatePicker from "../components/DatePicker";
import SunnyPlacesList from "../components/SunnyPlacesList";
import SunnyPlaceCard from "../components/SunnyPlaceCard.js";
import "../css/Search.css";

export default function Search({addPlaceToShortlist, selectedIDs, handleSelectClick, clearSelectedIDs, handleSelectAll, allSelected, clearSelectAll}) {
    const [forecasts, setForecasts] = useState(null);
    const [locationOptions, setLocationOptions] = useState(null);
    const [locationChoice, setLocationChoice] = useState("");
    const [dateChoice, setDateChoice] = useState(new Date().toJSON().slice(0, 10));
    const [forecastParameters, setForecastParameters] = useState(null);    
    const [showList, setShowList] = useState(false);

    function handleSelectChange(e) {
        let newUserLocation = e.target.value;
        // Maximum call stack error, so first check the locationChoice has changed before updating the State
        if (newUserLocation !== locationChoice) {
            console.log(newUserLocation);
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
        console.log("clicked");
        setShowList(true);
        // Get the forecast for the selected location ---------------------- TODO
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
                let newForecasts = results.SiteRep.DV.Location;
                setForecasts(newForecasts);
            })
            .catch((error) => console.log("Error! ", error))
    // Only run one time
    }, []);
    
    return (
        <div className="Search">
            <div className="WideCard"> 
                <h1>Let's chase the sun!</h1>
            </div>
            <br />
            <div className="WideCard"> 
                <h2>Is it sunny near me?</h2>
                <form className="Form" onSubmit={handleSubmit}>
                    <DropDown locationOptions={locationOptions} locationChoice={locationChoice} handleSelectChange={handleSelectChange} />
                    <DatePicker dateChoice={dateChoice} handleDateChange={handleDateChange} />
                    {/* Show a foreceast for the selection location */}
                    {forecasts && locationChoice && <SunnyPlaceCard place={[...forecasts].filter((item) => item.i === locationChoice)[0]} key="userLocation" listType="user-location" addPlaceToShortlist={addPlaceToShortlist} handleSelectClick={handleSelectClick} selectedIDs={selectedIDs} clearSelectedIDs={clearSelectedIDs} allSelected={allSelected} sunnyList={[...forecasts].filter((item) => item.i === locationChoice)} clearSelectAll={clearSelectAll}/> } 
                    {locationChoice && <button className="SubmitButton" type="submit">Where is the sun?</button>}
                </form>
            </div>
            <div className="WideCard">
                {forecasts && showList && <SunnyPlacesList forecasts={forecasts} dateChoice={dateChoice} addPlaceToShortlist={addPlaceToShortlist} handleSelectClick={handleSelectClick} selectedIDs={selectedIDs} clearSelectedIDs={clearSelectedIDs} handleSelectAll={handleSelectAll} allSelected={allSelected} clearSelectAll={clearSelectAll} />}
            </div>
        </div>
    )
}