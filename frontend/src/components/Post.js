import React, { useEffect, useState } from 'react'
import { LikePost } from './LikePost';
import axios from 'axios';
import { DeletePost } from './DeletePost';

export const Post = ({ post, userId }) => {

    const [isAuthor, setIsAuthor] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if(post.author === userId) {
            setIsAuthor(true);
        } else {
            setIsAuthor(false);
        }
    }, [userId]);

    const handleEdit = () => {
        if(newMessage) {
            axios.put(`http://localhost:8000/post/${ post._id }`, { 
                message: newMessage,
            })
        }
    }
    const dateFormater = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
    }
    return (
    <div className="card post-content mt-3 bg-dark text-light">
        <div className="card-header d-flex justify-content-between align-items-center">
            <div>
                <span className='fst-italic'>Author: </span> { post.author }
            </div>
            <p className='mb-0'><span className='fst-italic'>Posted on:</span> { dateFormater(post.createdAt) } </p>
        </div>
        <div className="card-body">
            {
                isEdit ? 
                    <div className="edit-container">
                        <textarea defaultValue={ post.message }
                        onChange={ e => setNewMessage(e.target.value) }
                        ></textarea>
                        <button
                        onClick={(e) => {
                            setIsEdit(false);
                            handleEdit();
                        }}
                        >Validate Update</button>
                    </div>
                :
                    <p className="card-text mb-0">
                        { newMessage ? newMessage : post.message }
                    </p>
            }
        </div>
        <div className="card-footer icons-container d-flex justify-content-between align-items-center">
            <LikePost post={ post } userId={ userId } />
            { isAuthor && 
                <div className="update-delete-icons-container">
                    <span id="update-btn"
                    onClick={() => {
                        setIsEdit(!isEdit)
                    }}
                    >&#10000;</span>
                    <DeletePost postId={ post._id }/>
                </div>
            }
        </div>
    </div>
    )
}