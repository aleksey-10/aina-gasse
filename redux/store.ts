import {
  createStore,
  combineReducers,
  // applyMiddleware,
} from 'redux';
import Catalog from './Catalog/reducer';
import Layout from './Layout/reducer';
// import createSagaMiddleware from 'redux-saga';
// import { sagaWatcher } from './sagas';

const reducers = combineReducers({
  Catalog,
  Layout,
});

// const saga = createSagaMiddleware();

export const store = createStore(
  reducers,
  // applyMiddleware(saga),
);

// saga.run(sagaWatcher);