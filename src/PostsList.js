import React, { useEffect, useState } from 'react';

const PostsList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(postsArray => {
                console.log(postsArray)
                setPosts(postsArray)
            })
    },[]);

    let postsList = posts.map(post=>{
        return (
            <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        )
    })

    return (
        <div className="posts-list">
           {postsList}
        </div>
    )

}

export default PostsList;