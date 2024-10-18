import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost, getPosts } from '../feature/posts.slice';

export const DeletePost = ({ postId }) => {

    const dispatch = useDispatch();

    const handleDelete= () => {
        axios.delete(`http://localhost:8000/post/${ postId }`)
        .then(() => {
            dispatch(deletePost(postId))
            dispatch(getPosts())
        })
    }
    return (
        <span id="delete-btn" className='ms-1'
        onClick={ () => handleDelete() }
        >&#10010;</span>
    )
}
