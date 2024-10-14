import React, { useState } from 'react';
import axios from 'axios';

const NewPost = ({ userId }) => {

    const [message, setMessage] = useState("");
    const handleForm = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/post', {
            message: message,
            author: userId,
        });
    }

    return (
        <form className="new-post-form"
        onSubmit={ e => handleForm(e) }
        >
        <textarea placeholder="Your Message:"
        onChange={ e => setMessage(e.target.value) }
        ></textarea>
        <button type="submit">Send</button>
    </form>
    )
}

export default NewPost;
