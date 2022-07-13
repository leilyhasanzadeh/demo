import axios from "axios";

import {
  fetchCommentListStartAction,
  fetchCommentListSuccessfulAction,
  fetchCommentListFailedAction,
  commentListAction
} from "root/store/reducers";
import { showSuccess, showError, showWarning } from "root/utilities/toast";

export const fetchCommentList = (params) => {
  return (dispatch) => {
    dispatch(fetchCommentListStartAction());
    axios({
      url: `https://jsonplaceholder.typicode.com/comments`,
      method: "GET",
      // headers: {
      //   "Authorization": `Bearer ${localStorage.getItem("access_token")}`
      // },
      // data: params,
    })
      .then((response) => {
        const groupByPostId = response.data.reduce((group, comment) => {
          const { postId } = comment;
          group[postId] = group[postId] ?? [];
          group[postId].push(comment);
          return group;
        }, {});

        dispatch(commentListAction(groupByPostId));
        dispatch(fetchCommentListSuccessfulAction());
      })
      .catch((err) => {
        if (err?.response?.data?.message) showError(err.response.data.message);
        else showError("Server Error");
        dispatch(fetchCommentListFailedAction());
      })
  };
};
