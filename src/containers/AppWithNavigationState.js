import React, { Component } from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

// Configuration variables
import { routeConfigurations, stackNavigatorConfiguration } from '../config/navigation'

const AppNavigator = StackNavigator(routeConfigurations, stackNavigatorConfiguration)

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props
    return (
      <AppNavigator navigation={
        addNavigationHelpers({
          dispatch: dispatch,
          state: nav
        })} 
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

const mapDispatchToProps = (dispatch, ownProps) => { 
  return {
    dispatch: dispatch
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState)
