const express = require('express');
const router = express.Router();

// Dummy database for illustration purposes
let products = [];

// GET all products
router.get('/', (req, res) => {
    res.json(products);
});

// POST a new product
router.post('/', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update a product by id
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    let productIndex = products.findIndex(p => p.id == productId);
    if (productIndex === -1) {
        return res.status(404).send('Product not found');
    }
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
});

// DELETE a product by id
router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    products = products.filter(p => p.id != productId);
    res.status(204).send();
});

module.exports = router;