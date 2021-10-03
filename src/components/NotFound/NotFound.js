import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/home"> <button className="back-to-homepage">Home Page</button></Link>
        </div>
    );
};

export default NotFound;