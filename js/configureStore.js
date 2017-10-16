
'use strict'

import { AsyncStorage } from 'react-native'
import devTools from 'remote-redux-devtools'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import reducer from './actions_reducers/'
import promise from './promise'

export default function configureStore (onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    devTools({
      name: 'RNDemoSkeleton', realtime: true
    }),
  )

  const store = createStore(reducer, enhancer)
  persistStore(store, { storage: AsyncStorage }, onCompletion)

  return store
}
