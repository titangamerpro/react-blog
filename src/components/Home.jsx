import React from 'react'
import Feed from './Feed';

const Home = ({allPosts}) => {
    // console.log(posts);

  return (
    <>
    <main >
    <Feed posts={allPosts} />
    </main>
    
    </>
  )
}

export default Home