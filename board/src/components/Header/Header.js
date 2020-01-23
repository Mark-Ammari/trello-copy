import React from 'react';
import classes from './Header.module.css';
import trello from '../../assets/trellologo.png';

const Header = () => {
    return (
        <header className={classes.Header}>
            <img src={trello} alt="trello"/>
        </header>
    );
};

export default Header;