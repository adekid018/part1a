import axios from "axios";
const url="http://localhost:4000/login"
const login=(data)=>{
    const request=axios.post(url,data)
    return request.then(response=>response.data)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {login}