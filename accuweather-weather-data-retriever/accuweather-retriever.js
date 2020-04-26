const fetch = require('node-fetch');

//Modify this with ApiKey to use
const apiKey = 'TzVuWmyxAeJzUJOuixA7LHnGDooYk4lE';
const apiUrl = 'http://dataservice.accuweather.com';

async function getLocationsByLocationName (locationName) {
    
    let url = `${apiUrl}/locations/v1/cities/search`;
    //apiKey
    url += `?apikey=${apiKey}`;
    //Query
    url += `&q=${locationName}`;
    //idioma
    url += '&language=es-ES';

    try{
        let resp = await fetch(url);
        let jsonObject = await resp.json();
    
        return jsonObject;
    }
    catch(err) {
        console.log(err);
    }
}

async function getCurrentWeatherByLocationKey (locationKey){

    let url = `${apiUrl}/currentconditions/v1/${locationKey}`;
    //apiKey
    url += `?apikey=${apiKey}`;
    //idioma
    url += '&language=es-ES';

    try{
        let resp = await fetch(url);
        let jsonObject = await resp.json();
    
        return {
            'weather': jsonObject[0].WeatherText, 
            'temperatureInCentigrades': jsonObject[0].Temperature.Metric.Value 
        };
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = { getLocationsByLocationName, getCurrentWeatherByLocationKey };