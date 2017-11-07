import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {sizeFont, sizeWidth} from "../../util/Size";
import Text from "../common/Text";
import {APP_COLOR} from "../../../res/style/AppStyle";

export default class ListItem extends Component {

    render() {
        const {item} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftPart}>
                    <Image source={require('../../../res/img/done.png')} style={styles.ticked}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.titlePart}>
                    <Text style={styles.title}>Design new icons</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    leftPart: {
        width: sizeWidth(17.33),
        height: sizeWidth(17.33),
        backgroundColor: APP_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        opacity: 0.5,
        fontSize: sizeFont(3.73),
        color: "#1d1d26",
    },
    titlePart: {
        flex: 1,
        height: sizeWidth(17.33),
        justifyContent: 'center',
        paddingHorizontal: sizeWidth(6.67),
    },
    ticked: {
        width: sizeWidth(6.67),
        height: sizeWidth(6.67),
    },
});


