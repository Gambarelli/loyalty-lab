import React, { useContext, useState, useEffect } from 'react';
import './Product.css';
import shoppingIcon from '../../assets/Icon-blue.svg'
import shoppingIconWhite from '../../assets/icon-white.svg'
import coin from "../../assets/money.svg";
import userContext from '../../context/userContext'
import ApiService from '../../services/apiService';


const Product = ({product}) => {
    
    const {user, setUserPoints} = useContext(userContext)
    const [redeemed, setRedeemed] = useState(false);
    const apiService = new ApiService()

    useEffect(() => {
        const redeem = async () => {
            const { data } = await apiService.redeemProduct(product._id);
             console.log(data);
             const points = user.points - product.cost;
             setUserPoints(points);
             setRedeemed(false);
        }
        if(redeemed) redeem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [redeemed])

    

    return (
        <div className="productCardContainer">
            {user.points >= product.cost ? (<div className="productCardContainer__ActionOverlay">
                <div className="productCardContainer__ActionOverlay__PointsContainer">
                    <div className="productCardContainer__ActionOverlay__Points">{product.cost}</div>
                    <img src={coin} alt="coin"></img> 
                </div>
                <div onClick={() => setRedeemed(true)} className="productCardContainer__ActionOverlay__RedeemButton">Redeem now</div>
                <div className="productCardContainer__shoppingBag--white">
                    <img src={shoppingIconWhite} alt="icon"></img>
                </div>
            </div>) : null}
            { user.points >= product.cost ? (
                <div className="productCardContainer__shoppingBag">
                    <img src={shoppingIcon} alt="icon"></img>
            </div> ) : (
                <div className="productCardContainer__insufficientPoints">
                    {'you need ' + (product.cost-user.points) } <img src={coin} alt="coin"></img> 
                </div>
            )
            }
            <img className="productCardContainer__Image" src={product.img.hdUrl} alt={product.name}>
            </img>
            <div className="productCardContainer__MetadataContainer">
                <div className="productCardContainer__Category"> {product.category.toUpperCase()} </div>   
                <div className="productCardContainer__Name"> {product.name} </div>   
            </div>
        </div>
    );
};

export default Product;