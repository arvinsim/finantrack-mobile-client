import styles from './styles.js'

import React, { Component } from 'react'
import { 
  Grid,
  Col,
  Button 
} from 'react-native-elements'

class TransactionListItemOptions extends Component {
  render() {
    const { handleEditTransaction, handleDeleteTransaction } = this.props
    return (
      <Grid>
        <Col>
          <Button buttonStyle={styles.edit} title='Edit' onPress={handleEditTransaction} />
        </Col>
        <Col>
          <Button buttonStyle={styles.delete} title='Delete' onPress={handleDeleteTransaction} />
        </Col>
      </Grid>
    )
  }
}

TransactionListItemOptions.propTypes = {
  handleEditTransaction: React.PropTypes.func.isRequired,
  handleDeleteTransaction: React.PropTypes.func.isRequired
}

export default TransactionListItemOptions