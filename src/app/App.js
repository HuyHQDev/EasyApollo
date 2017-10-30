import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from "react-redux";
import {fetchAuthors} from "./redux/action/ApolloAction";

class App extends Component<{}> {

    componentDidMount = () => {
        const {fetchAuthors} = this.props;
        fetchAuthors();
    };

    render() {
        const {authors} = this.props;
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(authors)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default connect(
    state => ({
        authors: state.apollo.authors,
    }),
    {
        fetchAuthors
    }
)(App);
