import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {sizeFont, sizeWidth} from "../../util/Size";
import Text from "../common/Text";
import {APP_COLOR} from "../../../res/style/AppStyle";

export default class DoingListItem extends Component {

    render() {
        const {item} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.leftPart}>
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
        opacity: 0.03,
        backgroundColor: "#1d1d26",
    },
    title: {
        fontSize: sizeFont(3.73),
        color: "#1d1d26"
    },
    titlePart: {
        flex: 1,
        height: sizeWidth(17.33),
        justifyContent: 'center',
        paddingHorizontal: sizeWidth(6.67),
    },
});


