import axios from "axios";
const url="http://localhost:4000/blogs"
const getBlog=()=>{
    const request=axios.get(url)
    return request.then(response=>response.data)
}
const addBlog=(data)=>{
    const request=axios.post(url,data)
    return request.then(response=>response.data)
}
const deleteBlogs=(id)=>{
    const request=axios.delete(`${url}/${id}`)
    return request.then(response=>response.data)
}
export default {getBlog,addBlog,deleteBlogs}