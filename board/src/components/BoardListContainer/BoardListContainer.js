import React, { Component } from 'react';
import classes from './BoardListContainer.module.css';
import AddListBtn from '../AddListBtn/AddListBtn';
import BoardList from '../BoardList/BoardList';
import { fetchBoards } from '../../store/actions/fetchAction';
import { deleteBoard } from '../../store/actions/deleteAction';
import { putCard } from '../../store/actions/putAction';
import { postCard } from '../../store/actions/postAction';
import { deleteCard } from '../../store/actions/deleteAction'
import { connect } from 'react-redux'
import CardModal from '../CardModal/CardModal';
import Dropdown from '../Dropdown/Dropdown';
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
        const board = Object.keys(this.props.boardList["boardListContainer"])[index]
        const card = Object.keys(this.props.boardList["boardListContainer"][board]).filter(card => card !== "title")[indexTwo]
        const cardObj = this.props.boardList["boardListContainer"][board][card]
        console.log(cardObj.issueType)
        this.setState({
            summary: cardObj.summary,
            description: cardObj.description,
            issue: cardObj.issueType || 'issue'
        })
    }

    changeCardDataHandler = (index, indexTwo, summary, description, issue) => {
        this.props.onChangeCardData(index, indexTwo, summary, description, issue);
    }
    addNewCardHandler = (index) => {
        this.props.onAddCard(index)
    }
    removeCardHandler = (index, indexTwo) => {
        this.props.onDeleteCard(index, indexTwo)
    }
    render() {
        let boards = null;
        console.log(this.state.summary, this.state.description, this.state.issue)
        if (Object.keys(this.props.boardList).length > 0) {
            boards = (Object.values(this.props.boardList["boardListContainer"]).map((title, key) => {
                return <BoardList addCard={() => this.addNewCardHandler(key)} onClick={() => this.deleteBoardHandler(key)} key={key} title={title.title} cards={
                    Object.keys(title).filter(card => card !== "title").map((card, index) => {
                        return <CardModal
                            cardtitle={this.state.summary}
                            carddescription={this.state.description}
                            dropdown={<Dropdown value={this.state.issue} onChange={this.changeIssueHandler} />}
                            cardissue={this.state.issue}
                            changecardissue={this.changeIssueHandler}
                            changecardtitle={this.changeTitleHandler}
                            changecarddescription={this.changeDescriptionHandler}
                            deletebtn={<Button
                                onClick={() => this.removeCardHandler(key, index)}
                                color="secondary">Delete</Button>}
                            savebtn={<Button
                                onClick={() => this.changeCardDataHandler(key, index, this.state.summary, this.state.description, this.state.issue)}
                                color="primary">Save</Button>}
                            key={index}
                            btn={<Card
                                click={() => this.showCardsDataHandler(key, index)}
                                issue={title[card].issueType}
                                summary={title[card].summary.length > 99 ? title[card].summary.substring(0, 99) + '...' : title[card].summary}
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
        onAddCard: (index) => dispatch(postCard(index)),
        onDeleteCard: (index, indexTwo) => dispatch((deleteCard(index, indexTwo)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardListContainer);