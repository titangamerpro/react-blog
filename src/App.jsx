import { Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import { posts } from "./utils/blog"
import Home from "./components/Home"
import Post from "./components/Post"
import About from "./components/About"


function App() {

  return (
    <Routes>
     <Route path="/"
      element={<Layout />}
     >
     <Route index element={<Home posts={posts}/>} />
     <Route path="post">
     <Route path=':id' element={<Post posts={posts}/>} />

     </Route>
     <Route path="About" element={<About/>} />

     </Route>
    </Routes>
  )
}

export default App
