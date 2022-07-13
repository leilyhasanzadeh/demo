import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

import {
  commentReducer,
  commentListAction,
  postReducer,
  postListAction,
  postSelectedAction
} from "./reducers";

const store = configureStore({
  reducer: {
    comment: commentReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
}, thunk)

export {
  store,
  commentListAction,
  postListAction,
  postSelectedAction,
};
