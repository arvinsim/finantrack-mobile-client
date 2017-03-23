import styles from './styles.js'

import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'

class TransactionForm extends Component {
    render() {
        const { buttonTitle, handleSubmit } = this.props
        console.log(this.props)

        return (
            <View>
                <FormLabel>Title</FormLabel>
                <FormInput ref="title" />

                <FormLabel>Category</FormLabel>
                <FormInput ref="category" />

                <FormLabel>Description</FormLabel>
                <FormInput ref="description" />

                <FormLabel>Inflow</FormLabel>
                <FormInput ref="inflow" />

                <FormLabel>Outflow</FormLabel>
                <FormInput ref="outflow" />

                <Button title={buttonTitle} backgroundColor="#159488" 
                    onPress={handleSubmit.bind(this.refs)} />
            </View>
        )
    }
}

TransactionForm.propTypes = {
    buttonTitle: React.PropTypes.string.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
}

export default TransactionForm