import { act } from 'react-test-renderer';
import {
  FEED_SUCESS,
  GET_FEED,
  LOAD_MORE_SUCESS,
  REFRESH_FEED,
  STRIPS_SUCESS,
  UPDATE_FEED,
  UPDATE_STRIPS,
} from '../action/Action';

const initialState = {
  loading: false,
  feed: [],
  refreshing: false,
};
export default CommonReducers = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case GET_FEED:
      return {...state, loading: true};

    case FEED_SUCESS:
      return {
        ...state,
        feed: action.response,
        loading: false,
        refreshing: false,
      };

    case LOAD_MORE_SUCESS:
      return {
        ...state,
        feed: [...state.feed, ...action.response],
        loading: false,
        refreshing: false,
      };

    case UPDATE_FEED:
      return {...state, feed: action.response};

    case REFRESH_FEED:
      return {...state, refreshing: true};

    case STRIPS_SUCESS:
      return {...state, strips: action.response};

    case UPDATE_STRIPS:
      return {...state, strips: action.response};

    default:
      return state;
  }
};
