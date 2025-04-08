import React from 'react'

const Feed = ({posts}) => {
  return (
    <ul>
        {posts.length ? (
            posts.map(item => (
                <li className="item" key={item.id}>
                    {item.body}
                </li>
            ))
        ) : (
            <p className="empty">
                post not display
            </p>
        )}
    </ul>
  )
}

export default Feed