import axios from "axios";


const APP_URL = process.env.REACT_APP_REST_API_URL;


const api_nestjs = axios.create({
    baseURL : APP_URL,
    headers:{
        "Content-type" : "application/json"
    }
})


api_nestjs.interceptors.response.use(
    
    function(response){

        if(response.status === 200 || response.status === 201 ){
            return response.data
        }else{
console.log(response)
            return Promise.reject(response.message)
        }
    },
    (error) => {
        return Promise.reject(error.response.statusText)
    } 

)



export { api_nestjs }
