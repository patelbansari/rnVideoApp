import { all} from 'redux-saga/effects';
import { getFeedWatcher, getLoadMoreFeed } from './AppSagas';

export function* rootSaga () {
    yield all ([
        getFeedWatcher(),
        getLoadMoreFeed()
      ])
};