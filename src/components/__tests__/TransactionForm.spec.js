import 'react-native'
import React from 'react'
import TransactionForm from '../TransactionForm'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(
    <TransactionForm />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})