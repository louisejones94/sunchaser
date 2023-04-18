export default function Forecast({forecasts, placeID}) {
    return (
        <div>
            <h2>{forecasts.location}</h2>
            <h3>{forecasts.temperature}&deg;C</h3>
            <h4>{forecasts.description}</h4>
        </div>
    )
}