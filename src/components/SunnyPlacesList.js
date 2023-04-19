import SunnyPlaceCard from "./SunnyPlaceCard";
import Checkbox from "./Checkbox";
import {useState, useEffect, Button} from "react";
import ButtonGroup from "./ButtonGroup";

export default function SunnyPlacesList({forecasts, dateChoice, addPlaceToShortlist, removePlaceFromShortlist, shortlist, handleSelectClick, selectedIDs, clearSelectedIDs}) {

    let listType = "sunny-place";
    const [sunnyPlaces, setSunnyPlaces] = useState(null);
    
    useEffect(function() {
        let sunnyForecasts = [...forecasts].filter((item) => 
        // The date equals the chosen date
            // Currently limited to today only
            item.Period[0].value === (dateChoice + 'Z')
            // The weather is a sunny day
            && item.Period[0].Rep[0].W === "1"
            // There is zero percent chance of precipitation in the daytime
            && item.Period[0].Rep[0].PPd === "0"
            // There is zero percent chance of precipitation in the nighttime
            && item.Period[0].Rep[1].PPn === "0"
        );

        let newSunnyPlaces = 
        // // sort by least chance of precipitation
        // sunnyForecasts.sort((a,b)=>Number(a.Period[0].Rep[0].PPd)-Number(b.Period[0].Rep[0].PPd)) 
        // sort by hottest first
        sunnyForecasts.sort((a,b)=>Number(b.Period[0].Rep[0].Dm)-Number(a.Period[0].Rep[0].Dm)) 
        .slice(0,10)
        .map((item, index) => <SunnyPlaceCard place={item} key={index} listType={listType} shortlist={shortlist} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} handleSelectClick={handleSelectClick} selectedIDs={selectedIDs} clearSelectedIDs={clearSelectedIDs} />);

        setSunnyPlaces(newSunnyPlaces);

        }, [forecasts, dateChoice, addPlaceToShortlist, removePlaceFromShortlist, shortlist, handleSelectClick, selectedIDs, clearSelectedIDs]);

    
    return (
        <div>
            <h2>10 random sunny places:</h2>
            <ButtonGroup listType={listType} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} place={selectedIDs} clearSelectedIDs={clearSelectedIDs} />
            <ul>
                {/* <label>
                    <Checkbox
                        type="checkbox"
                        name="selectAll"
                        id="selectAll"
                        handleClick={handleSelectAll(sunnyPlaces)}
                        selectedIDs={allSelected}
                    />
                    Select all
                </label> */}
                {sunnyPlaces}
            </ul>

            {/* <p>Current place is {selectedIDs}</p>
            <p>Current shortlist is {shortlist}</p> */}
        </div>
        
    )
}