import * as actions from '../actions/appActions';

const initialState = {
  fetchResult: {
    error: null,
    loading: false,
    data: {},
  },
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETCH_DETAILS_START:
      return {
        ...state,
        fetchResult: {
          error: false,
          loading: true,
          data: {},
        },
      };

    case actions.FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        fetchResult: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case actions.FETCH_DETAILS_FAIL:
      return {
        ...state,
        fetchResult: {
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};

export default appReducer;
