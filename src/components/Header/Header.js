import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>welcome to our website!</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/about">About us</a>
                <a href="/contact">Contact</a>
                <a href="/home">Home</a>
                <a href="/about">About us</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;