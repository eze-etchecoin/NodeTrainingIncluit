const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    
    const objetoTest = {
        propiedad1: 'valor propiedad 1',
        propiedad2: 'valor propiedad 2'
    }
    res.json(objetoTest);
});

module.exports = router;