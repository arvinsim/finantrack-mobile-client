import { validateTransaction } from '../validation'

describe('validateTransaction', () => {
  test('is a function', () => {
    expect(typeof validateTransaction).toBe('function')
  })

  test('returns an error when param passed is empty', () => {
    expect(validateTransaction({})).not.toBe({})
  })

  test('returns an error when date passed is not a timestamp', () => {
    expect(validateTransaction({
      date: 123
    })).not.toHaveProperty('date')
  })

  test('returns an error when date passed is not a timestamp', () => {
    expect(validateTransaction({
      date: '11/02/2017'
    })).toHaveProperty('date')
  })

  test('does not return an inflow error when inflow is a number', () => {
    expect(validateTransaction({
      inflow: 123
    })).not.toHaveProperty('inflow')
  })

  test('returns an inflow error when inflow is not a number', () => {
    expect(validateTransaction({
      inflow: 'not a number'
    })).toHaveProperty('inflow')
  })

  test('does not return an outflow error when outflow is a number', () => {
    expect(validateTransaction({
      outflow: 123
    })).not.toHaveProperty('outflow')
  })

  test('returns an outflow error when outflow is not a number', () => {
    expect(validateTransaction({
      outflow: 'not a number'
    })).toHaveProperty('outflow')
  })
})