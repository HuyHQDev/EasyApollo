import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {navigateToPage, resetToPage} from "../../redux/action/NavigationAction";
import {sizeFont, sizeWidth} from "../../util/Size";
import StatusBar from "../common/StatusBar";
import ToolBar from "../common/ToolBar";


class OverviewScreen extends Component {

    constructor(props) {
        super(props);
    }

    goToPage = (pageName) => {
        const {resetToPage} = this.props;
        resetToPage(pageName);
    };

    renderToolbarCenter = () => {
        return (
            <Text style={styles.toolbarText}>Overview</Text>
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
                    <Image resizeMode={'contain'} source={require('../../../res/img/search.png')} style={styles.search}/>
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
                <View style={styles.periodPart}>
                    <TouchableOpacity style={styles.period}>
                        <Text>DAY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.period}>
                        <Text>WEEK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.period}>
                        <Text>MONTH</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.milestonePart}>
                    <Image resizeMode={'contain'} style={styles.previous} source={require('../../../res/img/left.png')}/>
                    <Text style={styles.milestone}>February</Text>
                    <Image resizeMode={'contain'} style={styles.next} source={require('../../../res/img/right.png')}/>
                </View>
                <View style={styles.statePart}>
                    <TouchableOpacity style={styles.completed}>
                        <Text style={styles.state}>COMPLETED</Text>
                        <Text style={styles.count}>16</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.overdue}>
                        <Text style={styles.state}>COMPLETED</Text>
                        <Text style={styles.count}>16</Text>
                    </TouchableOpacity>
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
    addPart: {
        marginRight: sizeWidth(5),
    },
    add: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    search: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    header: {
        padding: sizeWidth(8),
        alignItems: 'center',
    },
    avatar: {
        width: sizeWidth(24),
        height: sizeWidth(24),
        borderRadius: sizeWidth(12),
        marginBottom: sizeWidth(4),
    },
    nickname: {
        fontSize: sizeFont(7),
        color: "#1d1d26",
        marginBottom: sizeWidth(2),
    },
    status: {
        fontSize: sizeFont(4),
        color: "#1d1d26",
        opacity: 0.5,

    },
    statePart: {
        flexDirection: 'row',
    },
    completed: {
        padding: sizeWidth(4),
        backgroundColor: '#50D2C2',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    overdue: {
        padding: sizeWidth(4),
        backgroundColor: '#D667CD',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    state: {
        fontSize: sizeFont(4),
        color: '#ffffff',
        marginBottom: sizeWidth(2),
    },
    count: {
        fontSize: sizeFont(9),
        color: '#ffffff'
    },
    item: {
        paddingVertical: sizeWidth(6),
        flexDirection: 'row',
        alignItems: 'flex-start',
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
        marginLeft: sizeWidth(4),
    },
    periodPart: {
        flexDirection: 'row',
        paddingVertical: sizeWidth(2),
    },
    period: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    milestonePart: {
        padding: sizeWidth(8),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee'
    },
    milestone: {
        fontSize: sizeFont(8),
        textAlign: 'center',
        flex: 1,
    },
    previous: {
        height: sizeWidth(3.67),
        width: sizeWidth(2.67),
    },
    next: {
        height: sizeWidth(3.67),
        width: sizeWidth(2.67),
    }
});

export default connect(
    null,
    {
        navigateToPage,
        resetToPage
    }
)(OverviewScreen);

