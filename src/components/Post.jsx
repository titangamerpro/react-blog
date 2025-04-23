import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Post = ({posts}) => {
    const {id} = useParams()
    const post = posts.find(post => post.id === id)
    console.log(id);
  return (
    <article className='post'>
        {post && 
            <>
                <h2>{post.title} </h2>
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
                <h2>post not faund</h2>
                <Link to="/" >visit to home page</Link>
            </main>
        }
    </article>
  )
}

export default Post