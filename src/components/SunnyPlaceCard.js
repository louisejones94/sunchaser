export default function SunnyPlaceCard({place}) {
    return (
        <li>
            <h3>{place.name}</h3>
            <ul>
                <li>Weather type (1 is a sunny day): {place.Period[0].Rep[0].W}</li>
                <li>{place.Period[0].Rep[0].PPd} % chance of rain today</li>
                <li>{place.Period[0].Rep[1].PPn} % chance of rain tonight</li>
                <li>{place.Period[0].Rep[0].Dm} &deg;C max temperature today</li>
            </ul>
        </li>
    )
}