import axios from "axios";
const url="http://localhost:4000/blogs"
let token=null
// declared a function to be a able to set the token
const setToken = newToken => {
    token = `Bearer ${newToken}`
  }
const getBlog=()=>{
    const request=axios.get(url)
    return request.then(response=>response.data)
}

const addBlog=(data)=>{
    //added the token to the header 
    const config = {
        headers: { Authorization: token },
    }
    const request=axios.post(url,data,config)
    return request.then(response=>response.data)
}
const deleteBlogs=(id)=>{
    const config = {
        headers: { Authorization: token },
    }
    const request=axios.delete(`${url}/${id}`,config)
    return request.then(response=>response.data)
}
export default {getBlog,addBlog,deleteBlogs,setToken}