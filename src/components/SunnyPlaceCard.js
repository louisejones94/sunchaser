import "../css/SunnyPlaceCard.css";
import Checkbox from "./Checkbox";
import ButtonGroup from "./ButtonGroup";

export default function SunnyPlaceCard({place, addPlaceToShortlist, removePlaceFromShortlist, listType, handleSelectClick, clearSelectedIDs, selectedIDs, handleSelectAll, sunnyList, allSelected, clearSelectAll, updateFontColour}) {

    const handleColourChange = (e) => {
        let newFontColour = e.target.value;
        updateFontColour(place, newFontColour);
    }

    return (
        <li key={place.i}>
            <div className="SunnyPlaceCard">
                <Checkbox
                    id={place.i}
                    place={place}
                    selectedIDs={selectedIDs}
                    list={sunnyList}
                    handleSelectClick={handleSelectClick}
                    handleSelectAll={handleSelectAll}
                    allSelected={allSelected}
                />
                <div className="SunnyPlace">
                    <h3 style={{ color: `${place.fontColour}` }}>{place.name}</h3>
                    {listType === "shortlist" && <input type="color" value={place.fontColour} onChange={handleColourChange} />}
                    <ul>
                        <li>Weather type (1 is a sunny day): {place.Period[0].Rep[0].W}</li>
                        <li>{place.Period[0].Rep[0].PPd} % chance of rain today</li>
                        <li>{place.Period[0].Rep[1].PPn} % chance of rain tonight</li>
                        <li>{place.Period[0].Rep[0].Dm} &deg;C max temperature today</li>
                    </ul>
                </div>
                <div className="Buttons"> 
                    <ButtonGroup listType={listType} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} place={place} clearSelectedIDs={clearSelectedIDs} clearSelectAll={clearSelectAll} />
                </div>

            </div>
        </li>
    )
}