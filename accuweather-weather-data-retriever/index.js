const accuWeatherRetriever = require('./accuweather-retriever');

async function hola() {
    await console.log(accuWeatherRetriever.getLocationKeyByLocationName('mina clavero'));
}

hola();