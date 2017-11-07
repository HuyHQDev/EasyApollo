import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {sizeFont, sizeWidth} from "../../util/Size";
import Text from "../common/Text";
import {APP_COLOR} from "../../../res/style/AppStyle";
import {getRandomColor, getSupportColors} from "../../util/ColorUtil";
import {deleteGroup, updateGroup} from "../../redux/action/GroupAction";
import {connect} from "react-redux";
import {LIST_PAGE} from "../../router/AppNavigator";
import {navigateToPage} from "../../redux/action/NavigationAction";

class GroupItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            color: props.item && props.item.color,
            title: props.item && props.item.title,
            description: props.item && props.item.description,
        }
    }

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        )
    };



    renderImage = () => {
        const {item} = this.props;
        const color = item && item.color;
        return (
            <View style={[styles.right, {backgroundColor: color}]}>
                <Text style={styles.indicator}>0</Text>
            </View>
        )
    };

    showEditablePart = () => {
        this.setState({
            editable: true,
        })
    };

    goToListPage = () => {
        const {navigateToPage, item} = this.props;
        navigateToPage(LIST_PAGE, {group: item})
    };

    renderBody = () => {
        const {editable} = this.state;
        if (editable) {
            return this.renderEditablePart();
        }

        const {item} = this.props;
        const title = item && item.title;
        const description = item && item.description;
        const onLongPress = item.id === '-1' ? undefined : this.showEditablePart;
        return (
            <TouchableOpacity onPress={this.goToListPage} onLongPress={onLongPress} style={styles.body}>
                <View style={styles.contentPart}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.desc}>{description}</Text>
                </View>
                {this.renderImage()}
            </TouchableOpacity>
        )
    };

    renderPickImage = (pickColor) => {
        const {color} = this.state;
        if (color === pickColor) {
            return (
                <Image source={require('../../../res/img/done.png')} style={styles.pick}/>
            )
        }

    };

    renderEditablePart = () => {
        const {title, description} = this.state;
        const colors = getSupportColors();
        return (
            <View style={styles.body}>
                <View style={styles.contentPart}>
                    <TextInput
                        value={title}
                        onChangeText={(title) => this.setState({title})}
                        underlineColorAndroid={'transparent'}
                        style={styles.title} />
                    <TextInput
                        value={description}
                        onChangeText={(description) => this.setState({description})}
                        underlineColorAndroid={'transparent'}
                        style={styles.desc}
                    />
                    <View style={styles.colorList}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {colors.map((color, index) => {
                                return (

                                    <TouchableOpacity
                                        onPress={() => this.setState({color: color})}
                                        key={color}
                                        style={[styles.color, {backgroundColor: color}]}>
                                        {this.renderPickImage(color)}
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>

                </View>
                <View style={[styles.actionPart]}>
                    <TouchableOpacity onPress={this.updateGroupCommand} style={styles.donePart}>
                        <Image style={styles.icon} source={require('../../../res/img/done.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.deleteGroupCommand} style={styles.deletePart}>
                        <Image style={styles.icon} source={require('../../../res/img/delete.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    updateGroupCommand = () => {
        const {updateGroup} = this.props;
        const {title, description, color} = this.state;
        const {item} = this.props;
        this.setState({
            editable: false,
        });
        updateGroup({
            ...item,
            title,
            description,
            color
        })
    };

    deleteGroupCommand = () => {
        const {item, deleteGroup} = this.props;
        deleteGroup(item);
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderBody()}
                {this.renderSeparator()}
            </View>

        );
    }
}

const styles = StyleSheet.create({
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
    },
    donePart: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: APP_COLOR,
    },
    deletePart: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#C62828',
    },
    icon: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    container: {
    },
    separator: {
        height: 1,
        backgroundColor: "#1d1d26",
        opacity: 0.05,
    },
    right: {
        justifyContent: 'center',
        alignItems: 'center',
        width: sizeWidth(32),
        height: sizeWidth(40),
    },
    actionPart: {
        width: sizeWidth(32),
        height: sizeWidth(40),
    },
    indicator: {
        fontSize: sizeFont(8),
        color: '#ffffff'
    },
    body: {
        flexDirection: 'row',
        backgroundColor: "#ffffff",
        height: sizeWidth(40),
    },
    contentPart: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: sizeWidth(6),
    },
    title: {
        fontSize: sizeFont(6.67),
        fontWeight: "300",
        color: "#1d1d26",
        marginBottom: sizeWidth(2),
    },
    desc: {
        opacity: 0.5,
        fontSize: sizeFont(2.93),
        color: "#1d1d26"
    },
    colorList: {
        marginTop: sizeWidth(2),
    }
});

export default connect(
    null,
    {
        updateGroup,
        deleteGroup,
        navigateToPage
    }
)(GroupItem);


