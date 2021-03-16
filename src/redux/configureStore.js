import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
export default function configureStore() {
  // const composeEnhancers =
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    // composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
