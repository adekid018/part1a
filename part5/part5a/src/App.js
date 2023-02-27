import './App.css';
import { useEffect, useState } from 'react';
import BlogInput from './components/blogInput';
import Blog from './components/blogs';
//import axios from 'axios'
import blogServer from './severs/blogSever'
import LoginForm from './components/loginForm';
import loginSever from './severs/loginSever';
import blogSever from './severs/blogSever';

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
    //Saved the user to the local storage
    window.localStorage.setItem(
      'loggedIn', JSON.stringify(user)
    )
    //set the token gotten from jwt and passed as an argument
    blogServer.setToken(user.token)
    setUser(user)
    //setUsername('')
    //setPassword('')
    console.log(user)
  }
catch (exception) {
  /*setErrorMessage('Wrong credentials')
  setTimeout(() => {
    setErrorMessage(null)
  }, 5000)*/
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
},[])
/*This method will run once the browser loads it will check if
there is a user with the key  "loggedIn" if yes it will load the blog
else it will not instead it will load the form
*/
useEffect(()=>{
  const loggedInUser=window.localStorage.getItem("loggedIn")
  if(loggedInUser){
    const user= JSON.parse(loggedInUser)
    setUser(user)
    blogSever.setToken(user.token)
  }
},[])
/*A function used to remove a user stored user in the local storage
and setting the user to null so that the login form can come up
*/
const logout=()=>{
  console.log("working")
  window.localStorage.removeItem("loggedIn")
  setUser(null)
}
console.log(user)
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
       blog={blog} loggedInUser={user.name} logoutUser={logout}
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
