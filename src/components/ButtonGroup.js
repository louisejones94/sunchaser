export default function ButtonGroup({listType, addPlaceToShortlist, removePlaceFromShortlist, place, clearSelectedIDs, clearSelectAll}) {

    function handleButtonClick(e) {
        e.preventDefault();
        
        let places = [];
        // If place is already an array, do nothing
        if (Array.isArray(place)) {
            places = place;
        }
        // Otherwise, convert it to an array
        else {
            places = [place];
        }

        
        if(listType === "shortlist") {
            // If we have clicked the button to mark as visited
            if(e.target.classList.contains("VisitButton")) {
                if(e.target.parentNode.classList.contains("visited")) {
                    e.target.parentNode.classList.remove("visited");
                }
                else {
                    e.target.parentNode.classList.add("visited");
                }
            }
            // Otherwise we wamt to delete from the shortlist
            else {
                removePlaceFromShortlist(places);
            }
        }
        // Otherwise we're in the sunnyPlaces list so we want to add to the shortlist
        else {
            addPlaceToShortlist(places);
        }


        // Clear the selections
        clearSelectedIDs();
        clearSelectAll();
    }

    return (
        <>
            {listType==="sunny-place" && <li><button className="PlaceButton AddButton" onClick={handleButtonClick}>Add to shortlist!</button></li>}
            {listType==="shortlist" && <li><button className="PlaceButton VisitButton" onClick={handleButtonClick}>Mark as visited</button></li>}
            {listType==="shortlist" && <li><button className="PlaceButton DeleteButton" onClick={handleButtonClick}>Remove from shortlist</button></li>}
        </>
    )
}