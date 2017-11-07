import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import PaginationList from "../common/PaginationList";
import {navigateToPage} from "../../redux/action/NavigationAction";
import {sizeFont, sizeWidth} from "../../util/Size";
import StatusBar from "../common/StatusBar";
import ToolBar from "../common/ToolBar";
import {APP_COLOR} from "../../../res/style/AppStyle";


class TimelineScreen extends Component {

    constructor(props) {
        super(props);
    }


    renderToolbarCenter = () => {
        return (
            <Text style={styles.toolbarText}>Timeline</Text>
        )
    };

    renderToolbarLeft = () => {
        return (
            <TouchableOpacity>
                <Image resizeMode={'contain'} source={require('../../../res/img/menu.png')} style={styles.menu}/>
            </TouchableOpacity>
        )
    };

    renderToolbarRight = () => {
        return (
            <View style={styles.barRight}>
                <TouchableOpacity>
                    <Image resizeMode={'contain'} source={require('../../../res/img/search.png')} style={styles.search}/>
                </TouchableOpacity>
            </View>
        )
    };

    renderItem = () => {
        return (
            <View style={styles.item}>
                <View style={styles.leftPart}>
                    <View style={styles.circle}/>
                </View>
                <View style={styles.timePart}>
                    <Text style={styles.time}>8:30</Text>
                    <Text style={styles.ampm}>AM</Text>
                </View>
                <View style={styles.itemPart}>
                    <Text style={styles.title}>New Icons</Text>
                    <Text style={styles.desc}>Mobile App</Text>
                </View>
            </View>
        )
    };

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
                <ToolBar
                    left={this.renderToolbarLeft()}
                    center={this.renderToolbarCenter()}
                    right={this.renderToolbarRight()}
                />
                <View style={styles.header}>
                    <Image source={require('../../../res/img/bg.jpg')} style={styles.avatar}/>
                    <Text style={styles.period}>FEBRUARY</Text>
                    <Text style={styles.event}>69 EVENTS</Text>
                </View>
                {this.renderItem()}
                {this.renderSeparator()}
                {this.renderItem()}
                {this.renderSeparator()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    separator: {
        height: 1,
        backgroundColor: "#1d1d26",
        opacity: 0.05,
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
    },
    search: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    header: {
        backgroundColor: APP_COLOR,
        padding: sizeWidth(5),
        alignItems: 'center',
    },
    avatar: {
        width: sizeWidth(24),
        height: sizeWidth(24),
        borderRadius: sizeWidth(12),
        marginBottom: sizeWidth(4),
    },
    period: {
        fontSize: sizeFont(7),
        color: "#ffffff",
        marginBottom: sizeWidth(2),
    },
    event: {
        fontSize: sizeFont(4),
        color: "#ffffff",
    },
    item: {
        paddingVertical: sizeWidth(6),
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    leftPart: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: sizeWidth(12),
    },
    circle: {
        width: sizeWidth(2),
        height: sizeWidth(2),
        marginTop: sizeWidth(1.5),
        borderRadius: sizeWidth(1),
        backgroundColor: '#50D2C2',
    },
    itemPart: {
        flex: 1,
    },
    title: {
        marginBottom: sizeWidth(1),
    },
    desc: {
        fontSize: sizeFont(3),
        opacity: 0.7
    },
    time: {

    },
    ampm: {
        fontSize: sizeFont(2.5),
        opacity: 0.6,
        marginLeft: sizeWidth(1),
    },
    timePart: {
        width: sizeWidth(24),
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
});

export default connect(
    null,
    {
        navigateToPage
    }
)(TimelineScreen);

