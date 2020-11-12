import { createStore , applyMiddleware} from 'redux';
import Reducers from '../reducers /Reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    Reducers,
    applyMiddleware(
      sagaMiddleware,
    ),
  );

  sagaMiddleware.run(rootSaga);

  export {
    store,
  }


