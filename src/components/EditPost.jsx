import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import notFound from '../assets/eror-404.svg'


const EditPost = ({allPosts, setAllPosts}) => {
  const {id} = useParams()
  const postToEdit = allPosts.find(post => post.id.toString() === id)
  const navigate = useNavigate()

  const [editTitle, setEditTitle] = useState(postToEdit?.title || "")
  const [editBody, setEditBody] = useState(postToEdit?.body || "")
  
  const handleSave = e => {
    e.preventDefault()
    
    const updatePosts = allPosts.map(post => post.id.toString() === id 
      ? {...post, title:editTitle, body:editBody}
      : post
    )

    setAllPosts(updatePosts)
    localStorage.setItem('posts', JSON.stringify(updatePosts))
    navigate('/')
  }

    if (!postToEdit) {
      return <main>
        <img src={notFound} alt="eror" />
        <p className='not-found'>not post</p>
        </main>
    }


  // console.log(postToEdit);
  return (
    <main>
      <h1>NewPost</h1> 
        <form className="newFormPost" onSubmit={handleSave}>
          <label htmlFor="postTitle">title:</label>
          <input type="text" 
              id='postTitle' 
              required
              value={editTitle}
              placeholder='add the title'
              onChange={(e) => setEditTitle(e.target.value) }
          />
          <label htmlFor="postBody">body:</label>
          <textarea id='postBody' 
                    value={editBody}
                    placeholder='add the text'
                    maxLength="500"
                    onChange={(e) => setEditBody(e.target.value)}
          />
          <button type='submit'  >
            submit
          </button>
        </form>
    </main>
  )
}

export default EditPost