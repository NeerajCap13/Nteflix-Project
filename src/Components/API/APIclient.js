import axios from "axios";


const apiClient = axios.create({
  baseURL : "http://localhost:8000/api/netflix",
  withCredentials : true,
})


export default apiClient
