import React, { useContext } from 'react';
import apiService from "../../services/apiService";
import "./ProfileTag.css";
import coin from "../../assets/money.svg";
import userContext from '../../context/userContext'
import ApiService from '../../services/apiService';



const ProfileTag = () => {

    const apiService = new ApiService();
    const {user, setUser} = useContext(userContext)

    const addPoints = () => {
         apiService.addPoints(1000).then(({data}) => {
             console.log(data);
             setUser(data);
         });
    }

    return (
        <div className="profileTagContainer">
            <div className="profileTagContainer__name">{user.name}</div>
            <div onClick={addPoints} className="profileTagContainer__pointsContainer"> 
                <span className="profileTagContainer__pointsContainer__pointsQty">{user.points}</span>
                <img src={coin} alt="coin"></img> 
            </div>
        </div>
    );
};

export default ProfileTag;