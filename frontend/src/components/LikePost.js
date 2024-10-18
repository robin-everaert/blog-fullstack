import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { dislike, getPosts, like } from '../feature/posts.slice';

export const LikePost = ({ post }) => {
    const [userLiked, setUserLiked] = useState(false);
    const userId = useSelector((state => state.user.userId));
    const dispatch = useDispatch();

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
        axios.patch(`http://localhost:8000/post/like-post/${ post._id }`, { userId })
        .then(() => {
            dispatch(like([userId, post._id]))
            dispatch(getPosts())
            setUserLiked(true)
        })
    };
    const dislikePost = () => {
        axios.patch(`http://localhost:8000/post/dislike-post/${ post._id }`, { userId })
        .then(() => {
            dispatch(dislike([userId, post._id]))
            dispatch(getPosts())
            setUserLiked(false)
        })
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
