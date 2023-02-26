import React from "react";
import Blog from "./blogs";
/*Created a form in a seperate component and declared props value so that i can use it in App.js and decleared a conditional render that
so that if the user isnt login it shouldnt display the blogs
*/
const LoginForm=(props)=>{
    if(props.user===null){
        return(
        <div>
            <h2>Log in to application</h2>
            <form onSubmit={props.loginUser}>
                <label>Username</label>
                <input type={"text"} onChange={props.setUserName} value={props.userName}/>
                <label>Password</label>
                <input type={"password"} onChange={props.setPassword} value={props.password}/>
                <button type="submit">Login</button>
            </form>
        </div>    
        )
    }    
    return(
    <div>
      <h2>blogs</h2>
      <p>{props.loggedInUser} logged in</p>
      {props.blog.map((value)=>
      <Blog key={value.id} author={value.author} title={value.title}
      url={value.url} vote={value.vote}
      /*delete={()=>deleteBlog(value.id)}*/
      />
      )}
    </div>
    )/**/
}
export default {LoginForm}