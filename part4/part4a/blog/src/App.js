import './App.css';
import { useEffect, useState } from 'react';
import BlogInput from './components/blogInput';
import Blog from './components/blogs';
//import axios from 'axios'
import blogServer from './severs/blogSever'

function App() {
  const [author, setAuthorName]=useState("")
  const [title, setTitle]=useState("")
  const [url, setUrl]=useState("")
  const [noVote, setVote]=useState(0)
  const [blog, setBlog]=useState([])
  
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
const generateId = () => {
  const maxId = blog.length > 0
    ? Math.max(...blog.map(n => n.id))
    : 0
  return maxId + 1
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

console.log(blog);
  return (
    <div className="App">
      <h1>BLOG</h1>
      <BlogInput authorName={author} author={handleAuthorName}
      titleName={title} title={handleTitleName}
      urlName={url} url={handleUrl}
      vote={castVote}
      noVote={noVote}
      submit={submitBlog}
      />
      {blog.map((value)=>
      <Blog key={value.id} author={value.author} title={value.title}
      url={value.url} vote={value.vote}
      delete={()=>deleteBlog(value.id)}
      />
      )}
    </div>
  );
}

export default App;
