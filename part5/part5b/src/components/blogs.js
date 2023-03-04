import React, { useState } from "react";
const Blog=(props)=>{
    {/*Created a state for the content visibility*/}
    const [contentVisibility,setBlogContentVisibility]=useState(false)
    {/*designed a style to show all the content of the blog */}
    const showBlogContentStyle={display:contentVisibility?"":"none"}
    {/*Toggle the value of the visibility*/}
    const showBlogContent=()=>{
        setBlogContentVisibility(!contentVisibility)
    }
    //make the value of the button change based on the useState value
    const onClickValue=contentVisibility?"hide":"show"
    return(
    <div>
            <p>{props.title} <button onClick={showBlogContent}>{onClickValue}</button></p>
            <div style={showBlogContentStyle}>
                <a href={`https://${props.url}`}>{props.url}</a>
                <p>Likes {props.vote}</p>
                <p>{props.author}</p>
                <button onClick={props.delete}>Delete</button>
            </div>
    </div>
    )
}
export default Blog