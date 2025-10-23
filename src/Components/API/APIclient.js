import axios from "axios";


const apiClient = axios.create({
  baseURL : ["https://nteflix-backend-project.vercel.app/api/netflix","http://localhost:8000/api/netflix"],
  withCredentials : true,
})


apiClient.interceptors.request.use((config)=>{
  console.log("",config.url)
  return config ;
},
(error)=>{
return Promise.reject(error)
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403 || error.response?.status===401) {
      console.log("Unauthorized! Token may have expired");
    }
    return Promise.reject(error);
  }
);

export default apiClient
