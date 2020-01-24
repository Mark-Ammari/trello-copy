import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    margin: {
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const Dropdown = props => {
    const classes = useStyles();

    return (
        <div>
            <Select
                value={props.value}
                variant="outlined"
                margin="dense"
                onChange={props.onChange}
                className={classes.selectEmpty}
            >
                <MenuItem value="issue"><em>issue</em></MenuItem>
                <MenuItem value="story">story</MenuItem>
                <MenuItem value="task">task</MenuItem>
                <MenuItem value="bug">bug</MenuItem>
            </Select>
        </div>
    );
};

export default Dropdown;