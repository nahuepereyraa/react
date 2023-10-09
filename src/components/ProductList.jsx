import React from 'react';
import {  } from "../data";

const ProductList = () => {
    return (
        <div className='container-items'> 
        {data.map(Product => (
            <div className='item'>
                <figure>
                    <img src={Product.img} alt={Product.nameProduct} />
                </figure>
                <div className='info-product'>
                    <h2>{Product.nameProduct}</h2>
                    <p class="price">${Product.price}</p>
                    <button>Añadir al carrito</button>
                </div>
            </div>
            ))}        
        </div>
    );
};

export default ProductList;