import React from 'react';
import './cardAddProduct.css';

const CarAddProduct = ({data, addItemCart,item})=>{
    return(
        <figure className="snip1268">
            <div className="image">
                <img src={data.image} alt="sq-sample4" />
                <a className="add-to-cart" onClick={()=>addItemCart(item)}>Add to Cart</a>
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