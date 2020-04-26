const fetch = require('node-fetch');

//Modify this with ApiKey to use
const apiKey = 'TzVuWmyxAeJzUJOuixA7LHnGDooYk4lE';
const apiUrl = 'http://dataservice.accuweather.com/locations/v1';

async function getLocationKeyByLocationName (locationName) {
    
    let url = `${apiUrl}/cities/search`;
    //apiKey
    url += `?apikey=${apiKey}`;
    //Query
    url += `&q=${locationName}`;
    //idioma
    url += '&language=es-ES';

    try{
        let resp = await fetch(url);
        let jsonObject = await resp.json();

        if(jsonObject.length > 1){
            throw "Se encontró más de 1 ubicación. Por favor, sea más específico.";
        }else if(jsonObject.length === 0){
            throw "No se encontró ninguna ubicación. Intente con otra búsqueda."
        }
    
        return jsonObject[0].Key;
    }
    catch(err) {
        console.log(err);
    }
}

async function getCurrentWeatherByLocationKey (locationKey){

}

module.exports = { getLocationKeyByLocationName, getCurrentWeatherByLocationKey };