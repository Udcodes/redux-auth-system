import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store';

const initStore = (initialState, options) => {
  let composeEnhancers = compose;

  if (!options.isServer) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

  return store;
};

export default initStore;
