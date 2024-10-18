import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("getPosts", async(_, thunkAPI) => {
    axios.get('http://localhost:8000/post/')
    .then(r => thunkAPI.dispatch(getPostsSuccess(r.data)));
})

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        postsData: [],
    },
    reducers: {
        getPostsSuccess: (state, { payload }) => {
            state.postsData = payload;
        },
        createPost: (state, { payload }) => {
            state.postsData.message.push(payload);
        },
        editPost: (state, { payload }) => {
            state.postsData = state.postsData.message.map((post) => {
                if(post._id === payload[1]) {
                    return {
                        ...post, 
                        message: payload[0]
                    }
                } else {
                    return post
                }
            })
        },
        deletePost: (state, { payload }) => {
            state.postsData = state.postsData.message.filter(post => post._id !== payload)
        },
        like: (state, { payload }) => {
            state.postsData = state.postsData.message.map((post) => {
                if(post._id === payload[1]) {
                    return {
                        ...post,
                        likers: [...post.likers, payload[0]]
                    }
                } else {
                    return post
                }
            })
        },
        dislike: (state, { payload }) => {
            state.postsData = state.postsData.message.map((post) => {
                if(post._id === payload[1]) {
                    return {
                        ...post,
                        likers: post.likers.filter(userId => userId !== payload[0])
                    }
                } else {
                    return post
                }
            })
        },
    },
});

export const { getPostsSuccess, createPost, editPost, deletePost, like, dislike } = postsSlice.actions;
export default postsSlice.reducer;