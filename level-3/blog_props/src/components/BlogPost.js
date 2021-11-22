import '../css/BlogPost.css'
import React from 'react'

function BlogPost({ title, subTitle, author, date }) {
    return (
        <div className='blog-post'>
            <h2 className='blog-title link'>{title}</h2>
            <h3 className='blog-subtitle link'>{subTitle}</h3>
            <p className='blog-date'>Posted By: <span className='blog-author link'>{author}</span> {date}</p>
        </div>
    )
}

export default BlogPost
