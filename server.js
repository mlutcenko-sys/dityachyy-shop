const express = require('express');
const path = require('path');

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for products
app.get('/products', (req, res) => {
    res.send('Products route');
});

// Routes for cart
app.get('/cart', (req, res) => {
    res.send('Cart route');
});

// Routes for admin panel
app.get('/admin', (req, res) => {
    res.send('Admin panel route');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});