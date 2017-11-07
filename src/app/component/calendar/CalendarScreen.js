import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {navigateToPage} from "../../redux/action/NavigationAction";
import Text from "../common/Text";
import StatusBar from "../common/StatusBar";
import ToolBar from "../common/ToolBar";
import {sizeFont, sizeWidth} from "../../util/Size";
import {APP_COLOR} from "../../../res/style/AppStyle";

class CalendarScreen extends Component {

    constructor(props) {
        super(props);
    }

    renderToolbarCenter = () => {
        return (
            <View style={styles.toolbarCenter}>
                <Text style={styles.toolbarText}>Overview</Text>
                <Image style={styles.down} source={require('../../../res/img/down.png')}/>
            </View>
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
                <TouchableOpacity style={styles.addPart}>
                    <Image resizeMode={'contain'} source={require('../../../res/img/add.png')} style={styles.add}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'stretch'} source={require('../../../res/img/bg.jpg')} style={styles.avatar}/>
                </TouchableOpacity>
            </View>
        )
    };

    renderItem = () => {
        return (
            <View style={styles.item}>
                <View style={styles.timePart}>
                    <Text style={styles.time}>8:30</Text>
                    <Text style={styles.ampm}>AM</Text>
                </View>

                <View style={styles.itemPart}>
                    <Text style={styles.title}>New Icons</Text>
                    <Text style={styles.desc}>Mobile App</Text>
                </View>

                <View style={styles.rightPart}>
                    <View style={styles.circle}/>
                </View>
            </View>
        )
    };

    renderCalendarItem = () => {
        return (
            <View style={styles.calendarItem}>
                <Text style={styles.day}>1</Text>
            </View>
        )
    };

    renderCalendar = () => {
        return (
            <View style={styles.calendar}>
                <View style={styles.calendarRow}>
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                </View>
                <View style={styles.calendarRow}>
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                </View>
                <View style={styles.calendarRow}>
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                </View>
                <View style={styles.calendarRow}>
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                </View>
                <View style={styles.calendarRow}>
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                </View>
                <View style={styles.calendarRow}>
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                    {this.renderCalendarItem()}
                </View>
            </View>
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
                <ScrollView>
                    {this.renderCalendar()}
                    {this.renderItem()}
                </ScrollView>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.actionItem}>
                        <Image style={styles.action} source={require('../../../res/img/completed.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItem}>
                        <Image style={styles.action} source={require('../../../res/img/active.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItem}>
                        <Image style={styles.action} source={require('../../../res/img/snoozed.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItem}>
                        <Image style={styles.action} source={require('../../../res/img/info.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    toolbarText: {
        fontSize: sizeFont(5),
        color: "#1d1d26"
    },
    menu: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    calendar: {
        backgroundColor: '#6563A4',
        padding: sizeWidth(4),
    },
    calendarRow: {
        flexDirection: 'row',
        paddingVertical: sizeWidth(3),
    },
    calendarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    day: {
        color: 'white',
        fontSize: sizeFont(4),
    },
    barRight: {
        flexDirection: 'row',
    },
    addPart: {
        marginRight: sizeWidth(5),
    },
    add: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    avatar: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        borderRadius: sizeWidth(3.33),
    },
    toolbarCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    down: {
        width: sizeWidth(3.5),
        height: sizeWidth(2.5),
        marginLeft: sizeWidth(2),
    },
    rightPart: {
        alignItems: 'center',
        width: sizeWidth(12),
    },
    circle: {
        width: sizeWidth(2),
        height: sizeWidth(2),
        marginTop: sizeWidth(1.5),
        borderRadius: sizeWidth(1),
        backgroundColor: '#50D2C2',
    },
    item: {
        paddingVertical: sizeWidth(6),
        flexDirection: 'row',
        alignItems: 'flex-start',
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
    time: {},
    ampm: {
        fontSize: sizeFont(2.5),
        opacity: 0.6,
        marginLeft: sizeWidth(1),
    },
    timePart: {
        width: sizeWidth(24),
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: sizeWidth(4),
    },
    bottom: {
        paddingVertical: sizeWidth(5),
        backgroundColor: APP_COLOR,
        flexDirection: 'row',
    },
    actionItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    action: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        tintColor: '#ffffff',
    }
});

export default connect(
    state => ({}),
    {
        navigateToPage,
    }
)(CalendarScreen);