import axios from "axios";

import {
  fetchPostListStartAction,
  fetchPostListSuccessfulAction,
  fetchPostListFailedAction,
  postListAction
} from "root/store/reducers";
import { showSuccess, showError, showWarning } from "root/utilities/toast";

export const fetchPostList = (params) => {
  return (dispatch) => {
    dispatch(fetchPostListStartAction());
    axios({
      url: `https://jsonplaceholder.typicode.com/posts`,
      method: "GET",
      // headers: {
      //   "Authorization": `Bearer ${localStorage.getItem("access_token")}`
      // },
      // params: params
    })
      .then((response) => {
        dispatch(postListAction(response?.data));
        dispatch(fetchPostListSuccessfulAction());
      })
      .catch((err) => {
        if (err?.response?.data?.message) showError(err.response.data.message);
        else showError("Server Error");
        dispatch(fetchPostListFailedAction());
      })
  };
};