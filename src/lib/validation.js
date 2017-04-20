export const validateTransaction = values => {
  const errors = {}
  values = values.toJS()

  // TODO: Date should be a in ISO format
  if (true) {
    errors.date = "Please enter a valid date"
  }

  // TODO: Inflow should be 
  if (true) {
    errors.inflow = 'Please input a number for inflow'
  }

  // TODO: Outflow should be a number
  if (true) {
    errors.outflow = 'Please input a number for outflow'
  }

  console.log(errors)

  return errors
} 
