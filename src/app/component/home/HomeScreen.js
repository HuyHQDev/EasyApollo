import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {navigateToPage, resetToPage} from "../../redux/action/NavigationAction";
import {sizeFont, sizeHeight, sizeWidth} from "../../util/Size";
import StatusBar from "../common/StatusBar";
import ToolBar from "../common/ToolBar";
import Text from "../common/Text";
import {APP_COLOR} from "../../../res/style/AppStyle";
import {CALENDAR_PAGE, NAVIGATION_PAGE, OVERVIEW_PAGE, PROFILE_PAGE} from "../../router/AppNavigator";


class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    goToPage = (pageName) => {
        const {resetToPage} = this.props;
        resetToPage(pageName);
    };

    renderToolbarLeft = () => {
        return (
            <TouchableOpacity onPress={() => this.goToPage(NAVIGATION_PAGE)}>
                <Image resizeMode={'contain'} source={require('../../../res/img/menu.png')} style={styles.menu}/>
            </TouchableOpacity>
        )
    };

    renderToolbarRight = () => {
        return (
            <View style={styles.barRight}>
                <Text style={styles.tempature}>62</Text>
                <TouchableOpacity  onPress={() => this.goToPage(PROFILE_PAGE)}>
                    <Image style={styles.avatar} source={require('../../../res/img/bg.jpg')} />
                </TouchableOpacity>
            </View>
        )
    };



    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../../res/img/bg_login.png')}>
                <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'dark-content'}/>
                <ToolBar
                    style={styles.toolbar}
                    left={this.renderToolbarLeft()}
                    right={this.renderToolbarRight()}
                />
                <View style={styles.content}>
                    <Text style={styles.greeting}>Good Morning!</Text>
                    <TouchableOpacity onPress={() => this.goToPage(CALENDAR_PAGE)}>
                        <View style={styles.circle}>
                            <Text style={styles.date}>16</Text>
                            <Text style={styles.dayOfWeek}>Tue</Text>
                        </View>
                        <View style={styles.countPart}>
                            <Text style={styles.count}>8</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottom}  onPress={() => this.goToPage(OVERVIEW_PAGE)}>
                        <Text style={styles.time}>FEBRUARY 2015</Text>
                        <Image source={require('../../../res/img/down.png')} style={styles.down}/>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
      backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    toolbarText: {
        fontSize: sizeFont(5),
        color: "#1d1d26"
    },
    menu: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    barRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tempature: {
        fontSize: sizeFont(4),
        marginRight: sizeWidth(4),
    },
    avatar: {
        width: sizeWidth(8),
        height: sizeWidth(8),
        borderRadius: sizeWidth(4),
    },
    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    time: {
        fontSize: sizeFont(4),
        opacity: 0.8,
        marginBottom: sizeWidth(2),
    },
    down: {
        width: sizeWidth(5),
        height: sizeHeight(3)
    },
    bottom: {
        alignItems: 'center',
    },
    greeting: {
        fontSize: sizeFont(8),
        color: '#1d1d26'
    },
    date: {
        color: '#ffffff',
        fontSize: sizeFont(14),
    },
    dayOfWeek: {
        color: '#ffffff',
        fontSize: sizeFont(4),
    },
    circle: {
        width: sizeWidth(50),
        height: sizeWidth(50),
        borderRadius: sizeWidth(25),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: APP_COLOR,
    },
    count: {
        fontSize: sizeFont(4),
        color: '#ffffff',

    },
    countPart: {
        backgroundColor: '#6563A4',
        borderRadius: sizeWidth(7),
        position: 'absolute',
        top: sizeWidth(3),

        paddingVertical: sizeWidth(2),
        paddingHorizontal: sizeWidth(3.2),
        right: sizeWidth(1),
    }
});

export default connect(
    null,
    {
        navigateToPage,
        resetToPage,
    }
)(HomeScreen);

