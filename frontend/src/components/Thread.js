import { useEffect, useState } from "react"
import axios from "axios";
import { Post } from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../feature/posts.slice";

const Thread = () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.postsData.message)

    useEffect(() => {
        dispatch(getPosts());
    }, []);
  return (
    <div className="thread-container">
        <div className="post-container">
        {Array.isArray(posts) && posts
            .slice() // Permet le tri
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((post, index) => (
            <Post key={ post._id } post={ post } />
            ))
        }
        </div>
    </div>
  )
}

export default Thread