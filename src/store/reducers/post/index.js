import { createReducer, createAction } from '@reduxjs/toolkit';

const defaultState = {
    postList: [],
    process: "idle",
    postSelected: 0
};

export const postListAction = createAction('POSTLIST', function prepare(postList) {
    return { payload: [...postList], }
})
export const postSelectedAction = createAction('POSTSELECTED', function prepare(postSelected) {
    return { payload: postSelected, }
})
export const fetchPostListStartAction = createAction('FETCH_POSTLIST_START', function prepare() {
    return { payload: "start", }
})
export const fetchPostListSuccessfulAction = createAction('FETCH_POSTLIST_SUCCESSFUL', function prepare() {
    return { payload: "successfull", }
})
export const fetchPostListFailedAction = createAction('FETCH_POSTLIST_FAILED', function prepare() {
    return { payload: "failed", }
})

export const postReducer = createReducer(defaultState, (builder) => {
    builder
        .addCase(postListAction.type, (state, action) => {
            state["postList"] = action["payload"]
        })
        .addCase(postSelectedAction.type, (state, action) => {
            state["postSelected"] = action["payload"]
        })
        .addCase(fetchPostListStartAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
        .addCase(fetchPostListSuccessfulAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
        .addCase(fetchPostListFailedAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
})
