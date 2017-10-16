'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore'
import {setPlatform, setVersion} from './actions_reducers/device/deviceActions'
import {setStore} from './actions_reducers/global/globalActions'
import pack from '../package'
var VERSION = pack.version

class setup extends Component {
  constructor () {
    super()

    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    }
  }

  render () {
    this.state.store.dispatch(setPlatform('ios'))
    this.state.store.dispatch(setVersion(VERSION))
    this.state.store.dispatch(setStore(this.state.store))

    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    )
  }
}

export default setup
