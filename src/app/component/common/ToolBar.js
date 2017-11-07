import React, {Component} from 'react';
import {StyleSheet, View,} from 'react-native';
import PropTypes from 'prop-types'
import {sizeHeight, sizeWidth} from "../../util/Size";
import {APP_COLOR, STATUS_BAR_HEIGHT} from "../../../res/style/AppStyle";

export default class ToolBar extends Component {

    render() {
        const {left, center, right, style} = this.props;
        return (
            <View style={[styles.container, style]}>
                <View style={styles.left}>
                    {left}
                </View>
                <View style={styles.center}>
                    {center}
                </View>
                <View style={styles.right}>
                    {right}
                </View>
            </View>
        );
    }
}

ToolBar.propTypes = {
    left: PropTypes.object,
    center: PropTypes.object,
    right: PropTypes.object,
};

const styles = StyleSheet.create({
    container: {
        height: sizeHeight(8.73),
        paddingLeft: sizeWidth(4.66),
        paddingRight: sizeWidth(4.66),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
    },
    left : {
        marginRight: sizeWidth(2),
        width: sizeWidth(10),
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
});

