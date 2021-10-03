import React from 'react';
import { NavLink } from 'react-router-dom';
 import './Header.css'
import logo from '../../images/logo.jpg';
const Header = () => {
    return (
        <div className="header">
            
            <img className="logo" src= {logo} alt="" />
            
            <nav>
                <NavLink  to ="/home">Home</NavLink>
                <NavLink  to ="/about">About</NavLink>
                <NavLink  to ="/friends">Friends</NavLink>
            </nav>
        </div>
    )
};

export default Header;