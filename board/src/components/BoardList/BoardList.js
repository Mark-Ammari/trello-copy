import React, { Component } from 'react';
import classes from './BoardList.module.css';
import { Typography, Fab } from '@material-ui/core'
import { DeleteRounded } from '@material-ui/icons'
import CardModal from '../CardModal/CardModal';
import AddCardBtn from '../AddCardBtn/AddCardBtn';
import { fetchBoards }  from '../../store/actions/fetchAction';
import { connect } from 'react-redux'

class BoardList extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className={classes.BoardList}>
                <div className={classes.BoardListContent}>
                    <Typography component="h6" variant="h6">{this.props.title}</Typography>
                    <Fab style={{margin: "0.5em 0em"}} color="secondary" onClick={this.props.onClick} size="small">
                        <DeleteRounded />
                    </Fab>
                </div>
                {this.props.cards}
                <div className={classes.Margin}></div>
                <AddCardBtn addCard={this.props.addCard} />
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        boardList: state.boardList.boardList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPostCardData: () => dispatch(fetchBoards())
    };
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(BoardList));