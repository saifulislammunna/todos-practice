import React from 'react';
import About from '../About/About';
import Friends from '../Friends/Friends';
import Home from '../Home/Home';

const Header = () => {
    return (
        <div   className="d-flex text-center  " > 
           <Home ></Home> 
           <About  ></About>
           <Friends  ></Friends>

        </div>
    );
};

export default Header;