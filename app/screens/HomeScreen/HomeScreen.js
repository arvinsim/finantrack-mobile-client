import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Finantrack',
    };

    render() {
        return (
            <View>
                <Text>This is the Home Screen</Text>
            </View>
        );
    }
}

export default HomeScreen;