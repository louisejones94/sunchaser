import { useState, useEffect } from "react";
import Forecast from "../components/Forecast";
import {sortByKey} from "../helpers/sort.js";
import {Link} from "react-router-dom";
import SunnyPlaceCard from "../components/SunnyPlaceCard";
import ButtonGroup from "../components/ButtonGroup";

export default function Shortlist({shortlist, removePlaceFromShortlist, selectedIDs, handleSelectClick, addPlaceToShortlist, clearSelectedIDs}) {
    
    let listType="shortlist";
    let shortlistPlaces = shortlist.map((item, index) => <SunnyPlaceCard place={item} key={index} listType={listType} removePlaceFromShortlist={removePlaceFromShortlist} handleSelectClick={handleSelectClick} selectedIDs={selectedIDs} clearSelectedIDs={clearSelectedIDs} />);
     
    return (
        <div>
            <h1>Your Sunny Shortlist</h1>
            {shortlist.length===0 && <p>Looks like there's nothing here yet. Why not head over to <Link to="/search">search</Link> for some sun?</p>}
            {shortlist.length>0 && <ButtonGroup listType={listType} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} place={selectedIDs} clearSelectedIDs={clearSelectedIDs} />}
            {shortlist.length>0 && <ul>{shortlistPlaces}</ul>}
        </div>
    )
}