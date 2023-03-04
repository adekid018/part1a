import axios from "axios";
const url="http://localhost:4000/login"
const login= async (data)=>{
    const response=await axios.post(url,data)
    return response.data
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {login}