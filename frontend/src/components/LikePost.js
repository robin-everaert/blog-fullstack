import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const LikePost = ({ post, userId }) => {
    const [userLiked, setUserLiked] = useState(false);

    useEffect(() => {
        if(post.likers) {
            if(post.likers.includes(userId)) {
                setUserLiked(true);
            } else {
                setUserLiked(false);
            }
        }
    }, [userId, userLiked]);

    const likePost = () => {
        axios.patch(`http://localhost:8000/post/like-post/${ post._id }`, { userId });
        setUserLiked(true);
    };
    const dislikePost = () => {
        axios.patch(`http://localhost:8000/post/dislike-post/${ post._id }`, { userId });
        setUserLiked(false);
    }
    return (
        <div className='icons-container'>
            <span>{ post.likers ? post.likers.length : 0 }</span>
            { 
            userLiked ?
                <span id="dislike-btn"
                className="ms-1 text-danger"
                onClick={ () => dislikePost() }
                >&#9829;</span>
            :
                <span id="like-btn"
                className="ms-1"
                onClick={ () => likePost() }
                >&#9829;</span>
            }
        </div>
    )
}
