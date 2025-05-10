import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Post = ({posts}) => {
    console.log(posts);
    const {id} = useParams()
    const post = posts.find(post => post.id === id)
    console.log(id);
  return (
    <article className='post'>
        {post && 
            <>
                <h2 className='post-title'>{post.title} </h2>
                <p className="postdata">
                    {post.datetime}
                </p>
                <p className="postbody">
                    {post.body}
                </p>
            </>
        } {
            !post &&
            <main>
                <h2 className='error-post'>post not faund</h2>
                <Link to="/" className='error-link' >visit to home page</Link>
            </main>
        }
    </article>
  )
}

export default Post