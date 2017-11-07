import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView} from 'react-native';
import {connect} from "react-redux";
import PaginationList from "../common/PaginationList";
import {navigateToPage, resetToPage} from "../../redux/action/NavigationAction";
import GroupItem from "./GroupItem";
import {sizeFont, sizeWidth} from "../../util/Size";
import StatusBar from "../common/StatusBar";
import ToolBar from "../common/ToolBar";
import {CREATE_GROUP_PAGE, CREATE_PAGE, NAVIGATION_PAGE} from "../../router/AppNavigator";
import {fetchGroups, fetchGroupsSuccess} from "../../redux/action/GroupAction";
import Group from "../../model/Group";
import {APP_COLOR} from "../../../res/style/AppStyle";


class GroupScreen extends Component {

    constructor(props) {
        super(props);
    }

    keyExtractor = (item) => item._id;

    renderItem = ({item}) => {
        return (
            <GroupItem item={item} />
        )
    };

    renderToolbarCenter = () => {
        return (
            <Text style={styles.toolbarText}>Groups</Text>
        )
    };

    goToNavigationPage = () => {
        const {navigateToPage} = this.props;
        navigateToPage(NAVIGATION_PAGE);
    };

    renderToolbarLeft = () => {
        return (
            <TouchableOpacity onPress={this.goToNavigationPage}>
                <Image resizeMode={'contain'} source={require('../../../res/img/menu.png')} style={styles.menu}/>
            </TouchableOpacity>
        )
    };

    goToCreateGroupPage = () => {
        const {navigateToPage} = this.props;
        navigateToPage(CREATE_GROUP_PAGE);
    };

    renderToolbarRight = () => {
        return (
            <View style={styles.barRight}>
                <TouchableOpacity onPress={this.goToCreateGroupPage} style={styles.addPart}>
                    <Image resizeMode={'contain'} source={require('../../../res/img/add.png')} style={styles.add}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image resizeMode={'contain'} source={require('../../../res/img/search.png')} style={styles.search}/>
                </TouchableOpacity>
            </View>
        )
    };

    componentWillMount = () => {
        const {fetchGroups} = this.props;
        fetchGroups();
    };

    componentWillUnmount = () => {
        const {fetchGroupsSuccess} = this.props;
        fetchGroupsSuccess([]);
    };

    render() {
        const {groups} = this.props;
        const groupAll = {id: '-1', title: 'All', description: 'NEED TO DO', color: APP_COLOR};
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
                <ToolBar
                    left={this.renderToolbarLeft()}
                    center={this.renderToolbarCenter()}
                    right={this.renderToolbarRight()}
                />
                <ScrollView
                    >
                    <GroupItem key={groupAll.id} item={groupAll}/>
                    {groups.map(item => {
                        return (
                            <GroupItem key={item.id} item={item}/>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

export default connect(
    state => ({
        groups: state.group.groups,
    }),
    {
        navigateToPage,
        resetToPage,
        fetchGroups,
        fetchGroupsSuccess,
    }
)(GroupScreen);

