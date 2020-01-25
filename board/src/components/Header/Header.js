import React, { useContext } from 'react';
import classes from './Header.module.css';
import trello from '../../assets/trellologo.png';
import ChangeColor from '../ChangeColor/ChangeColor';
import ColorContext from '../Context/Context';
import { COLOR_PICKER } from '../Hooks/useColor';

const Header = () => {
    const context = useContext(ColorContext)
    return (
        <header className={classes.Header}>
             {/* style={{ background: COLOR_PICKER[context.color][0] }} */}
            <img src={trello} alt="trello"/>
            <ChangeColor />
        </header>
    );
};

export default Header;