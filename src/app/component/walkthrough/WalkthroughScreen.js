import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import {navigateToPage} from "../../redux/action/NavigationAction";

class WalkthroughScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    },
});

export default connect(
    state => ({
    }),
    {
        navigateToPage,
    }
)(WalkthroughScreen);