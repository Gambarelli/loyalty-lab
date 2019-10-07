import React, { useEffect, useState, useContext } from 'react';
import './ProductGrid.css'
import Product from "../Product/Product";
import ApiService from '../../services/apiService';

const ProductGrid = () => {

    const apiService = new ApiService();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        apiService.getProducts().then(({data}) => {
            console.log(data);
            setProducts(data);
        });
    },[]);

    const sortByHighest = () => {
        products.sort(function(a, b){return b.cost-a.cost});
        debugger;
        setProducts(products);
    }

    const sortByLowest = () => {
        products.sort(function(a, b){return a.cost-b.cost});
        setProducts(products);
    }

    return (
        <div>
            <div className="filterContainer">
                <div className="filterContainer__Inner">
                    <div className="filterContainer__paging">16 of 32 products</div>
                    <div className="v-border"></div>
                    <div className="filterContainer__FilterChip">Most Recent</div>
                    <div onClick={sortByLowest} className="filterContainer__FilterChip">Lowest Price</div>
                    <div onClick={sortByHighest} className="filterContainer__FilterChip">Highest Price</div>
                </div>
            </div>
            <div className="productGrid">
            {
            products.map((product) => (
                <Product product={ product }></Product>
            ))
            }
            </div>
        </div>
    );
};

export default ProductGrid;