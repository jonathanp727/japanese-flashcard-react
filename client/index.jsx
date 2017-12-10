import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import pageReducer from './redux/reducers/page';
import userReducer from './redux/reducers/user';
import deckReducer from './redux/reducers/deck';
import App from './react/app/container';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  form: formReducer,
  page: pageReducer,
  user: userReducer,
  deck: deckReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // eslint-disable-line no-undef
);
