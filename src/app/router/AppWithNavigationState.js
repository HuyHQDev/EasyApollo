import React, {Component} from 'react';
import {addNavigationHelpers} from "react-navigation";
import {connect} from "react-redux";
import AppNavigator from "./AppNavigator";


class AppWithNavigationState extends Component {

    render() {
        const {dispatch, nav} = this.props;
        return (
            <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
        )
    }

}

export default connect(
    state => ({
        nav: state.nav
    })
)
(AppWithNavigationState);