import React from 'react';
import "./Header.css";
import logo from '../../assets/logo.svg';
import ProfileTag from '../profileTag/ProfileTag'

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="logo"></img>
            <ProfileTag></ProfileTag>
        </div>
    );
};

export default Header;