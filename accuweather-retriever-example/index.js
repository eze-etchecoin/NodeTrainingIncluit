// let accuWeatherRetriever = require('accuweather-retriever');
let accuWeatherRetriever = require('../accuweather-retriever/accuweather-retriever');
const io = require('console-read-write');
const apiKey = 'TzVuWmyxAeJzUJOuixA7LHnGDooYk4lE';

async function ConsultarClimaConsola() {

    let query;
    do {
        console.log('Ingrese la ciudad de la cual desea consultar el clima actual:');
        query = await io.read();
    } while (!query || !query.trim());

    accuWeatherRetriever.config.apiKey = 'TzVuWmyxAeJzUJOuixA7LHnGDooYk4lE';
    let locationsResult = [];
    while (!locationsResult.length) {
        locationsResult = await accuWeatherRetriever.getLocationsByLocationName(query);

        if (!locationsResult.length) {
            console.log('No se encontraron resultados. Intente nuevamente...');
            query = await io.read()
        }
    }

    let selectedLocation = null;
    if (locationsResult.length === 1) {
        selectedLocation = locationsResult[0];
    } else {
        do{
            console.log('Se encontraron estos resultados. Por favor, ingrese el número correspondiente a la localidad buscada.\n');
            let index = 0;
            for (let location of locationsResult) {
                console.log(`${index + 1} - ${location.LocalizedName}, ${location.AdministrativeArea.LocalizedName}, ${location.Country.LocalizedName}`);
                index++;
            }

            let selectedIndex = parseInt(await io.read()) - 1;
            selectedLocation = locationsResult[selectedIndex];
            if(!selectedLocation){
                console.log('Opción inválida. Intente nuevamente...');
            }
        }
        while (!selectedLocation);
    }

    // console.log(`El código de locación para Mina Clavero es ${locationKey}`);]
    /* salida: El código de locación para Mina Clavero es 1228576 */

    let obj = await accuWeatherRetriever.getCurrentWeatherByLocationKey(selectedLocation.Key);

    console.log(`El estado del clima en ${selectedLocation.LocalizedName} es ${obj.WeatherText}, con una temperatura de ${obj.Temperature.Metric.Value} grados.`);
}

ConsultarClimaConsola();