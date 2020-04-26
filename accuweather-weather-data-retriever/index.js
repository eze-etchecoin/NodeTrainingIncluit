const accuWeatherRetriever = require('./accuweather-retriever');

async function hola() {

    let locationKey = await accuWeatherRetriever.getLocationKeyByLocationName('mina clavero');
    
    console.log(`El código de locación para Mina Clavero es ${locationKey}`);
}

hola();