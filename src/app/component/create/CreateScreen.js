import React, {Component} from 'react';
import {
    FlatList, Image, ImageBackground, ScrollView, StyleSheet, TextInput, TouchableOpacity,
    View
} from 'react-native';
import {connect} from "react-redux";
import {navigateBack, navigateToPage} from "../../redux/action/NavigationAction";
import {sizeFont, sizeWidth} from "../../util/Size";
import Text from "../common/Text";
import ToolBar from "../common/ToolBar";
import StatusBar from "../common/StatusBar";
import {APP_COLOR, APP_TEXT_COLOR} from "../../../res/style/AppStyle";

class CreateScreen extends Component {

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
            <Text style={styles.toolbarText}>Create New</Text>
        )
    };

    goBack = () => {
        const {navigateBack} = this.props;
        navigateBack();
    };

    renderToolbarLeft = () => {
        return (
            <TouchableOpacity onPress={this.goBack}>
                <Image resizeMode={'contain'} source={require('../../../res/img/close.png')} style={styles.close}/>
            </TouchableOpacity>
        )
    };

    renderToolbarRight = () => {
        return (
            <View style={styles.barRight}>
                <TouchableOpacity>
                    <Image resizeMode={'contain'} source={require('../../../res/img/image.png')} style={styles.image}/>
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
                    <TextInput
                        placeholder={'Add Title'}
                        placeholderTextColor={APP_TEXT_COLOR}
                        value={title}
                        onChangeText={(title) => this.setState({title})}
                        underlineColorAndroid={'transparent'}
                        style={styles.title} />
                    <TextInput
                        placeholder={'ADD DESCRIPTION'}
                        placeholderTextColor={'#888888'}
                        value={description}
                        onChangeText={(description) => this.setState({description})}
                        underlineColorAndroid={'transparent'}
                        style={styles.description}
                    />
                </View>
                <ScrollView>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Date</Text>
                            <Text style={styles.itemValue}>Tuesday, February 16, 2015</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../../res/img/add.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Date</Text>
                            <Text style={styles.itemValue}>9:00 AM</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../../res/img/add.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Location</Text>
                            <Text style={styles.itemValue}>Starbucks</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../../res/img/navigate.png')} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemTitle}>Repeat</Text>
                            <Text style={styles.itemValue}>Monthly</Text>
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
    close: {
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
    title: {
        width: sizeWidth(70),
        textAlign: 'center',
        fontSize: sizeFont(6),
        marginBottom: sizeWidth(3),
    },
    description: {
        width: sizeWidth(70),
        textAlign: 'center',
        fontSize: sizeFont(3.5),
        color: '#888888'
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
    icon: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
        tintColor: APP_COLOR,
    }
});

export default connect(
    state => ({
    }),
    {
        navigateToPage,
        navigateBack,
    }
)(CreateScreen);