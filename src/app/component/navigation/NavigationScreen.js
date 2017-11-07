import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {navigateBack, navigateToPage, resetToPage} from "../../redux/action/NavigationAction";
import ToolBar from "../common/ToolBar";
import {sizeFont, sizeWidth} from "../../util/Size";
import StatusBar from "../common/StatusBar";
import Text from "../common/Text";
import {
    CALENDAR_PAGE, GROUP_PAGE, HOME_PAGE, LIST_PAGE, OVERVIEW_PAGE, PROFILE_PAGE, SETTING_PAGE,
    TIMELINE_PAGE
} from "../../router/AppNavigator";

class NavigationScreen extends Component {

    constructor(props) {
        super(props);
    }

    renderToolbarLeft = () => {
        return (
            <TouchableOpacity onPress={this.goBack}>
                <Image resizeMode={'contain'} source={require('../../../res/img/close.png')} style={styles.close}/>
            </TouchableOpacity>
        )
    };

    goBack = () => {
        const {navigateBack} = this.props;
        navigateBack();
    };

    goToPage = (pageName) => {
        const {resetToPage} = this.props;
        resetToPage(pageName);
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'#6563A4'} barStyle={'light-content'}/>
                <ToolBar
                    style={styles.toolbar}
                    left={this.renderToolbarLeft()}
                />
                <View style={styles.content}>
                    <View style={styles.navigationPart}>
                        <TouchableOpacity onPress={() => this.goToPage(HOME_PAGE)} style={styles.navigation}>
                            <Text style={styles.screen}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToPage(CALENDAR_PAGE)} style={styles.navigation}>
                            <Text style={styles.screen}>Calendar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToPage(OVERVIEW_PAGE)} style={styles.navigation}>
                            <Text style={styles.screen}>Overview</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToPage(GROUP_PAGE)} style={styles.navigation}>
                            <Text style={styles.screen}>Groups</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToPage(LIST_PAGE)} style={styles.navigation}>
                            <Text style={styles.screen}>Lists</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToPage(PROFILE_PAGE)} style={styles.navigation}>
                            <Text style={styles.screen}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.goToPage(TIMELINE_PAGE)} style={styles.navigation}>
                            <Text style={styles.screen}>Timeline</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={() => this.goToPage(SETTING_PAGE)} style={styles.actionItem}>
                            <Image resizeMode={'contain'} style={styles.settings} source={require('../../../res/img/settings.png')}/>
                            <Text style={styles.action}>SETTINGS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionItem}>
                            <Image resizeMode={'contain'} style={styles.logout} source={require('../../../res/img/logout.png')} />
                            <Text style={styles.action}>LOG OUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionItem: {
        padding: sizeWidth(10),
        alignItems: 'center',
    },
    action: {
        color: '#ffffff',
        fontSize: sizeFont(3.5),
        marginTop: sizeWidth(4),
    },
    settings: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        tintColor: '#ffffff'
    },
    logout: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        tintColor: '#ffffff'
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navigationPart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "#6563A4",
    },
    close: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        tintColor: '#ffffff'
    },
    toolbar: {
        backgroundColor: '#6563A4'
    },
    navigation: {
        marginVertical: sizeWidth(3),
    },
    screen: {
        fontSize: sizeFont(6),
        color: '#ffffff'
    },
});

export default connect(
    state => ({
    }),
    {
        navigateToPage,
        resetToPage,
        navigateBack,
    }
)(NavigationScreen);