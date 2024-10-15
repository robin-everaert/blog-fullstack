import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "../feature/user.slice";
import  postsReducer from "../feature/posts.slice";

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer
    },
});