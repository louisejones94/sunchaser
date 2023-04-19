import React, { useState } from "react";

export default function Checkbox ({ place, handleSelectClick, selectedIDs }) {
  
    const [checked, setChecked] = useState(false);

    function handleChange(event) {
        setChecked(event.target.checked);
        handleSelectClick(place);
    }

    return (
        <input
            id={place.i}
            name={place.name}
            type="checkbox"
            onChange={handleChange}
            checked={selectedIDs.some((item) => item.i === place.i)}
        />
    );
};
