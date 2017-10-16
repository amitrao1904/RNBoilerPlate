import React from 'react'
import Profile from '../containers/Profile/'
import { DrawerNavigator } from 'react-navigation'
import DrawBar from '../containers/DrawBar/'
export default (DrawNav = DrawerNavigator(
  {
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
))
