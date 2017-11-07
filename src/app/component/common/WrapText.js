import React, {PureComponent} from 'react';
import {StyleSheet, Text, View,} from 'react-native';
import PropTypes from 'prop-types';
import {AVENIR_NEXT_REGULAR} from "../../../res/font/Font";
import {APP_TEXT_COLOR} from "../../../res/style/AppStyle";
import {sizeFont} from "../../util/Size";

export default class WrapText extends PureComponent {
    render() {
        const {children, style, wrapStyle, numberOfLines, ellipsizeMode} = this.props;
        return (
            <View style={[styles.wrapper, wrapStyle]}>
                <Text numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode} style={[styles.text, style]}>{children}</Text>
            </View>
        );
    }
}

WrapText.propTypes = {
    numberOfLines: PropTypes.number,
    ellipsizeMode: PropTypes.string,
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection:'row',
    },
    text: {
        flexWrap: 'wrap',
        fontSize: sizeFont(3.6),
        color: APP_TEXT_COLOR,
        fontFamily: AVENIR_NEXT_REGULAR,
    }
});
