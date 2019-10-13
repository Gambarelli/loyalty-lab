import React from 'react';
import '../Product/Product.css'

const RedeemedProduct = ({product, index}) => {
    return (
        <div className="productCardContainer">
        <div className="redeemNumber">{index + 1}</div>
        <img className="productCardContainer__Image" src={product.img.hdUrl} alt={product.name}>
        </img>
        <div className="productCardContainer__MetadataContainer">
            <div className="productCardContainer__Category"> {product.category.toUpperCase()} </div>   
            <div className="productCardContainer__Name"> {product.name} </div>   
        </div>
    </div>
    );
};

export default RedeemedProduct;