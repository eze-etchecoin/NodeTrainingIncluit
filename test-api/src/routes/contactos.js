const { Router } = require('express');
const router = Router();

const repository = require('../data-repository/contactos-repository');

router.get('/', (req, res) => {
    let result = repository.getAll();
    res.json(result);
});

router.get('/:id', (req, res) => {

    let id = parseInt(req.params.id);
    let result = repository.getOne(id);
    res.json(result);
});

module.exports = router;