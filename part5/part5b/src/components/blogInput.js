import React from "react"
const BlogInput=(props)=>{
    {/*created a style and set the value based on props which will be determined by the useState*/}
    const showCreateButton={display:props.blogVisibility?"none":""}
    const showForm={display:props.blogVisibility?"":"none"}
    return(
        <div>
            <div style={showCreateButton}>
                <button onClick={props.createBlogButton}>Create new blog</button>
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
                <button onClick={props.cancelBlog}>Cancel</button>
            </div>
        </div>
    )
}
export default BlogInput
