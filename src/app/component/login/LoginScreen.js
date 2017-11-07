import React, {Component} from 'react';
import {Image, StyleSheet, View, ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import {connect} from "react-redux";
import {navigateToPage} from "../../redux/action/NavigationAction";
import {sizeFont, sizeWidth} from "../../util/Size";
import {APP_COLOR} from "../../../res/style/AppStyle";
import StatusBar from "../common/StatusBar";
import Text from "../common/Text";
import {signIn} from "../../redux/action/AuthAction";

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }

    renderSignUpPart = () => {
        return (
            <View style={styles.signUpPart}>
                <Text style={styles.dontHaveAccount}>Don’t have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    };

    signInCommand = () => {
        const {username, password} = this.state;
        const {signIn} = this.props;
        signIn(username, password);
    };

    renderSignInPart = () => {
        return (
            <TouchableOpacity
                onPress={this.signInCommand}
                style={styles.signInPart}>
                <Text style={styles.signIn}>Sign In</Text>
            </TouchableOpacity>
        )
    };

    renderUsernamePart = () => {
        const {username} = this.state;
        return (
            <View style={styles.usernamePart}>
                <Text style={styles.usernameTitle}>Username</Text>
                <TextInput
                    value={username}
                    onChangeText={(username) => this.setState({username})}
                    underlineColorAndroid={'transparent'}
                    style={styles.username}/>
            </View>
        )
    };

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        )
    };

    renderPasswordPart = () => {
        const {password} = this.state;
        return (
            <View style={styles.passwordPart}>
                <View style={styles.passwordInput}>
                    <Text style={styles.passwordTitle}>Password</Text>
                    <TextInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => this.setState({password})}
                        underlineColorAndroid={'transparent'}
                        style={styles.password} />
                </View>
                <TouchableOpacity style={styles.attentionPart}>
                    <Image style={styles.attention} source={require('../../../res/img/attention.png')}/>
                </TouchableOpacity>
            </View>
        )
    };

    render() {
        return (
            <ImageBackground source={require('../../../res/img/bg_login.png')} style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}/>
                <View style={styles.iconPart}>
                    <Image style={styles.appIcon} source={require('../../../res/img/mark.png')}/>
                    <Text style={styles.getStarted}>Get Started!</Text>
                </View>
                <View style={styles.inputPart}>
                    <View>
                        {this.renderUsernamePart()}
                        {this.renderSeparator()}
                        {this.renderPasswordPart()}
                    </View>
                    <View>
                        {this.renderSignInPart()}
                        {this.renderSignUpPart()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    attentionPart: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    attention: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    container: {
        flex: 1,
        backgroundColor: '#00897B'
    },
    appIcon: {
        width: sizeWidth(60),
        height: sizeWidth(60),
    },
    iconPart: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputPart: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    signUp: {
        color: "#ffffff",
        marginLeft: sizeWidth(1.33),
    },
    dontHaveAccount: {
        opacity: 0.7,
        color: "#ffffff"
    },
    signUpPart: {
        marginVertical: sizeWidth(6.67),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signIn: {
        fontSize: sizeFont(4),
        color: "#ffffff"
    },
    signInPart: {
        width: sizeWidth(100),
        height: sizeWidth(16),
        backgroundColor: "#6563A4",
        justifyContent: 'center',
        alignItems: 'center',
    },
    usernamePart: {
        paddingHorizontal: sizeWidth(6.67),
        paddingBottom: sizeWidth(2.67),
    },
    passwordPart: {
        flexDirection: 'row',
        paddingHorizontal: sizeWidth(6.67),
        paddingBottom: sizeWidth(2.67),
        paddingTop: sizeWidth(6.67),
    },
    passwordInput: {
        flex: 1,
    },
    leftIcon: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        opacity: 0.6,
        marginRight: sizeWidth(4),
    },
    username: {
        fontSize: sizeFont(3.73),
        color: 'white',
    },
    password: {
        fontSize: sizeFont(3.73),
        color: 'white',
    },
    getStarted: {
        color :'#ffffff',
        marginTop: sizeWidth(2),
        fontSize: sizeFont(8),
    },
    separator: {
        height: 1,
        backgroundColor: "#ffffff",
        opacity: 0.05,
    },
    usernameTitle: {
        color: '#ffffff',
        marginBottom: sizeWidth(2),
    },
    passwordTitle: {
        color: '#ffffff',
        marginBottom: sizeWidth(2),
    }
});

export default connect(
    state => ({
    }),
    {
        navigateToPage,
        signIn,
    }
)(LoginScreen);