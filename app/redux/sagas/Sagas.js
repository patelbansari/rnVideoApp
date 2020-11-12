import { all} from 'redux-saga/effects';
import { getFeedWatcher, getLoadMoreFeed, getStripsWatcher } from './AppSagas';

export function* rootSaga () {
    yield all ([
        getFeedWatcher(),
        getLoadMoreFeed(),
        getStripsWatcher()
      ])
};