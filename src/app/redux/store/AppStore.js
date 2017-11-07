import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {apolloReducer} from "../reducer/ApolloReducer";
import {navigationReducer} from "../reducer/NavigationReducer";
import {groupReducer} from "../reducer/GroupReducer";

const reducer = combineReducers({
    apollo: apolloReducer,
    nav: navigationReducer,
    group: groupReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));