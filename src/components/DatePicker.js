import { useRef, useState } from 'react';

export default function DatePicker({dateChoice, handleDateChange}) {
    const dateInputRef = useRef(null);

    return (
        <label>
            When do you want to chase the sun?
            <input 
                type="date"
                value={dateChoice}
                disabled
                onChange={handleDateChange}
                ref={dateInputRef}
            />
        </label>
    )
}