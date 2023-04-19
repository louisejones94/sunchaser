import "../css/SunnyPlaceCard.css";
import Checkbox from "./Checkbox";
import ButtonGroup from "./ButtonGroup";

export default function SunnyPlaceCard({place, addPlaceToShortlist, removePlaceFromShortlist, listType, handleSelectClick, clearSelectedIDs, selectedIDs}) {

    return (
        <li>
            <Checkbox
                key={place.i}
                place={place}
                handleSelectClick={handleSelectClick}
                selectedIDs={selectedIDs}
            />
            <h3>{place.name}</h3>
            <ul>
                <li>Weather type (1 is a sunny day): {place.Period[0].Rep[0].W}</li>
                <li>{place.Period[0].Rep[0].PPd} % chance of rain today</li>
                <li>{place.Period[0].Rep[1].PPn} % chance of rain tonight</li>
                <li>{place.Period[0].Rep[0].Dm} &deg;C max temperature today</li>
                <ButtonGroup listType={listType} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} place={place} clearSelectedIDs={clearSelectedIDs} />
            </ul>
        </li>
    )
}