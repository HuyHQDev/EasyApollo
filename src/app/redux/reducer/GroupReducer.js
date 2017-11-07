import {FETCH_GROUP_SUCCESS} from "../action/GroupAction";

const initialState = {
    groups: [],
};

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GROUP_SUCCESS:
            return {
                ...state,
                groups: action.payload.groups,
            };
        default:
            return state;
    }
};