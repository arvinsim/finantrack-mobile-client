// Screens
import HomeScreen from '../screens/HomeScreen'
import AddTransactionScreen from '../screens/AddTransactionScreen'
import UpdateTransactionScreen from '../screens/UpdateTransactionScreen'

export const routeConfigurations = {
  Home: { screen: HomeScreen },
  AddTransaction: { screen: AddTransactionScreen },
  UpdateTransaction: { screen: UpdateTransactionScreen }
}

export const stackNavigatorConfiguration = {
  initialRoute: 'Home'
}