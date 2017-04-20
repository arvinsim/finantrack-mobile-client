import 'react-native'
import React from 'react'
import TransactionListItem from '../TransactionListItem'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(
    <TransactionListItem
      handleEditTransaction={()=>{}} 
      handleDeleteTransaction={()=>{}}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})