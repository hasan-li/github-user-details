import {
  Store as ReduxStore,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import { root } from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store: ReduxStore<Store> = createStore(
  root,
  compose(enhancer),
);
if (module.hot !== undefined) {
  module.hot.accept(() => {
    const nextRootReducer = combineReducers<Store>({
      ...require('../reducers/root').default,
    });

    store.replaceReducer(nextRootReducer);
  });
}
sagaMiddleware.run(rootSaga);

export default store;
