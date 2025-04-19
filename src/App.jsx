import { Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"

import { posts } from "./utils/blog"
import Home from "./components/Home"


function App() {

  return (
    <Routes>
     <Route path="/"
      element={<Layout />}
     >
     <Route index element={<Home posts={posts}/>} />
     </Route>
    </Routes>
  )
}

export default App
