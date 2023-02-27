import './App.css';
import { useEffect, useState } from 'react';
import BlogInput from './components/blogInput';
import Blog from './components/blogs';
//import axios from 'axios'
import blogServer from './severs/blogSever'
import LoginForm from './components/loginForm';
import loginSever from './severs/loginSever';

function App() {
  const [author, setAuthorName]=useState("")
  const [title, setTitle]=useState("")
  const [url, setUrl]=useState("")
  const [noVote, setVote]=useState(0)
  const [blog, setBlog]=useState([])
  const [user,setUser]=useState(null)
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  //event handlers
const handleAuthorName=(e)=>{
  setAuthorName(e.target.value)
}
const handleTitleName=(e)=>{
  setTitle(e.target.value)
}
const handleUrl=(e)=>{
  setUrl(e.target.value)
}
const castVote=(e)=>{
  e.preventDefault()
  setVote(noVote+1)
}

const submitBlog=(e)=>{
  e.preventDefault();
  const newBlog={
    author:author,
    title:title,
    url:url,
    vote:noVote
  }
  blogServer
  .addBlog(newBlog)
  .then(response=>setBlog(blog.concat(response)))
  .catch(error=>console.log(error))
//console.log("working")
}


const loginUser= async (e)=>{
  e.preventDefault();
  const login={
    username:username,
    password:password
  }
  console.log("working")
  try {
    const user = await loginSever.login({
      username, password,
    })  
    setUser(user)
    //setUsername('')
    //setPassword('')
    console.log(user)
  }
  
  
catch (exception) {
  
  console.log("error login")
}

}

const deleteBlog=(id)=>{
  console.log("working");
  blogServer
  .deleteBlogs(id)
  .then(response=>response.data)
  setBlog(blog.filter(value=>value.id!==id))
}
useEffect(()=>{
  blogServer
  .getBlog()
  .then(response=>setBlog(response))
},[])/*
const logout=()=>{
  console.log("working")
  window.localStorage.removeItem(loggedInUser)
  //setUser(null)
}*/
  return (
    <div className="App">
      {/*if user is null it will display the login form as declared in the login 
      component form and if false display the list of blogs*/}
      {user === null ? 
      <LoginForm user={user} userName={username} setUserName={({target})=>setUsername(target.value)} password={password}
       setPassword={({target})=>setPassword(target.value)} loginForm={loginUser}/> 
       :
       <LoginForm user={user} userName={username} setUserName={({target})=>setUsername(target.value)} password={password}
       setPassword={({target})=>setPassword(target.value)} loginUser={loginUser}
       blog={blog} loggedInUser={user.name}
        />}
       
      {/*<h1>BLOG</h1>
      <BlogInput authorName={author} author={handleAuthorName}
      titleName={title} title={handleTitleName}
      urlName={url} url={handleUrl}
      vote={castVote}
      noVote={noVote}
      submit={submitBlog}
    />*/}
    </div>
  );
}

export default App;
