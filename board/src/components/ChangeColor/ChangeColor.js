import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FormatPaintRounded } from '@material-ui/icons';
import Popover from '@material-ui/core/Popover';
import ColorPicker from '../ColorPicker/ColorPicker';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            color: "white",
            fontSize: "15pt"
        },
    },
}));

export default function ChangeColor() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
        <div className={classes.root}>
            <IconButton onClick={handleClick} size="medium" aria-label="add to shopping cart">
                <FormatPaintRounded fontSize="small" />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <ColorPicker />
            </Popover>
        </div>
    );
}