import Axios from 'axios';
import * as actionType from './actionTypes';

export const getBoardsStart = () => {
    return {
        type: actionType.FETCH_BOARDLIST_START
    };
};

export const getBoardsFail = () => {
    return {
        type: actionType.FETCH_BOARDLIST_FAIL,
    };
};
   
export const getBoardsSuccess = (res, color) => {
    return {
        type: actionType.FETCH_BOARDLIST_SUCCESS,
        res: res,
        color: color
    };
};

export const fetchBoards = () => {
    return dispatch => {
        dispatch(getBoardsStart())
        Axios.get("/v1/api")
        .then(res => {
            // console.log(res.data);
            dispatch(getBoardsSuccess(res.data, res.data["boardListContainer"].color.color));
        })
        .catch(error => {
            console.log(error);
            dispatch(getBoardsFail());
        });
    };
};
