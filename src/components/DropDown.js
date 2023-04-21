import "../css/DropDown.css"

export default function DropDown({locationOptions, locationChoice, handleSelectChange}) {
    
    return (
        <label className="DropDown">
            Where are you?
            {/* Dropdown from list of locations from API */}
            <select className="DropDown"
                required
                id="location" 
                value={locationChoice} 
                onChange={handleSelectChange}
            >
                {/* Default value whilst useEffect runs and populates locationOptions */}
                <option 
                    value=""
                    disabled 
                    hidden
                >
                    Select your location
                </option>
                {locationOptions && 
                    locationOptions.map((location) => (
                        <option 
                            key={location.value} 
                            value={location.value}
                        >
                            {location.label}
                        </option>
                    ))
                }
            </select>
        </label>
    )
}