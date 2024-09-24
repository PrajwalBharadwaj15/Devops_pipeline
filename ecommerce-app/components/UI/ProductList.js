import React, { useEffect, useState } from 'react';
import { Button, Card } from '@/components/ui/card';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addToCart = (productId) => {
        setCart(prevCart => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0) + 1
        }));
    };

    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <Card>
                            <img src={`/api/placeholder/${product.id * 100}/150`} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">${product.price.toFixed(2)}</p>
                                <Button onClick={() => addToCart(product.id)} className="w-full">
                                    Add to Cart {cart[product.id] ? `(${cart[product.id]})` : ''}
                                </Button>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;