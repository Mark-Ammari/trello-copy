import React from 'react';
import classes from './AddListDropdown.module.css';
import { Button, Fab } from '@material-ui/core';
import { Close } from '@material-ui/icons'

const addListDropdown = props => {
    return (
        <div className={classes.AddListDropdownContainer}>
            <input onChange={props.onChange} value={props.value} autoFocus type="text" placeholder="Enter list title..." />
            <div className={classes.AddListDropdown}>
                <Button onClick={props.btnclick} style={{ marginRight: "0.5em" }} title="add list" variant="contained" color="primary">Add List</Button>
                <Fab onClick={props.fabclick} style={{ marginLeft: "0.5em" }} color="primary" size="small">
                    <Close fontSize="small" />
                </Fab>
            </div>
        </div>
    );
};

export default addListDropdown;

