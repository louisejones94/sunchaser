export default function DropDown({locationOptions, locationChoice, handleSelectChange}) {
    
    return (
        <label>
            Please choose your current location:
            {/* Dropdown from list of locations from API */}
            <select 
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