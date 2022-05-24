import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h3>Header</h3>
            <Link to='/shop'>Shop</Link>
            <Link to='/home'>Home</Link>
        </div>
    );
};

export default Header;