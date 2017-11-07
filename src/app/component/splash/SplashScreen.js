import React, {Component} from 'react';
import {connect} from "react-redux";
import {ImageBackground, View, StyleSheet} from "react-native";
import {getAccessToken} from "../../util/LocalStorage";
import {LOGIN_PAGE, GROUP_PAGE} from "../../router/AppNavigator";
import {resetToPage} from "../../redux/action/NavigationAction";

class SplashScreen extends Component {


    render() {
        return (
            <ImageBackground source={require('../../../res/img/bg_login.png')} style={styles.container}>
            </ImageBackground>
        );
    }

    componentDidMount = async () => {
        const {resetToPage} = this.props;
        const accessToken = await getAccessToken();
        if (accessToken) {
            return resetToPage(GROUP_PAGE)
        }
        resetToPage(LOGIN_PAGE);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    }
});

export default connect(null, {resetToPage})(SplashScreen);