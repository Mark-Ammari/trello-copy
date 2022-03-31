import Axios from 'axios';
import * as actionType from './actionTypes';
import { fetchBoards } from './fetchAction';

export const deleteBoardStart = () => {
    return {
        type: actionType.DELETE_BOARD_START
    };
};

export const deleteBoardFail = () => {
    return {
        type: actionType.DELETE_BOARD_FAIL,
    };
};
   
export const deleteBoardSuccess = (res) => {
    return {
        type: actionType.DELETE_BOARD_SUCCESS,
        res: res
    };
};

export const deleteBoard = (index) => {
    return dispatch => {
        dispatch(deleteBoardStart())
        Axios.delete(`/v1/api/deleteboard/${index}`)
        .then(res => {
            dispatch(deleteBoardSuccess(res));
            dispatch(fetchBoards())
        })
        .catch(error => {
            console.log(error);
            dispatch(deleteBoardFail());
        });
    };
};

export const deleteCardStart = () => {
    return {
        type: actionType.DELETE_CARD_START
    };
};

export const deleteCardFail = () => {
    return {
        type: actionType.DELETE_CARD_FAIL,
    };
};
   
export const deleteCardSuccess = (res) => {
    return {
        type: actionType.DELETE_CARD_SUCCESS,
        res: res
    };
};

export const deleteCard = (index, indexTwo) => {
    return dispatch => {
        dispatch(deleteCardStart())
        Axios.delete(`/v1/api/deleteboard/${index}/deletecard/${indexTwo}`)
        .then(res => {
            console.log(res);
            dispatch(deleteCardSuccess(res));
            dispatch(fetchBoards())
        })
        .catch(error => {
            console.log(error);
            dispatch(deleteCardFail());
        });
    };
};