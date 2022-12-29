import React from "react";
const Blog=(props)=>{
    return(
    <div>
        <li>
            <p>{props.author}</p>
            <p>{props.title}</p>
            <a href={`https://${props.url}`}>{props.url}</a>
            <p>{props.url}</p>
            <p>{props.vote}</p>
            <button onClick={props.delete}>Delete</button>
        </li>
    </div>
    )
}
export default Blog