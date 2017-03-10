import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import TransactionList from '../../components/TransactionList';

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
                <TransactionList onPress={() => navigate('UpdateTransaction')} />
            </View>
        );
    }
}

export default HomeScreen;