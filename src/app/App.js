import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import AppWithNavigationState from "./router/AppWithNavigationState";
import {APP_COLOR, STATUS_BAR_HEIGHT} from "../res/style/AppStyle";
import StatusBar from "./component/common/StatusBar";

class App extends Component<{}> {

    componentDidMount = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <AppWithNavigationState/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(
    state => ({
    }),
    {
    }
)(App);
