import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AddTransactionScreen extends Component {
    static navigationOptions = {
        title: 'Finantrack - Add Transaction'
    }

    render() {
        return (
            <View>
                <Text>This is the Add Transaction Screen</Text>
            </View>
        );
    }
}

export default AddTransactionScreen
