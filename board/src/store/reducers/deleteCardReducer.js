import * as actionType from '../actions/actionTypes';

const initialState = {
    deleteCardMsg: {}
}

const deleteCardReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionType.DELETE_CARD_START:
        //     return {
        //         ...state
        //     };
        // case actionType.DELETE_CARD_FAIL:
        //     return {
        //         ...state
        //     };
        case actionType.DELETE_CARD_SUCCESS:
            return {
                ...state,
                deleteCardMsg: action.res
            };
        default: return state;
    };
};

export default deleteCardReducer;