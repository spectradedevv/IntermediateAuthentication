import axios from "axios"

export default axios.create({
    baseURL:"https://standardpartialapi.onrender.com"
})

export const axiosPrivate = axios.create({
    baseURL:"https://standardpartialapi.onrender.com",
    headers:{"Content-Type":"application/json"},
    withCredentials:true
})

