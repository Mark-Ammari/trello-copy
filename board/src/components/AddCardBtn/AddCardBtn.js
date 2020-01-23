import React from 'react';
import classes from './AddCardBtn.module.css';
import { Add } from '@material-ui/icons';

const addCardBtn = props => {
    return (
        <div className={classes.AddCardBtn} onClick={props.addCard}>
            <Add /> Add another card
        </div>
    );
};

export default addCardBtn;