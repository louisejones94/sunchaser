export default function Forecast({forecast}) {
    return (
        <div>
            <h2>{forecast.location}</h2>
            <h3>{forecast.temperature}&deg;C</h3>
            <h4>{forecast.description}</h4>
        </div>
    )
}