import {
  FETCH_TOP_SALES_REQUEST,
  FETCH_TOP_SALES_SUCCESS,
  FETCH_TOP_SALES_FAILURE
} from './actionType';

const initalState = {
  items: [],
  error: null,
  loading: false
}

export const TopSalesReducer = (store = initalState, action) => {
  switch (action.type) {
    case FETCH_TOP_SALES_REQUEST: {
      return {...store, loading: true, error: null}
    }
    case FETCH_TOP_SALES_SUCCESS: {
      const items = action.payload.items;
      return {...store, loading: false, items}
    }
    case FETCH_TOP_SALES_FAILURE: {
      const {error} = action.payload.error;
      return {...store, loading: false, error}
    }
    default: {
      return store;
    }
  }
}