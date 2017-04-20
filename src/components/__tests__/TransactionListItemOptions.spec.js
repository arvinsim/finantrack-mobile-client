import 'react-native'
import React from 'react'
import TransactionListItemOptions from '../TransactionListItemOptions'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(
    <TransactionListItemOptions
      handleEditTransaction={()=>{}}
      handleDeleteTransaction={()=>{}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})