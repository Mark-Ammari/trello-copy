import React, { Component } from 'react';
import classes from './AddListBtn.module.css';
import { Add } from '@material-ui/icons'
import Popover from '@material-ui/core/Popover';
import AddListDropdown from '../AddListDropdown/AddListDropdown';
import { connect } from 'react-redux';
import { postNewBoard } from '../../store/actions/postAction';

class AddListBtn extends Component {
    state = {
        anchorEl: null,
        value: ""
    }

    handleClick = e => {
        this.setState({ anchorEl: e.currentTarget })
    };

    handleClose = () => {
        this.setState({ anchorEl: null })
    };

    changeTextFieldValueHandler = (e) => {
        this.setState({ 
            value: e.target.value 
        });
    };

    createBoardHandler = () => {
        this.props.onCreateNewBoard(this.state.value)
        this.handleClose()
    };
    
    render() {
        return (
            <>
                <div className={classes.AddListBtn} onClick={this.handleClick}>
                    <Add /> Add a list
                </div>
                <Popover
                    open={Boolean(this.state.anchorEl)}
                    anchorEl={this.state.anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <AddListDropdown btnclick={this.createBoardHandler} onChange={this.changeTextFieldValueHandler} value={this.state.value} fabclick={this.handleClose} />
                </Popover>
            </>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateNewBoard: (title) => dispatch(postNewBoard(title))
    };
};

export default connect(null, mapDispatchToProps)(AddListBtn);