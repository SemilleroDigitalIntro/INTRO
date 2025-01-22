const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('Usuario registrado');
});

// Login de usuario
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.status(200).json({ token: 'fake-jwt-token', userName: user.username });
    } else {
        res.status(401).send('Credenciales inválidas');
    }
});

module.exports = router;
