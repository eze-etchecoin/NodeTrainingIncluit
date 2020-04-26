const fetch =  require('node-fetch');
const apiUrl = 'http://dataservice.accuweather.com';
let config = {
    apiKey: ''
}

const getLocationsByLocationName = async (locationName) => {

    if(!config.apiKey){
        throw 'You must specify an ApiKey in "config" property.';
    }

    let url = `${apiUrl}/locations/v1/cities/search`;
    //apiKey
    url += `?apikey=${config.apiKey}`;
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

const getCurrentWeatherByLocationKey = async (locationKey) => {

    if(!config.apiKey){
        throw 'You must specify an ApiKey in "config" property.';
    }

    let url = `${apiUrl}/currentconditions/v1/${locationKey}`;
    //apiKey
    url += `?apikey=${config.apiKey}`;
    //idioma
    url += '&language=es-ES';

    try{
        let resp = await fetch(url);
        let jsonObject = await resp.json();

        if(!jsonObject.length){
            throw 'Location key not found.'
        }
    
        //We take the first result (the locationKey is supposed to be unique)
        return jsonObject[0];
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = { config, getLocationsByLocationName, getCurrentWeatherByLocationKey };