import axios from 'axios'

const url="http://localhost:4000/api/persons"

const all=()=>{
    const severResponse=axios.get(url)
    return severResponse.then(response=>response.data)
}
const addedContact=(doc)=>{
    const dataToBeAdded=axios.post(url,doc)
    return dataToBeAdded.then(response=>response.data)
}
const deletion=(id)=>{
    return axios.delete(`${url}/${id}`)
}

export default {
    all,
    addedContact, 
       deletion}

