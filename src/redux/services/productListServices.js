import axios from "axios";
import {
  productListFetchRequest,
  productListFetchRequestSuccess,
  productListFetchRequestFailure,
} from "../actions/productListAction";

export const fetchProductList = (formData = {}) => {
  return (dispatch) => {
    dispatch(productListFetchRequest());
    return axios
      .get(
        "https://electronic-ecommerce.herokuapp.com/api/v1/product",
        formData
      )
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(productListFetchRequestSuccess(response.data.data.product));
        } else {
          //TODOs
        }
      })
      .catch((error) =>
        dispatch(productListFetchRequestFailure(error.response.data.data))
      );
  };
};

export default fetchProductList;
