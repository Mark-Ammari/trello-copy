import * as actionType from '../actions/actionTypes';

const initialState = {
    createNewCardMsg: {}
}

const postNewCardReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionType.POST_NEWCARD_START:
        //     return {
        //         ...state
        //     };
        // case actionType.POST_NEWCARD_FAIL:
        //     return {
        //         ...state
        //     };
        case actionType.POST_NEWCARD_SUCCESS:
            return {
                ...state,
                createNewCardMsg: action.res
            };
        default: return state;
    };
};

export default postNewCardReducer;