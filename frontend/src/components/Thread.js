import { useEffect, useState } from "react"
import axios from "axios";
import { Post } from "./Post";


const Thread = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/post")
        .then(res => {
            console.log(res.data.message)
            setPosts(res.data.message);
        })
    }, []);
  return (
    <div className="thread-container">
        <div className="post-container">
         {posts
         .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
         .map((post, index) => (
           <Post key={ post._id } post={ post } />
        ))}
        </div>
    </div>
  )
}

export default Thread