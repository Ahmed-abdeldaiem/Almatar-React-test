import axios from "axios";

const API_URL ='http://localhost:9000';

export const getAllUser=()=>{
   console.log('server accessed');
    return axios.get(`${API_URL}/users`);
}
