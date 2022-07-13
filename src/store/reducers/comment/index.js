import { createReducer, createAction } from '@reduxjs/toolkit';

const defaultState = {
    commentList: {},
    process: "idle"
};

export const commentListAction = createAction('COMMENTLIST', function prepare(commentList) {
    return { payload: { ...commentList }, }
})

export const fetchCommentListStartAction = createAction('FETCH_COMMENTLIST_START', function prepare() {
    return { payload: "start", }
})
export const fetchCommentListSuccessfulAction = createAction('FETCH_COMMENTLIST_SUCCESSFUL', function prepare() {
    return { payload: "successfull", }
})
export const fetchCommentListFailedAction = createAction('FETCH_COMMENTLIST_FAILED', function prepare() {
    return { payload: "failed", }
})

export const commentReducer = createReducer(defaultState, (builder) => {
    builder
        .addCase(commentListAction.type, (state, action) => {
            state["commentList"] = action["payload"]
        })
        .addCase(fetchCommentListStartAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
        .addCase(fetchCommentListSuccessfulAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
        .addCase(fetchCommentListFailedAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
})
