import React, {Component} from 'react';
import {
    Image, TouchableOpacity, StyleSheet
} from 'react-native';
import {sizeWidth} from "../../util/Size";
import {connect} from "react-redux";
import {navigateBack} from "../../redux/action/NavigationAction";
import PropTypes from 'prop-types';

class BackIcon extends Component {

    goBackCommand = () => {
        const {navigateBack} = this.props;
        navigateBack();
    };

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.goBackCommand}>
                <Image style={styles.backIcon}
                       resizeMode='contain'
                       source={require('../../../res/img/ic_back_white.png')}/>
            </TouchableOpacity>
        );
    }
}

BackIcon.propTypes = {
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: sizeWidth(2.13),
    },
    backIcon: {
        width: sizeWidth(6.4),
        height: sizeWidth(5),
    },
});

export default connect(null, {navigateBack})(BackIcon);