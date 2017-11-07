import React, {Component} from 'react';
import {
    FlatList, Image, ImageBackground, ScrollView, StyleSheet, TextInput, TouchableOpacity,
    View
} from 'react-native';
import {connect} from "react-redux";
import {navigateToPage} from "../../redux/action/NavigationAction";
import {sizeFont, sizeWidth} from "../../util/Size";
import Text from "../common/Text";
import ToolBar from "../common/ToolBar";
import StatusBar from "../common/StatusBar";
import {APP_COLOR, APP_TEXT_COLOR} from "../../../res/style/AppStyle";

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            birthday: null,
        }
    }

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        )
    };

    renderToolbarCenter = () => {
        return (
            <Text style={styles.toolbarText}>Sign up</Text>
        )
    };

    renderToolbarLeft = () => {
        return (
            <TouchableOpacity>
                <Image resizeMode={'contain'} source={require('../../../res/img/close.png')} style={styles.close}/>
            </TouchableOpacity>
        )
    };

    render() {
        const {name, email, password, birthday} = this.props;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
                <ToolBar
                    left={this.renderToolbarLeft()}
                    center={this.renderToolbarCenter()}
                />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.avatar}>
                        <Image source={require('../../../res/img/add.png')} style={styles.add}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Name</Text>
                            <TextInput
                                value={name}
                                onChangeText={(name) => this.setState({name})}
                                underlineColorAndroid={'transparent'}
                                style={styles.itemValue} />
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Email</Text>
                            <TextInput
                                value={email}
                                onChangeText={(email) => this.setState({email})}
                                underlineColorAndroid={'transparent'}
                                style={styles.itemValue} />
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Password</Text>
                            <TextInput
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(password) => this.setState({password})}
                                underlineColorAndroid={'transparent'}
                                style={styles.itemValue} />
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Birthday</Text>
                            <TextInput
                                value={birthday}
                                onChangeText={(birthday) => this.setState({birthday})}
                                underlineColorAndroid={'transparent'}
                                style={styles.itemValue} />
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.bottom}>
                    <Image source={require('../../../res/img/done.png')} style={styles.tick}/>
                </TouchableOpacity>
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
        height: sizeWidth(58.67),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: APP_COLOR,
    },
    avatar: {
        width: sizeWidth(30),
        height: sizeWidth(30),
        borderRadius: sizeWidth(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    add: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        tintColor: APP_COLOR,
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
    close: {
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
    itemValue: {
        fontSize: sizeFont(4),
    },
    itemContent: {
        flex: 1,
    },
});

export default connect(
    state => ({
    }),
    {
        navigateToPage,
    }
)(SignUpScreen);