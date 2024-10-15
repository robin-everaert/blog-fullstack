import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const NewPost = () => {

    const userId = useSelector((state => state.user.userId));
    const [message, setMessage] = useState("");
    const handleForm = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/post', {
            message: message,
            author: userId,
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
