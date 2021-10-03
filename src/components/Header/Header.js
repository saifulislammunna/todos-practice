import React from 'react';
import { NavLink } from 'react-router-dom';
 import './Header.css'
import logo from '../../images/logo.jpg';
import { Table } from 'react-bootstrap';
const Header = () => {
    return (
        <div className="header">
            
            <img className="logo" src= {logo} alt="" />
            
            <nav>
                <NavLink  to ="/home">Home</NavLink>
                <NavLink  to ="/about">About</NavLink>
                <NavLink  to ="/todos">Todos</NavLink>
                <NavLink  to ="/charts">Charts</NavLink>

            </nav>
        
        </div>
    )
};

export default Header;