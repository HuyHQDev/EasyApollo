import {FETCH_AUTHORS_SUCCESS} from "../action/ApolloAction";

const initialState = {
    authors: [],
};

export const apolloReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS_SUCCESS:
            return {
                ...state,
                authors: action.payload.authors,
            };
        default:
            return state;
    }
};