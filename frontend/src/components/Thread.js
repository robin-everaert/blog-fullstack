import { useEffect, useState } from "react"
import axios from "axios";
import { Post } from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/posts.slice";


const Thread = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.postsData.message)

    useEffect(() => {
        axios.get("http://localhost:8000/post")
        .then(res => {
            dispatch(getPosts(res.data));
        })
    }, []);
  return (
    <div className="thread-container">
        <div className="post-container">
         {posts
         .slice() // Creating an empty slice allows sorting when the data comes from RTK.
         .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
         .map((post, index) => (
           <Post key={ post._id } post={ post } />
        ))}
        </div>
    </div>
  )
}

export default Thread