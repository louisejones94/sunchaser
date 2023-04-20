import React, { useState } from "react";

export default function Checkbox ({ id, place, handleSelectClick, selectedIDs, handleSelectAll, list, allSelected }) {
  
    const [checked, setChecked] = useState(false);

    function handleChange(event) {
        setChecked(event.target.checked);
        if (id === "selectAll") {
            handleSelectAll(list);
        }
        else {
            handleSelectClick(place);
        }
    }

    return (
        <>
            { id==="selectAll" ? 
            <input
                id={id}
                name="selectAll"
                type="checkbox"
                onChange={handleChange}
                checked={allSelected}
            />
            :
            <input
                id={id}
                name={place.name}
                type="checkbox"
                onChange={handleChange}
                checked={selectedIDs.some((item) => item.i === place.i)}
            />
            }
        </>
    )
}
