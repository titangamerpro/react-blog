import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Post from "./components/Post"
import About from "./components/About"
import { useState, useEffect } from "react"
import { posts } from "./utils/blog"
import NewPost from "./components/NewPost"
import { format } from "date-fns"
import EditPost from "./components/EditPost"





function App() {
  const [allPosts, setAllPosts] = useState(() => {
    const savePosts = localStorage.getItem('posts')
    return savePosts ? JSON.parse(savePosts) : [] 
  })
  const navigate = useNavigate()

  // New Post
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = allPosts.length ? allPosts[allPosts.length - 1].id + 1 : 1
    const datetime = format(new Date(), "MMM dd, yyy pp" )
    const newPost = {
      id,
      title: postTitle,
      body: postBody,
      datetime, 
    }

    const apdatePost = [...allPosts, newPost]
    setAllPosts(apdatePost)
    localStorage.setItem('posts', JSON.stringify(apdatePost))
    setPostBody('')
    setPostTitle('')
    navigate('/')
  }

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(allPosts))
  }, [allPosts])
  
  
  const handlDelete = id => {
    const postList = allPosts.filter((post) => post.id !== id )
    console.log(postList);
    setAllPosts(postList)
    navigate("/")
  }
  

  return (
    <Routes>
     <Route path="/"
      element={<Layout allPosts={allPosts} />}
     >
     <Route index element={<Home allPosts={allPosts}/>} />
      <Route 
        path="post"
        element={<NewPost 
          postTitle={postTitle}
          postBody={postBody}
          setPostTitle={setPostTitle}
          setPostBody={setPostBody}
          handleSubmit={handleSubmit}
        />}
      />
      <Route path="edit/:id" element={<EditPost/>} />
     <Route path="post">
     
      <Route path=':id' element={<Post  handlDelete={handlDelete} allPosts={allPosts}/>} />

     </Route>
     <Route path="About" element={<About/>} />

     </Route>
    </Routes>
  )
  
}

export default App
