import React from 'react';
import classes from './Card.module.css';
import { EditOutlined, BookRounded, BugReportRounded, CheckRounded } from '@material-ui/icons'
import { Typography } from '@material-ui/core';

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
            <Typography component="h6" className={classes.Typography}>{props.summary}</Typography>
            <div className={classes.IconsContainer}>
                <div className={classes.Icons}>
                    {issueType}
                    <EditOutlined style={{ color: "#c3c3c3" }} className={classes.Edit} />
                </div>
            </div>
        </div>
    );
};

export default card;