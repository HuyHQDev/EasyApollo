import React, {Component} from 'react';
import {
    FlatList, Image, ImageBackground, ScrollView, StyleSheet, Switch, TextInput, TouchableOpacity,
    View
} from 'react-native';
import {connect} from "react-redux";
import {navigateToPage} from "../../redux/action/NavigationAction";
import {sizeFont, sizeWidth} from "../../util/Size";
import Text from "../common/Text";
import ToolBar from "../common/ToolBar";
import StatusBar from "../common/StatusBar";
import {APP_COLOR, APP_TEXT_COLOR} from "../../../res/style/AppStyle";

class SettingScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
        }
    }

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        )
    };

    renderToolbarCenter = () => {
        return (
            <Text style={styles.toolbarText}>Settings</Text>
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
                    <Image resizeMode={'contain'} source={require('../../../res/img/image.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'contain'} source={require('../../../res/img/logout.png')} style={styles.logout}/>
                </TouchableOpacity>
            </View>
        )
    };

    render() {
        const {title, description} = this.props;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
                <ToolBar
                    left={this.renderToolbarLeft()}
                    center={this.renderToolbarCenter()}
                    right={this.renderToolbarRight()}
                />
                <View style={styles.header}>
                    <Image style={styles.avatar} source={require('../../../res/img/bg.jpg')}/>
                </View>
                <ScrollView>
                    <View style={styles.groupPart}>
                        <Text style={styles.group}>GENERAL</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Name</Text>
                            <Text style={styles.itemValue}>Marie Simpson</Text>
                        </View>
                    </View>
                    {this.renderSeparator()}
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Email</Text>
                            <Text style={styles.itemValue}>marie@invisionapp.com</Text>
                        </View>
                    </View>
                    {this.renderSeparator()}
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Password</Text>
                            <Text style={styles.itemValue}>*******</Text>
                        </View>
                    </View>
                    {this.renderSeparator()}
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Birthday</Text>
                            <Text style={styles.itemValue}>January 12, 1976</Text>
                        </View>
                    </View>
                    <View style={styles.groupPart}>
                        <Text style={styles.group}>NOTIFICATION</Text>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.notiPart}>
                            <Text style={styles.noti}>Email Notifications</Text>
                            <Switch
                                onTintColor={APP_COLOR}
                                />
                        </View>
                    </View>
                    {this.renderSeparator()}
                    <View style={styles.item}>
                        <View style={styles.notiPart}>
                            <Text style={styles.noti}>Phone Notifications</Text>
                            <Switch
                                onTintColor={APP_COLOR}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        padding: sizeWidth(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F9',
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
    image: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    tick: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: sizeWidth(16),
        backgroundColor: '#6563A4',
    },
    avatar: {
        width: sizeWidth(24),
        height: sizeWidth(24),
        borderRadius: sizeWidth(12),
    },
    item: {
        flexDirection: 'row',
        paddingVertical: sizeWidth(3),
        paddingHorizontal: sizeWidth(6),
        alignItems: 'center',
    },
    itemTitle: {
        fontSize: sizeFont(3.5),
        color: '#888888',
        marginBottom: sizeWidth(2),
    },
    noti: {
        fontSize: sizeFont(4),
        flex: 1,
    },
    notiPart: {
        flexDirection: 'row',
        paddingVertical: sizeWidth(2),
        alignItems: 'center',
    },
    itemValue: {
        fontSize: sizeFont(4),
    },
    itemContent: {
        flex: 1,
    },

    logout: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        marginLeft: sizeWidth(5),
    },
    groupPart: {
      backgroundColor: '#eeeeee',
        paddingVertical: sizeWidth(4),
        paddingHorizontal: sizeWidth(6),
    },
    group: {

    }
});

export default connect(
    state => ({
    }),
    {
        navigateToPage,
    }
)(SettingScreen);