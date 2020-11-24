import React from 'react'
import { Page } from '../Page/Page'

import { createStore } from 'redux'
import { Provider } from "react-redux"
import { rootReducer } from '../../reducers/index'





const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <Page />
      </Provider>
    )
  }
}


export default App