import React from 'react'
import { Link } from 'react-router-dom'

const Feed = ({posts}) => {
  return (
    <ul>
        {posts.length ? (
            posts.map(post => (
                <Link to={`post/${post.id}`} className="item" key={post.id}>
                    {post.body}
                </Link>
            ))
        ) : (
            <p className="empty">
                post not display
            </p>
        )}
    </ul>
  )
}

export default Feed