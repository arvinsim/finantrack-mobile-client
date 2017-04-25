import colors from '../../config/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  subtitle: {
    flex: 1,
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    fontSize: 20
  },
  date: {
    flex: 1,
    color: '#808080'
  },
  inflow: {
    flex: 1,
    color: colors.primary,
  },
  outflow: {
    flex: 1,
    color: '#ff0000',
  }
})

export default styles