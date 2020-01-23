import * as actionType from '../actions/actionTypes';

const initialState = {
    boardList: {}
}

const fetchBoardListReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionType.FETCH_BOARDLIST_START:
        //     return {
        //         ...state
        //     };
        // case actionType.FETCH_BOARDLIST_FAIL:
        //     return {
        //         ...state
        //     };
        case actionType.FETCH_BOARDLIST_SUCCESS:
            return {
                ...state,
                boardList: action.res
            };
        default: return state;
    };
};

export default fetchBoardListReducer;