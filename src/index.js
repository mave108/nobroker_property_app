import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ListingPage from './containers/ListingPage/ListingPage';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const App = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ErrorBoundary>
     <ListingPage />
    </ErrorBoundary>
  </Provider>
);
ReactDOM.render(
    App
  , document.querySelector('.container'));