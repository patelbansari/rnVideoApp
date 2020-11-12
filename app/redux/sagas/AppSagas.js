import {takeLatest, put, call} from 'redux-saga/effects';
import config from '../../config/apiConfig';
import {FEED_SUCESS, GET_FEED, GET_STRIPS, LOAD_MORE_FEED, LOAD_MORE_SUCESS, REFRESH_FEED, STRIPS_SUCESS} from '../action/Action';

function* fetchFeed(action) {
  if (action.isRefresh) {
    yield put({type: REFRESH_FEED});
  }
  const response = yield call(fetch, config.FEED_URL);
  const responseBody = yield response.json();
  responseBody.videos.map((item, index) => {
    item.isPaused = true;
    item.id = 'id' + parseInt(Date.now() * Math.random());;
  });
  if(action.isLoadMore){
    yield put({type: LOAD_MORE_SUCESS, response: responseBody.videos});
  }else{
    yield put({type: FEED_SUCESS, response: responseBody.videos});
  }
}

export function* getFeedWatcher() {
  yield takeLatest(GET_FEED, fetchFeed);
}

export function* getLoadMoreFeed() {
  yield takeLatest(LOAD_MORE_FEED, fetchFeed);
}

function* fetchStrips(action) {
  if (action.isRefresh) {
    yield put({type: REFRESH_FEED});
  }
  const response = yield call(fetch, config.STRIPS_URL);
  const responseBody = yield response.json();
  yield put({type: STRIPS_SUCESS, response: responseBody});

}

export function* getStripsWatcher() {
  yield takeLatest(GET_STRIPS, fetchStrips);
}
