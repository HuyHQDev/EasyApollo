import React, {Component} from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {navigateToPage} from "../../redux/action/NavigationAction";
import {sizeFont, sizeWidth} from "../../util/Size";
import Text from "../common/Text";
import DoneListItem from "./DoneListItem";
import DoingListItem from "./DoingListItem";
import ToolBar from "../common/ToolBar";
import StatusBar from "../common/StatusBar";
import {CREATE_PAGE, NAVIGATION_PAGE} from "../../router/AppNavigator";

class TodoScreen extends Component {

    constructor(props) {
        super(props);
    }

    renderItem = () => {
        return (
            <DoneListItem/>
        )
    };

    renderSeparator = () => {
        return (
            <View style={styles.separator}/>
        )
    };

    renderToolbarCenter = () => {
        return (
            <Text style={styles.toolbarText}>Lists</Text>
        )
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
                <TouchableOpacity>
                    <Image resizeMode={'contain'} source={require('../../../res/img/share.png')} style={styles.share}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.goToPage(CREATE_PAGE)} style={styles.addPart}>
                    <Image resizeMode={'contain'} source={require('../../../res/img/add.png')} style={styles.add}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'contain'} source={require('../../../res/img/search.png')} style={styles.search}/>
                </TouchableOpacity>
            </View>
        )
    };

    goToPage = (pageName) => {
        const {navigateToPage} = this.props;
        navigateToPage(pageName);
    };

    render() {
        const {group} = this.props.navigation.state.params;
        const title = group && group.title;
        const description = group && group.description;
        const color = group && group.color;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
                <ToolBar
                    left={this.renderToolbarLeft()}
                    center={this.renderToolbarCenter()}
                    right={this.renderToolbarRight()}
                />
                <View style={[styles.header, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.desc}>{description}</Text>
                </View>
                {this.renderItem()}
                {this.renderSeparator()}
                <DoingListItem/>
                {this.renderSeparator()}
                <DoingListItem/>
                {this.renderSeparator()}
                {this.renderItem()}
                {this.renderSeparator()}
                {this.renderItem()}
                <DoingListItem/>
                {this.renderSeparator()}
                {this.renderSeparator()}
                {this.renderItem()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: sizeWidth(58.67),
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: sizeFont(8),
        fontWeight: "300",
        color: "#ffffff",
        marginBottom: sizeWidth(2),
    },
    desc: {
        opacity: 0.5,
        fontSize: sizeFont(2.93),
        color: "#ffffff"
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
        marginHorizontal: sizeWidth(5),
    },
    share: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    add: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
    search: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    }
});

export default connect(
    state => ({
    }),
    {
        navigateToPage,
    }
)(TodoScreen);