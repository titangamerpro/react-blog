import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Layout from "./components/Layout"

import { posts } from "./utils/blog"


function App() {

  return (
    <>
     <Layout posts={posts} />
    </>
  )
}

export default App
