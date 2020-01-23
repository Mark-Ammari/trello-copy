import * as actionType from './actionTypes';
import instance from '../../baseURL';

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
   
export const getBoardsSuccess = (res) => {
    return {
        type: actionType.FETCH_BOARDLIST_SUCCESS,
        res: res
    };
};

export const fetchBoards = () => {
    return dispatch => {
        dispatch(getBoardsStart())
        instance.get("/v1/api")
        .then(res => {
            // console.log(res.data);
            dispatch(getBoardsSuccess(res.data));
        })
        .catch(error => {
            console.log(error);
            dispatch(getBoardsFail());
        });
    };
};
