import SunnyPlaceCard from "./SunnyPlaceCard";

export default function SunnyPlacesList({forecasts, dateChoice, addPlaceToShortlist, removePlaceFromShortlist, shortlist}) {

    let sunnyForecasts = [...forecasts].filter((item) => 
        // The date equals the chosen date
        // Currently limited to today only
        item.Period[0].value === (dateChoice + 'Z')
        // The weather is a sunny day
        && item.Period[0].Rep[0].W === "1"
        // There is zero percent chance of precipitation in the daytime
        && item.Period[0].Rep[0].PPd == "0"
        // There is zero percent chance of precipitation in the nighttime
        && item.Period[0].Rep[1].PPn == "0"
    );
    console.log(sunnyForecasts.length);
    let sunnyPlaces = 
        // // sort by least chance of precipitation
        // sunnyForecasts.sort((a,b)=>Number(a.Period[0].Rep[0].PPd)-Number(b.Period[0].Rep[0].PPd)) 
        // sort by hottest first
        sunnyForecasts.sort((a,b)=>Number(b.Period[0].Rep[0].Dm)-Number(a.Period[0].Rep[0].Dm)) 
        .slice(0,10)
        .map((item, index) => <SunnyPlaceCard place={item} key={index} listType="sunny-place" shortlist={shortlist} addPlaceToShortlist={addPlaceToShortlist} removePlaceFromShortlist={removePlaceFromShortlist} />);

    return (
        <div>
            <h2>10 random sunny places:</h2>
            <ul>
                {sunnyPlaces}
            </ul>
        </div>
        
    )
}