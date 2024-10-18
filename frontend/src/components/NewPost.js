import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPosts } from '../feature/posts.slice';

const NewPost = () => {

    const userId = useSelector((state => state.user.userId));
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    const data = {
        message: message,
        author: userId,
    }

    const handleForm = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/post', data)
        .then(() => {
            dispatch(createPost(data))
            dispatch(getPosts())
        })
        .then( () => {
            setMessage("");
        });
    };

    return (
        <form className="new-post-form"
        onSubmit={ e => handleForm(e) }
        >
        <textarea placeholder="Your Message:" value={ message }
        onChange={ e => setMessage(e.target.value) }
        ></textarea>
        <button type="submit">Send</button>
    </form>
    )
}

export default NewPost;
