const fs = require('fs');

const filePath = './data/contactos.json';

const contactosPersistor = {
    save: (data) => {
        
        const json = JSON.stringify(data);

        fs.writeFile(filePath, json);
    },

    read: () => {
        
        // const readContactosJsonObjectAsync = () => {
        //     return new Promise((resolve, reject) => {
        //         fs.readFile(filePath, (err, data) => {
    
        //             if(err) reject(err);
    
        //             resolve(data,toString());
        //         });
        //     });
        // }

        // const readContactosJsonObject = async () => {
        //     return await readContactosJsonObjectAsync();
        // }

        // let fileString = readContactosJsonObject();
        // let result = JSON.parse(fileString);

        let fileString = fs.readFileSync(filePath).toString();

        let result = JSON.parse(fileString);
        
        return result;
    }
}

module.exports = contactosPersistor;