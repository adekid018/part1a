import React from "react"
import { useState } from "react"
const BlogInput=(props)=>{
    /*created a new state for the blog form in its own component */
    const [newBlogForm,setNewBlogForm]=useState(false)

    {/*created a style and set the value based on props which will be determined by the useState*/}
    const showCreateButton={display:newBlogForm?"none":""}
    const showForm={display:newBlogForm?"":"none"}
    //a function use to change visibility state
    const toggleBlog=()=>{
        setNewBlogForm(!newBlogForm)
    }
    return(
        <div>
            <div style={showCreateButton}>
                <button onClick={toggleBlog}>Create new blog</button>
            </div>
            <div style={showForm}>
            <h1>Create New Blog</h1>
            <form onSubmit={props.blogSubmission}>
                <label>Author</label>
                <input type={"text"}  value={props.authorName} onChange={props.author} placeholder="Author Name"/>
                <label>Title</label>
                <input type={"text"}  value={props.titleName} onChange={props.title} placeholder="Title"/>
                <label>URL</label>
                <input type={"text"}  value={props.urlName} onChange={props.url} placeholder="eg www....."/>
                <button onClick={props.vote}>Vote</button>
                <p>{props.noVote}</p>
                <button type="submit"onClick={props.submit}>Submit</button>
            </form>
                <button onClick={toggleBlog}>Cancel</button>
            </div>
        </div>
    )
}
export default BlogInput
