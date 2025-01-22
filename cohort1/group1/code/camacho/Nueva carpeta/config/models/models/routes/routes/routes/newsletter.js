const express = require('express');
const router = express.Router();

// Suscribirse a la newsletter
router.post('/', (req, res) => {
    const { email } = req.body;
    // Aquí podrías guardar el email en la base de datos
    res.status(201).send('Suscripción exitosa');
});

module.exports = router;
