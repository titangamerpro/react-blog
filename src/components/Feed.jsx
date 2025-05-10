import React from 'react'
import { Link } from 'react-router-dom'

const Feed = ({posts}) => {
  return (
    <article className='post'>
        {posts.length ? (
            posts.map(post => (
                <Link to={`post/${post.id}`} className="item" key={post.id}>
                    <h2 className='post-title'>{post.title} </h2>
                    <span className='post-data'> {post.datetime} </span>
                    <p className='post-body'> {
                    post.body.length<= 25 ? post.body : `${(post.body).slice(0,25)}...`
                    }</p>
                   
                </Link>
            ))
        ) : (
            <p className="empty">
                post not display
            </p>
        )}
    </article>
  )
}

export default Feed