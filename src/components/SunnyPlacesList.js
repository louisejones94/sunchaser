import SunnyPlaceCard from "./SunnyPlaceCard";
import Checkbox from "./Checkbox";
import {useState, useEffect, Button} from "react";
import ButtonGroup from "./ButtonGroup";

export default function SunnyPlacesList({forecasts, dateChoice, addPlaceToShortlist, removePlaceFromShortlist, shortlist, handleSelectClick, selectedIDs, clearSelectedIDs, handleSelectAll, allSelected, clearSelectAll}) {

    let listType = "sunny-place";
    const [sunnyPlaces, setSunnyPlaces] = useState(null);
    const [sunnyList, setSunnyList] = useState(null);
    
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

        let newSunnyList = 
        // // sort by least chance of precipitation
        // sunnyForecasts.sort((a,b)=>Number(a.Period[0].Rep[0].PPd)-Number(b.Period[0].Rep[0].PPd)) 
        // sort by hottest first
        sunnyForecasts.sort((a,b)=>Number(b.Period[0].Rep[0].Dm)-Number(a.Period[0].Rep[0].Dm)) 
        .slice(0,10)

        let newSunnyPlaces =
        newSunnyList.map((item, index) => <SunnyPlaceCard place={item} key={index} listType={listType} shortlist={shortlist} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} handleSelectClick={handleSelectClick} selectedIDs={selectedIDs} clearSelectedIDs={clearSelectedIDs} allSelected={allSelected} sunnyList={newSunnyList} clearSelectAll={clearSelectAll}/>);

        setSunnyList(newSunnyList);
        setSunnyPlaces(newSunnyPlaces);

        }, [forecasts, dateChoice, addPlaceToShortlist, removePlaceFromShortlist, shortlist, handleSelectClick, selectedIDs, clearSelectedIDs, clearSelectAll]);

    
    return (
        <div>
            <h2>10 sunny places:</h2>
            <ButtonGroup listType={listType} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} place={selectedIDs} clearSelectedIDs={clearSelectedIDs} clearSelectAll={clearSelectAll} />
            <ul>
                <label>
                    <Checkbox
                        key="selectAll"
                        id="selectAll"
                        place={sunnyPlaces}
                        allSelected={allSelected}
                        selectedIDs={selectedIDs}
                        list={sunnyList}
                        handleSelectClick={handleSelectClick}
                        handleSelectAll={handleSelectAll}
                    />
                    Select all
                </label>
                {sunnyPlaces}
            </ul>

            {/* <p>Current place is {selectedIDs}</p>
            <p>Current shortlist is {shortlist}</p> */}
        </div>
        
    )
}