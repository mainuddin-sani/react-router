import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h3>Header</h3>
            <CustomLink to='/shop'>Shop</CustomLink>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/user'>User</CustomLink>
        </div>
    );
};

export default Header;