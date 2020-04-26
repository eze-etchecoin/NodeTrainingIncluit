const http = require('http');

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

    let resp = await http.get(url);
    let data = await resp.on('data');

    let respObject = data;
    // let respObject = null;
    //  (resp) => {

    //     let data = '';
    //     resp.on('data', (chunk) => data += chunk);
    //     resp.on('end', () => {
    //         respObject = JSON.parse(data)
    //     });
    // }).on('error', (err) => {
    //     console.log(err)
    // });
}

async function getCurrentWeatherByLocationKey (locationKey){

}

module.exports = { getLocationKeyByLocationName, getCurrentWeatherByLocationKey };