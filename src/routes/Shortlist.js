import { useState, useEffect } from "react";
import Forecast from "../components/Forecast";
import {sortByKey} from "../helpers/sort.js";
import {Link} from "react-router-dom";
import SunnyPlaceCard from "../components/SunnyPlaceCard";

export default function Shortlist({shortlist, removePlaceFromShortlist}) {

    let shortlistPlaces = shortlist.map((item, index) => <SunnyPlaceCard place={item} key={index} listType="shortlist" removePlaceFromShortlist={removePlaceFromShortlist}/>);
     
    return (
        <div>
            <h1>Your Sunny Shortlist</h1>
            {shortlist.length===0 && <p>Looks like there's nothing here yet. Why not head over to <Link to="/search">search</Link> for some sun?</p>}
            {shortlist.length>0 && <ul>{shortlistPlaces}</ul>}
        </div>
    )
}