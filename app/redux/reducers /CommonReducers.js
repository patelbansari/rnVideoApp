import {
  FEED_SUCESS,
  GET_FEED,
  LOAD_MORE_SUCESS,
  REFRESH_FEED,
  UPDATE_FEED,
} from '../action/Action';

const initialState = {
  loading: false,
  feed: [],
  refreshing: false,
};
export default CommonReducers = (state = initialState, action) => {
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
        feed: [...state.feed,...action.response],
        loading: false,
        refreshing: false,
      };

    case UPDATE_FEED:
      return {...state, feed: action.response};

    case REFRESH_FEED:
      return {...state, refreshing: true};
    default:
      return state;
  }
};
