import { isNumber } from 'lodash/core'

export const validateTransaction = values => {
  const errors = {}

  // TODO: Date should be a in ISO format
  if (true) {
    errors.date = "Please enter a valid date"
  }

  // Inflow should be a number
  if (!isNumber(values.inflow)) {
    errors.inflow = 'Please input a number for inflow'
  }

  // Outflow should be a number
  if (!isNumber(values.outflow)) {
    errors.outflow = 'Please input a number for outflow'
  }

  return errors
} 
