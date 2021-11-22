import '../css/BlogList.css'
import React from 'react'
import BlogPost from './BlogPost'
import blogData from '../blogData'

function BlogList() {
    const posts = blogData.map((post, i) => {
        return <BlogPost title={post.title} subTitle={post.subTitle} author={post.author} date={post.date} key={i}/>
    })
    return (
        <div className='blog-list'>
            {posts}
            <button className='more-posts-btn'>OLDER POSTS →</button>
        </div>
    )
}

export default BlogList
