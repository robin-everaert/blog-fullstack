import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        postsData: [],
    },
    reducers: {
        getPosts: (state, { payload }) => {
            state.postsData = payload;
        }
    },
});

export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;