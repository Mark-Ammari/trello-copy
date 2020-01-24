import React, { Component } from 'react';
import classes from './ColorPicker.module.css';
import { connect } from 'react-redux';
import { putColor } from '../../store/actions/putAction';
class ColorPicker extends Component {

    handleColorChange = (e) => {
        this.props.onChangeColor(e.target.id)
    }
    
    render() {
        return (
            <div className={classes.ColorPicker}>
                <div onClick={this.handleColorChange} id="red" className={classes.Red}></div>
                <div onClick={this.handleColorChange} id="blue" className={classes.Blue}></div>
                <div onClick={this.handleColorChange} id="green" className={classes.Green}></div>
                <div onClick={this.handleColorChange} id="orange" className={classes.Orange}></div>
                <div onClick={this.handleColorChange} id="purple" className={classes.Purple}></div>
                <div onClick={this.handleColorChange} id="gray" className={classes.Gray}></div>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeColor: color => dispatch(putColor(color))
    }
}

export default connect(null, mapDispatchToProps)(ColorPicker);