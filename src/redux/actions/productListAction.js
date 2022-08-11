import {
  PRODUCTLIST_FETCH_REQUEST,
  PRODUCTLIST_FETCH_REQUEST_SUCCESS,
  PRODUCTLIST_FETCH_REQUEST_FAILURE,
} from "../constants/actionTypes";

export const productListFetchRequest = () => {
  return {
    type: PRODUCTLIST_FETCH_REQUEST,
  };
};


export const productListFetchRequestSuccess=(data)=>{
  return{
    type:PRODUCTLIST_FETCH_REQUEST_SUCCESS,
    data,
  }
}

export const productListFetchRequestFailure=(error)=>{
  return{
    type:PRODUCTLIST_FETCH_REQUEST_FAILURE,
    error,
  }
}
