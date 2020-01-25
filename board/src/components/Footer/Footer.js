import React, { useContext } from 'react';
import classes from './Footer.module.css';
import github from '../../assets/github.svg';
import sourcecode from '../../assets/sourcecode.svg';
import { COLOR_PICKER } from '../GlobalColors/globalColors';
import contextColor from '../Context/Context';

const Footer = () => {
    const context = useContext(contextColor)
    return (
        <footer  
        style={{ backgroundColor: COLOR_PICKER[context.color][0]}}
        className={classes.Footer}>
            <p>Created by Mark Ammari</p>
            <div>
                <a re="noopener noreferrer" target="_blank" href="https://github.com/Mark-Ammari"><img src={github} alt="github" /></a>
                <a rel="noopener noreferrer" href="https://github.com/Mark-Ammari/trello-copy"><img src={sourcecode} alt="source-code" /></a>
            </div>
        </footer>
    );
};

export default Footer;