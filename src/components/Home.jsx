import React from 'react'
import Feed from './Feed';

const Home = ({posts}) => {
    console.log(posts);

  return (
    <>
    <main >
    <Feed posts={posts} />
    </main>
    
    </>
  )
}

export default Home