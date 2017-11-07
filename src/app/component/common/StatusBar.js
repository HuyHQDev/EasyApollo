import React, {PureComponent} from 'react';
import {StatusBar, StyleSheet, Text, View,} from 'react-native';
import {APP_COLOR, APP_TEXT_COLOR, STATUS_BAR_HEIGHT} from "../../../res/style/AppStyle";
import {sizeFont} from "../../util/Size";
import PropTypes from 'prop-types';

export default class AppStatusBar extends PureComponent {
    render() {
        const {backgroundColor, barStyle, translucent} = this.props;
        return (
            <View style={[styles.statusBar, {backgroundColor}]}>
                <StatusBar
                    backgroundColor={backgroundColor}
                    barStyle={barStyle}
                    translucent={translucent}
                />
            </View>
        );
    }
}

AppStatusBar.defaultProps = {
    backgroundColor: APP_COLOR,
    barStyle: 'light-content',
    translucent: false
};

AppStatusBar.propTypes = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.string,
    translucent: PropTypes.bool,
};


const styles = StyleSheet.create({
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: APP_COLOR
    }
});
