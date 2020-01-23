import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const CustomizedSelects = props => {
    const classes = useStyles();
    const [issue, setIssue] = React.useState('');
    const handleChange = event => {
        setIssue(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={props.cardissue}
                    variant="outlined"
                    margin="dense"
                    onChange={props.changeissue}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>Issue</em>
                    </MenuItem>
                    <MenuItem value="story">Story</MenuItem>
                    <MenuItem value="task">Task</MenuItem>
                    <MenuItem value="bug">Bug</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default CustomizedSelects;