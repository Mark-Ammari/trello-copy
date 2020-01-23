import * as actionType from '../actions/actionTypes';

const initialState = {
    deleteBoardMsg: {}
}

const deleteBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionType.DELETE_BOARD_START:
        //     return {
        //         ...state
        //     };
        // case actionType.DELETE_BOARD_FAIL:
        //     return {
        //         ...state
        //     };
        case actionType.DELETE_BOARD_SUCCESS:
            return {
                ...state,
                deleteBoardMsg: action.res
            };
        default: return state;
    };
};

export default deleteBoardReducer;