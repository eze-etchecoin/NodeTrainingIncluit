const fs = require('fs');

const filePath = './personas.json';

const personasPersistor = {
    save: (data) => {
        
        const json = JSON.stringify(data);

        fs.writeFile(filePath, json);
    },

    read: () => {
        
        const readPersonasJsonObject = new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {

                if(err) reject(err);

                resolve(data,toString());
            });
        });

        let result = [];

        await readPersonasJsonObject
        .then((data) => result = JSON.parse(data))
        .catch((err) => console.error(err));
        
        return result;
    }
}

module.exports(personasPersistor);