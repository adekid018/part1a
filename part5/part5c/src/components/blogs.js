import React, { useState } from "react";
const Blog=(props)=>{
    {/*Created a state for the content visibility*/}
    const [contentVisibility,setBlogContentVisibility]=useState(false)
    {/*designed a style to show all the content of the blog */}
    const showBlogContentStyle={display:contentVisibility?"":"none",}
    {/*Toggle the value of the visibility*/}
    const showBlogContent=()=>{
        setBlogContentVisibility(!contentVisibility)
    }
    const blogsStyle={ paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5}
    //make the value of the button change based on the useState value
    const onClickValue=contentVisibility?"hide":"show"
    return(
    <div style={blogsStyle}>
            <p>{props.title} <button className="showBlogContentButton" onClick={showBlogContent}>{onClickValue}</button></p>
            <div style={showBlogContentStyle} className="content">
                <a href={`https://${props.url}`}>{props.url}</a>
                <p className="likes">Likes {props.vote}</p>
                <p>{props.author}</p>
                {/**/}
                <p>Created by {props.created}</p>
                <button onClick={props.delete}>Delete</button>
            </div>
    </div>
    )
}
export default Blog