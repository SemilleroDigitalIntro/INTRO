const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Obtener productos
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Agregar producto
router.post('/', async (req, res) => {
    const { name, price, category, image } = req.body;
    const newProduct = new Product({ name, price, category, image });
    await newProduct.save();
    res.status(201).send('Producto agregado');
});

module.exports = router;
