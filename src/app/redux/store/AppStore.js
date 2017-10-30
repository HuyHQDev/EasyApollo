import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {apolloReducer} from "../reducer/ApolloReducer";

const reducer = combineReducers({
    apollo: apolloReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));