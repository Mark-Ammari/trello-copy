import * as actionType from '../actions/actionTypes';

const initialState = {
    boardList: {},
    color: ""
}

const fetchBoardListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_BOARDLIST_START:
            return {
                ...state
            };
        case actionType.FETCH_BOARDLIST_FAIL:
            return {
                ...state
            };
        case actionType.FETCH_BOARDLIST_SUCCESS:
            return {
                ...state,
                boardList: action.res,
                color: action.color
            };
        default: return state;
    };
};

export default fetchBoardListReducer;