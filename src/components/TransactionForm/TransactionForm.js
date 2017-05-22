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

const renderDateField = ({ input: { onChange, value, ...restInput }, label, meta: { touched, error }, ...custom }) => {
  return (
    <View>
      <FormLabel>{label}</FormLabel>
      <DatePicker
        style={{ width: 300 }}
        date={value}
        mode='date'
        placeholder="Select Date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 20,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 56
          }
        }}
        onDateChange={onChange}
      />
      {touched && (error && <FormValidationMessage>{error}</FormValidationMessage>)}
    </View>
  )
}

const renderMoneyField = ({ input: { onChange, ...restInput }, label, meta: { touched, error }, ...custom }) => (
  <View>
    <FormLabel>{label}</FormLabel>
    <FormInput keyboardType="numeric" onChangeText={onChange} {...restInput} />
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