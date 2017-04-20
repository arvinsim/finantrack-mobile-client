import 'react-native'
import React from 'react'
import TransactionListSearchBar from '../TransactionListSearchBar'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

test('renders correctly', () => {
  const tree = renderer.create(
    <TransactionListSearchBar />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})