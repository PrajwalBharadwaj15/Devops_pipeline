import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from 'ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">E-commerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container mt-5">
                <ProductList />
            </div>
            <footer className="bg-light text-center text-lg-start mt-5">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 E-commerce Project
                </div>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
