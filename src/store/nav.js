import { StackNavigator } from 'react-navigation'
import { routeConfigurations, stackNavigatorConfiguration } from '../config/navigation'

const AppNavigator = StackNavigator(routeConfigurations, stackNavigatorConfiguration)

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
}

export default navReducer
