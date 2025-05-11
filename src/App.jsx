import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Post from "./components/Post"
import About from "./components/About"
import { useState } from "react"
import { posts } from "./utils/blog"




function App() {
  const [allPosts, setAllPosts] = useState(posts)
  const navigate = useNavigate()
  
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
     <Route path="post">
      <Route path=':id' element={<Post handlDelete={handlDelete} allPosts={allPosts}/>} />

     </Route>
     <Route path="About" element={<About/>} />

     </Route>
    </Routes>
  )
  
}

export default App
