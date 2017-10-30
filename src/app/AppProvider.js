import React, {Component} from 'react';

import {Provider} from "react-redux";
import App from "./App";
import {store} from "./redux/store/AppStore";


export default class AppProvider extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

