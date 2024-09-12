import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-md-4">
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price.toFixed(2)}</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
