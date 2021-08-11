import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Home from './components/home/Home';
import reducer from './reducers';

const store = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Home />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

