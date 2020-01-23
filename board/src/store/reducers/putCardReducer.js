import * as actionType from '../actions/actionTypes';

const initialState = {
    changeCardMsg: {}
}

const putCardReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionType.PUT_CARD_START:
        //     return {
        //         ...state
        //     };
        // case actionType.PUT_CARD_FAIL:
        //     return {
        //         ...state
        //     };
        case actionType.PUT_CARD_SUCCESS:
            return {
                ...state,
                changeCardMsg: action.res
            };
        default: return state;
    };
};

export default putCardReducer;