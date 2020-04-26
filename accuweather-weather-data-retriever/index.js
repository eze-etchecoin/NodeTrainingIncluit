const accuWeatherRetriever = require('./accuweather-retriever');
const io = require('console-read-write');

async function ConsultarClimaConsola() {

    let query;
    do {
        console.log('Ingrese la ciudad de la cual desea consultar el clima actual:');
        query = await io.read();
    } while(!query || !query.trim());

    let location = (await accuWeatherRetriever.getLocationsByLocationName(query))[0];

    // console.log(`El código de locación para Mina Clavero es ${locationKey}`);]
    /* salida: El código de locación para Mina Clavero es 1228576 */

    let obj = await accuWeatherRetriever.getCurrentWeatherByLocationKey(location.Key);

    console.log(`El estado del clima en ${location.LocalizedName} es ${obj.weather}, con una temperatura de ${obj.temperatureInCentigrades} grados.`);
}

ConsultarClimaConsola();