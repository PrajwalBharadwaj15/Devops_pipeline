import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ProductList from 'ProductList';
import { Button, Card } from '@/components/ui/cards';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [cart, setCart] = useState({});
    const [showCart, setShowCart] = useState(false);
    const [checkoutComplete, setCheckoutComplete] = useState(false);

    const addToCart = (productId) => {
        setCart(prevCart => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0) + 1
        }));
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[productId] > 1) {
                newCart[productId]--;
            } else {
                delete newCart[productId];
            }
            return newCart;
        });
    };

    const cartTotal = Object.entries(cart).reduce((total, [id, quantity]) => {
        const product = products.find(p => p.id === parseInt(id));
        return total + (product ? product.price * quantity : 0);
    }, 0);

    const handleCheckout = () => {
        setCheckoutComplete(true);
        setCart({});
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">E-commerce</a>
                <Button onClick={() => setShowCart(!showCart)} className="ml-auto">
                    Cart ({Object.values(cart).reduce((a, b) => a + b, 0)})
                </Button>
            </nav>
            <div className="container mt-5">
                {showCart ? (
                    <Card className="p-4">
                        <h2>Your Cart</h2>
                        {Object.entries(cart).map(([id, quantity]) => {
                            const product = products.find(p => p.id === parseInt(id));
                            return product ? (
                                <div key={id} className="d-flex justify-content-between align-items-center mb-2">
                                    <span>{product.name} (x{quantity})</span>
                                    <div>
                                        <Button onClick={() => removeFromCart(id)} className="mr-2">-</Button>
                                        <Button onClick={() => addToCart(id)}>+</Button>
                                    </div>
                                </div>
                            ) : null;
                        })}
                        <h4 className="mt-3">Total: ${cartTotal.toFixed(2)}</h4>
                        <Button onClick={handleCheckout} className="mt-3">Checkout</Button>
                    </Card>
                ) : checkoutComplete ? (
                    <Card className="p-4">
                        <h2>Thank you for your purchase!</h2>
                        <Button onClick={() => setCheckoutComplete(false)} className="mt-3">Continue Shopping</Button>
                    </Card>
                ) : (
                    <ProductList addToCart={addToCart} />
                )}
            </div>
            <footer className="bg-light text-center text-lg-start mt-5">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 E-commerce Project
                </div>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));