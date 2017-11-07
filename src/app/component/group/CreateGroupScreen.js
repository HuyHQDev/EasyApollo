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
import {getSupportColors} from "../../util/ColorUtil";
import {addGroup} from "../../redux/action/GroupAction";
import uuid from 'uuid';

class CreateGroupScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            colorIndex: 0,
        }
    }

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        )
    };

    renderToolbarCenter = () => {
        return (
            <Text style={styles.toolbarText}>Create Group</Text>
        )
    };

    goBackCommand = () => {
        const {navigateBack} = this.props;
        navigateBack();
    };

    renderToolbarLeft = () => {
        return (
            <TouchableOpacity onPress={this.goBackCommand}>
                <Image resizeMode={'contain'} source={require('../../../res/img/close.png')} style={styles.close}/>
            </TouchableOpacity>
        )
    };

    addGroupCommand = () => {
        const {addGroup} = this.props;
        const {title, description, colorIndex} = this.state;
        const color = getSupportColors()[colorIndex];
        addGroup({
            id: uuid.v4(),
            title,
            description,
            color
        })
    };

    renderPickImage = (index) => {
        const {colorIndex} = this.state;
        if (index === colorIndex) {
            return (
                <Image source={require('../../../res/img/done.png')} style={styles.pick}/>
            )
        }

    };

    render() {
        const {title, description} = this.props;
        const colors = getSupportColors();
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
                <ToolBar
                    left={this.renderToolbarLeft()}
                    center={this.renderToolbarCenter()}
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
                            <Text style={styles.itemTitle}>Color</Text>
                            <View style={styles.colorList}>
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {colors.map((color, index) => {
                                        return (

                                            <TouchableOpacity
                                                onPress={() => this.setState({colorIndex: index})}
                                                key={color}
                                                style={[styles.color, {backgroundColor: color}]}>
                                                {this.renderPickImage(index)}
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <TouchableOpacity style={styles.bottom} onPress={this.addGroupCommand}>
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
    colorList: {
        flexDirection: 'row',
        paddingVertical: sizeWidth(2),
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
    color: {
        width: sizeWidth(10),
        height: sizeWidth(10),
        marginHorizontal: sizeWidth(2),
        borderRadius: sizeWidth(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    pick: {
        width: sizeWidth(3),
        height: sizeWidth(3),
    }
});

export default connect(
    state => ({
    }),
    {
        navigateToPage,
        addGroup,
        navigateBack,
    }
)(CreateGroupScreen);