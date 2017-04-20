import { StackNavigator } from 'react-navigation'
import { AppRouteConfigs } from '../config/navigation'

const AppNavigator = StackNavigator(AppRouteConfigs);

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return (newState ? newState : state)
}

export default navReducer
