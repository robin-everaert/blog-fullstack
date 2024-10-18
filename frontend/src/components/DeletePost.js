import axios from 'axios'
import React from 'react'

export const DeletePost = ({ postId }) => {

    const handleDelete= () => {
        axios.delete(`http://localhost:8000/post/${ postId }`)
    }
    return (
        <span id="delete-btn" className='ms-1'
        onClick={ () => handleDelete() }
        >&#10010;</span>
    )
}
