import React, { useContext } from 'react';
import "./ProfileTag.css";
import coin from "../../assets/money.svg";
import userContext from '../../context/userContext'
import ApiService from '../../services/apiService';


const ProfileTag = () => {

    const apiService = new ApiService();
    const {user, setUserPoints} = useContext(userContext)
    const handleClick = async () => {
         const { data } = await apiService.addPoints(1000);
         console.log(data["New Points"]);
         setUserPoints(data["New Points"]);
    }

    return (
        <div className="profileTagContainer">
            <div className="profileTagContainer__name">{user.name}</div>
            <div onClick={handleClick} className="profileTagContainer__pointsContainer"> 
                <span className="profileTagContainer__pointsContainer__pointsQty">{user.points}</span>
                <img src={coin} alt="coin"></img> 
            </div>
        </div>
    );
};

export default ProfileTag;