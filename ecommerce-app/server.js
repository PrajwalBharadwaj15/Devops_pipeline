const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10.00, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20.00, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30.00, image: 'https://via.placeholder.com/150' },
];

// Route to get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
