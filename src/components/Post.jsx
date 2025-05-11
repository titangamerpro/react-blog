import React from 'react'
import { Link, useParams } from 'react-router-dom'


const Post = ({allPosts, handlDelete}) => {
    // console.log(posts);
    const {id} = useParams()
    const post = allPosts.find(post => (post.id).toString() === id)
    // console.log(post);
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
                <button onClick={() => handlDelete(post.id)} className='delete' >Delete post</button>
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