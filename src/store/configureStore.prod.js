import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from 'reducers';

function configureStore() {
  const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
  );
  return store;
}

export default configureStore;
