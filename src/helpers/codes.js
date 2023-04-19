// Codes all from https://www.metoffice.gov.uk/services/data/datapoint/code-definitions
// Thanks to ChatGPT for converting to JS objects for me!

const weatherCodes = {
    "NA": "Not available",
    "0": "Clear night",
    "1": "Sunny day",
    "2": "Partly cloudy (night)",
    "3": "Partly cloudy (day)",
    "4": "Not used",
    "5": "Mist",
    "6": "Fog",
    "7": "Cloudy",
    "8": "Overcast",
    "9": "Light rain shower (night)",
    "10": "Light rain shower (day)",
    "11": "Drizzle",
    "12": "Light rain",
    "13": "Heavy rain shower (night)",
    "14": "Heavy rain shower (day)",
    "15": "Heavy rain",
    "16": "Sleet shower (night)",
    "17": "Sleet shower (day)",
    "18": "Sleet",
    "19": "Hail shower (night)",
    "20": "Hail shower (day)",
    "21": "Hail",
    "22": "Light snow shower (night)",
    "23": "Light snow shower (day)",
    "24": "Light snow",
    "25": "Heavy snow shower (night)",
    "26": "Heavy snow shower (day)",
    "27": "Heavy snow",
    "28": "Thunder shower (night)",
    "29": "Thunder shower (day)",
    "30": "Thunder"
};

const visibilityCodes = {
    "UN": "Unknown",
    "VP": "Very poor - Less than 1 km",
    "PO": "Poor - Between 1-4 km",
    "MO": "Moderate - Between 4-10 km",
    "GO": "Good - Between 10-20 km",
    "VG": "Very good - Between 20-40 km",
    "EX": "Excellent - More than 40 km"
};

const uvIndexCodes = {
    "1": "Low exposure. No protection required. You can safely stay outside",
    "2": "Low exposure. No protection required. You can safely stay outside",
    "3": "Moderate exposure. Seek shade during midday hours, cover up and wear sunscreen",
    "4": "Moderate exposure. Seek shade during midday hours, cover up and wear sunscreen",
    "5": "Moderate exposure. Seek shade during midday hours, cover up and wear sunscreen",
    "6": "High exposure. Seek shade during midday hours, cover up and wear sunscreen",
    "7": "High exposure. Seek shade during midday hours, cover up and wear sunscreen",
    "8": "Very high. Avoid being outside during midday hours. Shirt, sunscreen and hat are essential",
    "9": "Very high. Avoid being outside during midday hours. Shirt, sunscreen and hat are essential",
    "10": "Very high. Avoid being outside during midday hours. Shirt, sunscreen and hat are essential",
    "11": "Extreme. Avoid being outside during midday hours. Shirt, sunscreen and hat essential.",
    "12": "Extreme. Avoid being outside during midday hours. Shirt, sunscreen and hat essential."
  };
  

export {weatherCodes, visibilityCodes, uvIndexCodes}