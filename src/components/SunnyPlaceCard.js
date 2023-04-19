import "../css/SunnyPlaceCard.css";

export default function SunnyPlaceCard({place, addPlaceToShortlist, removePlaceFromShortlist, listType}) {

    function handleClick(e) {
        e.preventDefault();
        if(listType === "shortlist") {
            if(e.target.classList.contains("VisitButton")) {
                if(e.target.parentNode.parentNode.parentNode.classList.contains("visited")) {
                    e.target.parentNode.parentNode.parentNode.classList.remove("visited");
                }
                else {
                    e.target.parentNode.parentNode.parentNode.classList.add("visited");
                }
            }
            else {
                removePlaceFromShortlist(place);
            }
        }
        else {
            addPlaceToShortlist(place);
        }
    }

    return (
        <li>
            <h3>{place.name}</h3>
            <ul>
                <li>Weather type (1 is a sunny day): {place.Period[0].Rep[0].W}</li>
                <li>{place.Period[0].Rep[0].PPd} % chance of rain today</li>
                <li>{place.Period[0].Rep[1].PPn} % chance of rain tonight</li>
                <li>{place.Period[0].Rep[0].Dm} &deg;C max temperature today</li>
                {listType==="sunny-place" && <li><button className="PlaceButton AddButton" onClick={handleClick}>Add to my Sunny Shortlist!</button></li>}
                {listType==="shortlist" && <li><button className="PlaceButton VisitButton" onClick={handleClick}>Mark as visited</button></li>}
                {listType==="shortlist" && <li><button className="PlaceButton DeleteButton" onClick={handleClick}>Remove from my Sunny Shortlist</button></li>}
            </ul>
        </li>
    )
}