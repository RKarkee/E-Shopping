import {
  PRODUCTLIST_FETCH_REQUEST,
  PRODUCTLIST_FETCH_REQUEST_SUCCESS,
  PRODUCTLIST_FETCH_REQUEST_FAILURE,
} from "../constants/actionTypes";

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},
};
const productReducer = (state, action) => {
  state = state || INITIAL_STATE;
  switch (action.type) {
    case PRODUCTLIST_FETCH_REQUEST:
      return Object.assign({}, state, {
        loading: true,
      });
    case PRODUCTLIST_FETCH_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        payload: action.data,
      });
    case PRODUCTLIST_FETCH_REQUEST_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        errors: action.error,
      });

    default:
      return state;
  }
};

export default productReducer;
