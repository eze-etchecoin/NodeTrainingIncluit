const accuWeatherRetriever = require('./accuweather-retriever');

async function hola() {

    // let locationKey = await accuWeatherRetriever.getLocationKeyByLocationName('mina clavero');
    // console.log(`El código de locación para Mina Clavero es ${locationKey}`);]
    /* salida: El código de locación para Mina Clavero es 1228576 */

    let obj = await accuWeatherRetriever.getCurrentWeatherByLocationKey(1228576);

    console.log(`El estado del clima en Mina Clavero es ${obj.weather}, con una temperatura de ${obj.temperatureInCentigrades}`);
}

hola();