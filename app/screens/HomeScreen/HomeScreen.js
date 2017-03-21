import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import TransactionList from '../../components/TransactionList'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Finantrack'
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <View>
                <Button 
                    onPress={() => navigate('AddTransaction')}
                    title="Add New Transaction" 
                    backgroundColor="#3748AC" />
                <TransactionList onPress={() => navigate('UpdateTransaction')} />
            </View>
        )
    }
}

export default HomeScreen