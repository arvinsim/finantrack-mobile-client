import styles from './styles.js'

import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { View, Text } from 'react-native'
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

import { validateTransaction } from '../../lib/validation'
import colors from '../../config/colors'

const renderInputField = ({ input: { onChange, ...restInput }, label, meta: { touched, error }, ...custom }) => (
  <View>
    <FormLabel>{label}</FormLabel>
    <FormInput onChangeText={onChange} {...restInput} />
    {touched && (error && <FormValidationMessage>{error}</FormValidationMessage>)}
  </View>
)

const renderDateField = ({ input: { onChange, ...restInput }, label, meta: { touched, error }, ...custom }) => (
  <View>
    <FormLabel>{label}</FormLabel>
    <FormInput onChangeText={onChange} {...restInput} />
    {touched && (error && <FormValidationMessage>{error}</FormValidationMessage>)}
  </View>
)

const renderMoneyField = ({ input: { onChange, ...restInput }, label, meta: { touched, error }, ...custom }) => (
  <View>
    <FormLabel>{label}</FormLabel>
    <FormInput keyboardType="numeric" onChangeText={onChange} {...restInput}  />
    {touched && (error && <FormValidationMessage>{error}</FormValidationMessage>)}
  </View>
)

class TransactionForm extends Component {
  render() {
    const { buttonTitle, handleSubmit, handleSubmitHandler, submitting } = this.props
    const title = submitting ? 'processing' : buttonTitle 

    return (
      <View>
        <Field name="title" label="Title" component={renderInputField} />
        <Field name="date" label="Date" component={renderDateField} />
        <Field name="inflow" label="Inflow" component={renderMoneyField} />
        <Field name="outflow" label="Outflow" component={renderMoneyField} />

        <Button
          title={title}
          backgroundColor={colors.primary}
          onPress={handleSubmit(handleSubmitHandler)}
          disabled={submitting}
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
  form: 'transaction_form', // a unique name for this form
  validate: validateTransaction
})(TransactionForm)

export default TransactionForm