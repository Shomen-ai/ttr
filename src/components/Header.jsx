import React from 'react';
import './Header.css';

const Header = ({ imageSrc }) => {
    return (
        <header>
            <img src={imageSrc} alt="Header" />
        </header>
    );
};

export default Header;
