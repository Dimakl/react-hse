import React from 'react'
import { Page } from '../Page/Page'
import { loadState, saveState } from '../../persistence/localStorage'


import { createStore } from 'redux'
import { Provider } from "react-redux"
import { rootReducer } from '../../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'


const persistedState = loadState()
const store = createStore(rootReducer, persistedState, composeWithDevTools())
// maybe should use lodash throttle
store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
    theme: store.getState().theme
  })
})

class App extends React.Component<{},{}>  {
  render () {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    )
  }
}


export default App