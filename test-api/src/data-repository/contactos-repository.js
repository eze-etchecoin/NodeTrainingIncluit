const contactosPersistor = require('../persistors/contactos-persistor');

const contactosRepository = {

    getAll: () => {
        let result = contactosPersistor.read();

        return result;
    },

    getOne: (id) => {
        
        let contactos = this.getAll();

        if(!contactos || !contactos.length) return null;

        return contactos.find(x => x.Id === id);
    },

    insert: (persona) => {
        
        let contactos = this.getAll();

        contactos.push(persona);

        contactosPersistor.save(contactos);
    },

    update: (persona) => {

        let contactos = this.getAll();
        const indexExisting = contactos.indexOf(contactos.find(x => x.Id == persona.Id));

        contactos[indexExisting] = persona;

        contactosPersistor.save(contactos);
    },

    delete: (id) => {
        
        let contactos = this.getAll();
        indexExisting = contactos.indexOf(contactos.find(x => x.Id == id));

        contactos.splice(indexExisting, 1);

        contactosPersistor.save(contactos);
    }
}

module.exports = contactosRepository;