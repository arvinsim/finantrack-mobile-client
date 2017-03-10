import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Finantrack',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>This is the Home Screen</Text>
                <Button 
                    onPress={() => navigate('AddTransaction')}
                    title="Go to Add Transaction Screen" />
                <Button
                    onPress={() => navigate('UpdateTransaction')}
                    title="Go to Update Transaction Screen" />
            </View>
        );
    }
}

export default HomeScreen;