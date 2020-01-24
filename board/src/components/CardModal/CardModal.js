import React, { useState } from 'react';
import { makeStyles, Dialog, Button, DialogActions, DialogContent, Typography, DialogContentText, DialogTitle, TextField, IconButton, } from '@material-ui/core/';
import classes from './CardModal.module.css';
import { ReportProblemRounded, FormatAlignLeftRounded, SubtitlesRounded, CloseRounded } from '@material-ui/icons'
import TextAreaAutosize from 'react-textarea-autosize'

const useStyles = makeStyles({
    root: {
        background: "#f4f5f7"
    },
    icons: {
        marginRight: "7px",
        color: "#172b4d",
        fontSize: '20pt'
    }
});

const CardModal = props => {
    const styles = useStyles();
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };
    return (
        <div className={classes.CardModal}>
            <span onClick={handleClickOpen}>{props.btn}</span>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogActions className={styles.root}>
                    <IconButton size="small" onClick={handleClose}>
                        <CloseRounded fontSize="small" />
                    </IconButton>
                </DialogActions>
                <DialogContent className={styles.root}>
                    <div className={classes.DialogContent}>
                        <SubtitlesRounded className={styles.icons} fontSize="large" />
                        <TextAreaAutosize onChange={props.changecardtitle} className={classes.Input} minRows={2} maxRows={5} defaultValue={props.cardtitle} />
                    </div>
                    <div className={[classes.DialogContent, classes.IssueType].join(' ')}>
                        <ReportProblemRounded className={styles.icons} fontSize="large" />
                        {props.dropdown}
                    </div>
                    <div className={classes.MultilineContent}>
                        <FormatAlignLeftRounded className={styles.icons} fontSize="large" />
                        <textarea onChange={props.changecarddescription} className={classes.TextArea} rows={5} defaultValue={props.carddescription}></textarea>
                    </div>
                </DialogContent>
                <DialogActions className={styles.root}>
                    <span onClick={handleClose}>{props.savebtn}</span>
                    <span onClick={handleClose}>{props.deletebtn}</span>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CardModal;
