import React from 'react';
import './cardAddProduct.css';
import {Link} from 'react-router-dom';

const CarAddProduct = ({data})=>{
    return(
        <figure className="snip1268">
            <div className="image">
                <img src={data.image} alt="sq-sample4" />
                <Link to={"/carrito"} className="add-to-cart">Add to Cart</Link>
            </div>
            <figcaption>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <div className="price">$65.00</div>
            </figcaption>
        </figure>
    );
};

export default CarAddProduct;