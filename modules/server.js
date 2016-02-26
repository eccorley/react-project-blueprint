/*eslint no-console:0*/
import React from 'react'
import { createServer } from 'react-project/server'
import { RouterContext } from 'react-router'
import Document from '../modules/components/Document'
import routes from '../modules/routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

function renderDocument(props, cb) {
  cb(null, <Document {...props}/>)
}

function renderApp(props, cb) {
  const use404 = props.location.pathname === '/throws-an-error'
  const err = use404 ? { status: 404 } : null
  const store = createStore(reducer, applyMiddleware(thunk))
  // fetch data here
  const appElement = <Provider store={store}><RouterContext {...props}/></Provider>
  const initialState = store.getState()
  cb(err, appElement, initialState)
}

createServer({
  renderDocument,
  renderApp,
  routes
}).start()
