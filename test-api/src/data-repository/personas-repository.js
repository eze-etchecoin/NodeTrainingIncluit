const personasPersistor = require('../persistors/personas-persistor');

const personasRepository = {

    getAll: () => {
        let result = personasPersistor.read();

        return result;
    },

    getOne: (id) => {
        
        let personas = this.getAll();

        if(!personas || !personas.length) return null;

        return personas.find(x => x.Id === id);
    },

    insert: (persona) => {
        
        let personas = this.getAll();

        personas.push(persona);

        personasPersistor.save(personas);
    },

    update: (persona) => {

        let personas = this.getAll();
        const indexExisting = personas.indexOf(personas.find(x => x.Id == persona.Id));

        personas[indexExisting] = persona;

        personasPersistor.save(personas);
    },

    delete: (id) => {
        
        let personas = this.getAll();
        indexExisting = personas.indexOf(personas.find(x => x.Id == id));

        personas.splice(indexExisting, 1);

        personasPersistor.save(personas);
    }
}

module.exports(personasRepository);