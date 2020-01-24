import * as actionType from '../actions/actionTypes';

const initialState = {
    changeColor: ""
}

const putColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PUT_COLOR_START:
            return {
                ...state
            };
        case actionType.PUT_COLOR_FAIL:
            return {
                ...state
            };
        case actionType.PUT_COLOR_SUCCESS:
            return {
                ...state,
                changeColor: action.res
            };
        default: return state;
    };
};

export default putColorReducer;