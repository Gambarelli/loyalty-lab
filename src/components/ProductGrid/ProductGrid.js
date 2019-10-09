import React, { useEffect, useReducer } from 'react';
import './ProductGrid.css'
import Product from "../Product"
import ApiService from '../../services/apiService';
import { sortWith, descend, ascend, prop } from "ramda";

const FILTERS = {
    RECENT: 'RECENT',
    LOW: 'LOW',
    HIGH: 'HIGH'
}

const initialState = {
    products: [],
    activeFilter: FILTERS.RECENT,
    loading: false,
}

const getSortedProducts = ({products, activeFilter}) => {
    if(activeFilter === FILTERS.HIGH){
        return sortWith([descend(prop('cost'))], products);
    }else if(activeFilter === FILTERS.LOW){
        return sortWith([ascend(prop('cost'))], products);
    }
    return products;
}

const reducer = ( state, action ) => {
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return { ...state, loading: true }  
        case 'FETCH_PRODUCTS_SUCCESS':
                return { ...state, loading: false, products: action.products }
        case 'FETCH_PRODUCTS_FAILURE':
                return { ...state, loading: false }
        case 'SET_ACTIVE_FILTER':
            return {...state, activeFilter: action.filter} 
        default: return state;
    }
}

const ProductGrid = () => {

    const apiService = new ApiService();
    const [ state, dispatch ] = useReducer( reducer , initialState );
    const sortedProducts = getSortedProducts(state);
    // const [products, setProducts] = useState([]);
    // const [ activeFilter, setActiveFilter ] = useState(FILTERS.HIGH);
    // const sortedProducts
    
    
    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({type: 'FETCH_PRODUCTS'});
            const { data } = await apiService.getProducts();
            dispatch({type: 'FETCH_PRODUCTS_SUCCESS', products: data });
        }
        fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(state.loading){
        return <div style={{padding: 100}}>Loading...</div>
    }

    return (
        <div>
            <div className="filterContainer">
                <div className="filterContainer__Inner">
                    <div className="filterContainer__paging">32 of 32 products</div>
                    <div className="v-border"></div>
                    <div onClick={() => dispatch({type: 'SET_ACTIVE_FILTER', filter: FILTERS.RECENT })} className="filterContainer__FilterChip">Most Recent</div>
                    <div onClick={() => dispatch({type: 'SET_ACTIVE_FILTER', filter: FILTERS.LOW })} className="filterContainer__FilterChip">Lowest Price</div>
                    <div onClick={() => dispatch({type: 'SET_ACTIVE_FILTER', filter: FILTERS.HIGH })} className="filterContainer__FilterChip">Highest Price</div>
                </div>
            </div>
            <div className="productGrid">
            {
            sortedProducts.map((product) => (
                <Product key={ product._id } product={ product }></Product>
            ))
            }
            </div>
        </div>
    );
};

export default ProductGrid;