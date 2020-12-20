const { Router } = require('express');
const router = Router();

router.get('/mensajes', (req, res) => {
    res.json({
        msg: 'Hola Mundo'
    });
});

router.post('/mensajes', (req, res) => {
    const body = req.body;
    res.json({
        msg: 'Hola Mundo desde Post',
        body
    });
});

router.post('/mensajes/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    res.json({
        msg: 'Hola Mundo desde Post',
        body,
        id
    });
});



module.exports = router;