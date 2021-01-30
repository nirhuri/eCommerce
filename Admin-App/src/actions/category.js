import axios from "../helpers/axios";
import { categoryConstant } from "./constants";

export const getAllCategory = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstant.GET_ALL_CATEGORIES_REQUEST });
    const res = await axios.get("category/getall");
    
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
        payload: {
          categories: categoryList,
        },
      });
    } else {
      dispatch({
        type: categoryConstant.GET_ALL_CATEGORIES_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const addCategory = (form) => {
    return async Dispatch => {
        const res = await axios.post('/category/create', form);
        console.log(res)
    }
}