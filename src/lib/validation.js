import { isISO8601, isCurrency } from 'validator'

export const validateTransaction = values => {
  const errors = {}
  const { date = '', inflow = '', outflow = '' } = values

  // Date should be in timestamp format
  if (!isISO8601(date)) {
    errors.date = "Please enter a valid date"
  }

  // Inflow should be a number
  if (!isCurrency(inflow)) {
    errors.inflow = 'Please input a number for inflow'
  }

  // Outflow should be a number
  if (!isCurrency(outflow)) {
    errors.outflow = 'Please input a number for outflow'
  }

  return errors
} 
