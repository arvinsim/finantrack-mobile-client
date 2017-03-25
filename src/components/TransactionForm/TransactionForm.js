import styles from './styles.js'

import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { View } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'

const renderInputField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <FormInput {...input} />
)

class TransactionForm extends Component {
    render() {
        const { buttonTitle, handleSubmit, handleSubmitHandler } = this.props

        return (
            <View>
                <FormLabel>Title</FormLabel>
                <Field name="title" component={renderInputField} />

                <FormLabel>Date</FormLabel>
                <Field name="description" component={renderInputField} />

                <FormLabel>Inflow</FormLabel>
                <Field name="inflow" component={renderInputField} />

                <FormLabel>Outflow</FormLabel>
                <Field name="outflow" component={renderInputField} />

                <Button 
                    title={buttonTitle} 
                    backgroundColor="#159488" 
                    onPress={handleSubmit(handleSubmitHandler)}
                />
            </View>
        )
    }
}

TransactionForm.propTypes = {
    buttonTitle: React.PropTypes.string.isRequired,
    handleSubmitHandler: React.PropTypes.func.isRequired
}

TransactionForm = reduxForm({
  form: 'add_transaction' // a unique name for this form
})(TransactionForm)

export default TransactionForm