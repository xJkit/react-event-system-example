import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from 'reducers';

function configureStore() {
  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
  );
  return store;
}

export default configureStore;