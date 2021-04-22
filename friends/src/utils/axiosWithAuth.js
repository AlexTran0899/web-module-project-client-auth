import axios from'axios';

export const axiosWithAuth = () =>{
    //return a new instance with of axios witht eh config
    //object built into it
    return axios.create(
        {
            headers:{
              Authorization: JSON.parse(window.localStorage.getItem('token')),
            },
            baseURL: "http://localhost:5000",
          }
          
    )
}