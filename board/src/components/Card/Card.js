import React from 'react';
import classes from './Card.module.css';
import { DeleteRounded, EditOutlined, BookRounded, BugReportRounded, CheckRounded } from '@material-ui/icons'
import { Typography, Fab } from '@material-ui/core';

const card = props => {

    let issueType = null

    switch (props.issue) {
        case "story": issueType = <BookRounded style={{ color: '#61bd4f' }} />
            break;
        case "task": issueType = <CheckRounded style={{ color: '#00c2e0' }} />
            break;
        case "bug": issueType = <BugReportRounded style={{ color: '#EB5a46' }} />
            break;
        default: issueType = null
            break;
    }
    return (
        <div onClick={props.click} className={classes.Card}>
            <Typography>{props.summary}</Typography>
            <div className={classes.Icons}>
                {issueType}
                <span onClick={props.deleteCard}><DeleteRounded color="secondary" /></span>
                <EditOutlined style={{ color: "#c3c3c3" }} className={classes.Edit} />
            </div>
        </div>
    );
};

export default card;