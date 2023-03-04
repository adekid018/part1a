import React from "react"
const BlogInput=(props)=>{
    //Created two styles 
    const hideBloginput={display:props.visibility?"none":""}
    const showBloginput={display:props.visibility?"":"none"}
    console.log(showBloginput)
    return(
    <div>
        {/*this will show by default */}
        <div style={hideBloginput}>
            <button onClick={props.addNewBlog}>Create new blog</button>
        </div>
        {/*This will show when the onclick button off Create new blog and it will showthe form */}
        <div style={showBloginput}>
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
        {/*On click of the cancel button the form will close by setting the display to none*/}
        <button onClick={props.cancelNewBlog}>Cancel</button>
        </div>
    </div>)
}
export default BlogInput
