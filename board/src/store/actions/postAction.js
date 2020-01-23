import * as actionType from './actionTypes';
import instance from '../../baseURL';
import { fetchBoards } from './fetchAction';

export const createNewBoardStart = () => {
    return {
        type: actionType.POST_NEWBOARD_START
    };
};

export const createNewBoardFail = () => {
    return {
        type: actionType.POST_NEWBOARD_FAIL,
    };
};
   
export const createNewBoardSuccess = (res) => {
    return {
        type: actionType.POST_NEWBOARD_SUCCESS,
        res: res
    };
};

export const postNewBoard = (title) => {
    return dispatch => {
        dispatch(createNewBoardStart())
        instance.post(`/v1/api/newBoard/${title}`)
        .then(res => {
            console.log(res);
            dispatch(createNewBoardSuccess(res));
            dispatch(fetchBoards())
        })
        .catch(error => {
            console.log(error);
            dispatch(createNewBoardFail());
        });
    };
};

export const createCardStart = () => {
    return {
        type: actionType.POST_NEWCARD_START
    };
};

export const createCardFail = () => {
    return {
        type: actionType.POST_NEWCARD_FAIL,
    };
};
   
export const createCardSuccess = (res) => {
    return {
        type: actionType.POST_NEWCARD_SUCCESS,
        res: res
    };
};

export const postCard = (index) => {
    return dispatch => {
        dispatch(createCardStart())
        instance.post(`/v1/api/newboard/${index}/newcard`)
        .then(res => {
            dispatch(createCardSuccess(res));
            dispatch(fetchBoards())
        })
        .catch(error => {
            console.log(error);
            dispatch(createCardFail());
        });
    };
};
