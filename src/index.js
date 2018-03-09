// import registerServiceWorker from './registerServiceWorker'
import React from 'react'
import { render } from 'react-dom'
import App from './app'
import { Provider } from 'mobx-react'
import Store from './store'
import './axios.config'

import './style/index.less'

import createBrowserHistory from 'history/createBrowserHistory'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
// 同步react-router路由到mobx
const browserHistory = createBrowserHistory()
const routeStore = new RouterStore()
const history = syncHistoryWithStore(browserHistory, routeStore)

render(
  <Provider store={new Store()} routeStore={routeStore}>
    <App history={history} />
  </Provider>,
  document.querySelector('#root')
)

// registerServiceWorker()
