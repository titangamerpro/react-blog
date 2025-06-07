import React from 'react'

const NewPost = ({postTitle, setPostTitle, postBody, setPostBody, handleSubmit}) => {
  return (
    <main className='newPost'>
        <h1>NewPost</h1> 
        <form className="newFormPost" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">title:</label>
          <input type="text" 
              id='postTitle' 
              required
              value={postTitle}
              placeholder='add the title'
              maxLength="100"
              onChange={(e) => setPostTitle(e.target.value) }
          />
          <label htmlFor="postBody">body:</label>
          <textarea id='postBody' 
                    value={postBody}
                    placeholder='add the text'
                    maxLength="500"
                    onChange={(e) => setPostBody(e.target.value)}
          />
          <button type='submit' disabled={!postTitle || !postBody} >
            submit
          </button>
        </form>
    </main>
  )
}

export default NewPost