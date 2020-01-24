import * as actionType from '../actions/actionTypes';

const initialState = {
    createNewBoardMsg: {}
}

const postNewBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.POST_NEWBOARD_START:
            return {
                ...state
            };
        case actionType.POST_NEWBOARD_FAIL:
            return {
                ...state
            };
        case actionType.POST_NEWBOARD_SUCCESS:
            return {
                ...state,
                createNewBoardMsg: action.res
            };
        default: return state;
    };
};

export default postNewBoardReducer;