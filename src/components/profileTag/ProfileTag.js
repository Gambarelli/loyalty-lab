import React, { useContext, useState } from 'react';
import "./ProfileTag.css";
import coin from "../../assets/money.svg";
import userContext from '../../context/userContext'
import ApiService from '../../services/apiService';
import Drawer from 'react-drag-drawer'
import RedeemedProduct from '../RedeemedProduct'

const ProfileTag = () => {

    const apiService = new ApiService();
    const [ toggle, setToggle ] = useState(false);
    
    const {user, setUserPoints} = useContext(userContext)
    
    const handleClick = async () => {
         const { data } = await apiService.addPoints(1000);
         console.log(data["New Points"]);
         setUserPoints(data["New Points"]);
    }

    return (
        <div className="profileTagContainer">
            <div onClick={() => setToggle(!toggle)} className="profileTagContainer__name">{user.name} <img alt="icon" src={require('../../assets/chevron-down.svg')}></img></div>
            <div id="pftContainer" data-micron="jerk" onClick={handleClick} className="profileTagContainer__pointsContainer"> 
                <span data-micron="jerk" data-micron-bind="true" data-micron-id="pftContainer" className="profileTagContainer__pointsContainer__pointsQty">{user.points}</span>
                <img data-micron="jerk" data-micron-bind="true" data-micron-id="pftContainer" src={coin} alt="coin"></img> 
            </div>
            <Drawer open={toggle} onRequestClose={() => setToggle(!toggle)} modalElementClass="modal">
                <div className="modal_profileData">John's Redeem History</div>
                <div className="modal_redeemedProducts">
                    {user.redeemHistory && user.redeemHistory.map((product, index) => (
                        <div key={ product._id }>
                            <RedeemedProduct product={product} index={index} />
                            <br />
                        </div>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};

export default ProfileTag;