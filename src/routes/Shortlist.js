import { useState, useEffect } from "react";
import Forecast from "../components/Forecast";
import {sortByKey} from "../helpers/sort.js";
import {Link} from "react-router-dom";
import SunnyPlaceCard from "../components/SunnyPlaceCard";
import ButtonGroup from "../components/ButtonGroup";
import Checkbox from "../components/Checkbox";
import "../css/Search.css";

export default function Shortlist({shortlist, removePlaceFromShortlist, selectedIDs, handleSelectClick, addPlaceToShortlist, clearSelectedIDs, allSelected, handleSelectAll, clearSelectAll, updateFontColour}) {
    
    let listType="shortlist";

    let shortlistPlaces = shortlist.map((item, index) => <SunnyPlaceCard place={item} key={index} listType={listType} removePlaceFromShortlist={removePlaceFromShortlist} handleSelectClick={handleSelectClick} selectedIDs={selectedIDs} clearSelectedIDs={clearSelectedIDs} clearSelectAll={clearSelectAll} updateFontColour={updateFontColour} />);
     
    return (
        <div className="Shortlist">
            <div className="WideCard">
                <h1>Your Sunny Shortlist</h1>
            </div>
            <div className="WideCard">
                <div className="selectAll">
                    {shortlist.length===0 && <p><br></br>Looks like there's nothing here yet.<br></br><br></br>Why not head over to <Link to="/search">search</Link> for some sun?<br></br><br></br></p>}
                    {shortlist.length>1 && 
                        <label>
                            <Checkbox
                                key="selectAll"
                                id="selectAll"
                                place={shortlist}
                                allSelected={allSelected}
                                selectedIDs={selectedIDs}
                                list={shortlist}
                                handleSelectClick={handleSelectClick}
                                handleSelectAll={handleSelectAll}
                            />
                            Select all
                    </label>
                    }
                    {shortlist.length>1 && <ButtonGroup listType={listType} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} place={selectedIDs} clearSelectedIDs={clearSelectedIDs} clearSelectAll={clearSelectAll} />}
                </div>
                {shortlist.length>0 && <ul>{shortlistPlaces}</ul>}

            </div>
        </div>
    )
}