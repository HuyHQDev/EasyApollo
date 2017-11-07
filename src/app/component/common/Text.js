import React, {PureComponent} from 'react';
import {StyleSheet, Text,} from 'react-native';
import {APP_TEXT_COLOR} from "../../../res/style/AppStyle";
import {sizeFont} from "../../util/Size";
import {AVENIR_NEXT_REGULAR} from "../../../res/font/Font";

export default class AppText extends PureComponent {
    render() {
        const {children, style} = this.props;

        return (
            <Text style={[styles.text, style]}>
                {children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: sizeFont(3.46),
        color: APP_TEXT_COLOR,
        fontFamily: AVENIR_NEXT_REGULAR,
        backgroundColor: 'transparent'
    }
});
