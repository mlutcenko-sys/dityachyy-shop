const express = require('express');
const router = express.Router();

let cart = [];

// Add item to cart
router.post('/add', (req, res) => {
    const { item } = req.body;
    if (!item) {
        return res.status(400).send('Item is required');
    }
    cart.push(item);
    res.status(201).send({ message: 'Item added to cart', cart });
});

// Remove item from cart
router.delete('/remove', (req, res) => {
    const { item } = req.body;
    if (!item) {
        return res.status(400).send('Item is required');
    }
    cart = cart.filter(cartItem => cartItem !== item);
    res.status(200).send({ message: 'Item removed from cart', cart });
});

// Checkout
router.post('/checkout', (req, res) => {
    if (cart.length === 0) {
        return res.status(400).send('Cart is empty');
    }
    // Here you would normally process payment and clear the cart
    res.status(200).send({ message: 'Checkout successful', cart });
    cart = []; // Clear the cart after checkout
});

module.exports = router;