import React, { Component } from 'react';
import { Dialog, Button, DialogActions, DialogContent, Typography, DialogContentText, DialogTitle, } from '@material-ui/core/';
import AddCardBtn from '../AddCardBtn/AddCardBtn';
import classes from './CardModal.module.css';
import Dropdown from '../Dropdown/Dropdown';

class CardModal extends Component {
    // const[open, setOpesn] = React.useState(false);
    state = {
        open: false
    }
    handleClickOpen = () => {
        this.setState({ open: true })
    };

    handleClose = () => {
        this.setState({ open: false })
    };
    render() {
        return (
            <div className={classes.CardModal}>
                <span onClick={this.handleClickOpen}>{this.props.btn}</span>
                <Dialog
                    fullWidth
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogContent>
                        <div className={classes.DialogContent}>
                            <DialogTitle className={classes.margin} id="responsive-dialog-title">Title</DialogTitle>
                            <Typography component="h6" variant="h6">{this.props.cardtitle}</Typography>
                        </div>
                        <div className={classes.DialogContent}>
                            <DialogTitle className={classes.margin} id="responsive-dialog-title">Issue Type</DialogTitle>
                            <Typography component="h6" variant="h6">{this.props.cardissue}</Typography>
                        </div>
                        <div className={classes.MultilineContent}>
                            <DialogTitle>Description</DialogTitle>
                            <Typography component="h6" variant="h6">{this.props.carddescription}</Typography>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <span onClick={this.handleClose}>{this.props.savebtn}</span>
                        <Button onClick={this.handleClose} color="secondary">Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };
};

export default CardModal;
