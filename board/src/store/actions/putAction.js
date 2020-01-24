import * as actionType from './actionTypes';
import instance from '../../baseURL';
import { fetchBoards } from './fetchAction'

export const changeCardStart = () => {
    return {
        type: actionType.PUT_CARD_START
    };
};

export const changeCardFail = () => {
    return {
        type: actionType.PUT_CARD_FAIL,
    };
};
   
export const changeCardSuccess = (res) => {
    return {
        type: actionType.PUT_CARD_SUCCESS,
        res: res
    };
};

export const putCard = (index, indexTwo, summary, description, issue) => {
    return dispatch => {
        dispatch(changeCardStart())
        instance.put(`/v1/api/changecard/${index}/${indexTwo}/`, null, {params: {
            summary: summary,
            description: description,
            issue: issue,
        }})
        .then(res => {
            console.log(res);
            dispatch(changeCardSuccess(res));
            dispatch(fetchBoards())
        })
        .catch(error => {
            console.log(error);
            dispatch(changeCardFail());
        });
    };
};

export const changeColorStart = () => {
    return {
        type: actionType.PUT_COLOR_START
    };
};

export const changeColorFail = () => {
    return {
        type: actionType.PUT_COLOR_FAIL,
    };
};
   
export const changeColorSuccess = (res) => {
    return {
        type: actionType.PUT_COLOR_SUCCESS,
        res: res
    };
};

export const putColor = (color) => {
    return dispatch => {
        dispatch(changeColorStart())
        instance.put(`/v1/api/changecolor/`, null, {params: {
            color: color
        }})
        .then(res => {
            dispatch(changeColorSuccess(res.data.color));
            dispatch(fetchBoards())
        })
        .catch(error => {
            console.log(error);
            dispatch(changeColorFail());
        });
    };
};