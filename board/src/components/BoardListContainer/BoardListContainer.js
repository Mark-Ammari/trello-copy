import React, { Component } from 'react';
import classes from './BoardListContainer.module.css';
import AddListBtn from '../AddListBtn/AddListBtn';
import BoardList from '../BoardList/BoardList';
import { fetchBoards } from '../../store/actions/fetchAction';
import { deleteBoard } from '../../store/actions/deleteAction';
import { putCard } from '../../store/actions/putAction';
import { postCard } from '../../store/actions/postAction';
import { connect } from 'react-redux'
import CardModal from '../CardModal/CardModal';
import Card from '../Card/Card';
import { Button } from '@material-ui/core';

class BoardListContainer extends Component {
    state = {
        summary: "",
        description: "",
        issue: "",
    }
    componentDidMount() {
        this.props.onFetchBoardListData()
    }

    deleteBoardHandler = index => {
        this.props.onDeleteBoardListData(index)
    }

    changeTitleHandler = (e) => {
        this.setState({ summary: e.target.value })
    }

    changeDescriptionHandler = (e) => {
        this.setState({ description: e.target.value })
    }

    changeIssueHandler = (e) => {
        this.setState({ issue: e.target.value })
    }


    showCardsDataHandler = (index, indexTwo) => {
        // Object.values(this.props.boardList["boardListContainer"])
        //     Object.keys(title).filter(card => card !== "title")
        console.log(this.props.boardList["boardListContainer"][index][indexTwo])
        // this.setState({ 
        //     summary: summary,
        // })
    }

    changeCardDataHandler = (index, indexTwo, summary, description, issue) => {
        this.props.onChangeCardData(index, indexTwo, summary, description, issue);
    }
    addNewCardHandler = (index) => {
        this.props.onAddCard(index)
    }
    render() {
        let boards = null;
        if (Object.keys(this.props.boardList).length > 0) {
            boards = (Object.values(this.props.boardList["boardListContainer"]).map((title, key) => {
                return <BoardList addCard={() => this.addNewCardHandler(key)} onClick={() => this.deleteBoardHandler(key)} key={key} title={title.title} cards={
                    Object.keys(title).filter(card => card !== "title").map((card, index) => {
                        return <CardModal
                            cardtitle={title[card].summary}
                            carddescription={title[card].description}
                            cardissue={title[card].issueType}
                            savebtn={<Button
                                onClick={() => this.changeCardDataHandler(key, index, this.state.summary, this.state.description, this.props.issue)}
                                color="primary">Save</Button>}
                            key={index}
                            btn={<Card
                                
                                click={() => {}}
                                issue={title[card].issueType}
                                summary={title[card].summary}
                            />}
                        />
                    })
                } />
            }))
        } else {
            boards = null
        }
        return (
            <div className={classes.BoardListContainer}>
                {boards}
                <AddListBtn />
                <div className={classes.Border}></div>
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
        onFetchBoardListData: () => dispatch(fetchBoards()),
        onDeleteBoardListData: (index) => dispatch(deleteBoard(index)),
        onChangeCardData: (index, indexTwo, summary, description, issue) => dispatch(putCard(index, indexTwo, summary, description, issue)),
        onAddCard: (index) => dispatch(postCard(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardListContainer);