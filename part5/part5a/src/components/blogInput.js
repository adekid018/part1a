import React from "react"
const BlogInput=(props)=>{
    return(<div>
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
    </div>)
}
export default BlogInput
