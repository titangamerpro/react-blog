import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const EditPost = ({allPosts, setAllPosts}) => {
  const {id} = useParams()
  const postToEdit = allPosts.find(post => post.id.toString() === id)
  const navigate = useNavigate()

  const [editTitle, useEditTitle] = useState(postToEdit.title || "")
  const [editBody, useEditBody] = useState(postToEdit.body || "")
  
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
      return <p>not post</p>
    }


  // console.log(postToEdit);
  return (
    <main>
      <h2>Edit Post</h2>
    </main>
  )
}

export default EditPost