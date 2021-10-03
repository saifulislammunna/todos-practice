import React from 'react';
import {  useHistory } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
const history = useHistory();
const handleClick = () => {
    history.push('/home')
}
    return (
        <div >
            <h1>404</h1>
            <p>Page not found</p>
              <button className="back-to-homepage" onClick={handleClick}>Home Page</button> 
        </div>
    );
};

export default NotFound;